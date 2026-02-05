#!/usr/bin/env python3
"""Analyze README.md standards for it-ondemand GitHub repositories"""

import subprocess
import json
import re
import csv

# Get all repos
result = subprocess.run(
    ['gh', 'repo', 'list', 'it-ondemand', '--limit', '100', '--json', 'name,url,description'],
    capture_output=True, text=True
)
repos = json.loads(result.stdout)

results = []

for repo in repos:
    repo_name = repo['name']
    print(f"Analyzing: {repo_name}")
    
    # Check if README.md exists
    readme_result = subprocess.run(
        ['gh', 'api', f'repos/it-ondemand/{repo_name}/contents/README.md'],
        capture_output=True, text=True
    )
    
    has_readme = readme_result.returncode == 0
    has_title = False
    has_description = False
    has_installation = False
    has_usage = False
    has_contributing = False
    has_license = False
    missing_sections = []
    
    if has_readme:
        # Get README content
        content_result = subprocess.run(
            ['gh', 'api', f'repos/it-ondemand/{repo_name}/contents/README.md'],
            capture_output=True, text=True
        )
        
        try:
            content_data = json.loads(content_result.stdout)
            import base64
            readme_content = base64.b64decode(content_data.get('content', '')).decode('utf-8', errors='ignore').lower()
            
            # Check for title (H1 heading - line starting with # )
            has_title = bool(re.search(r'^#\s+\w+', readme_content, re.MULTILINE))
            
            # Check for description (paragraph after title, at least 10 words)
            lines = readme_content.split('\n')
            desc_found = False
            for i, line in enumerate(lines):
                if line.startswith('# ') and i + 1 < len(lines):
                    # Look for description in next few non-empty lines
                    for j in range(i+1, min(i+5, len(lines))):
                        next_line = lines[j].strip()
                        if next_line and len(next_line.split()) >= 3:
                            desc_found = True
                            break
                    break
            # Also check if there's any substantial paragraph
            if not desc_found:
                paragraphs = [p for p in readme_content.split('\n\n') if len(p.strip().split()) >= 5]
                desc_found = len(paragraphs) > 0
            has_description = desc_found
            
            # Check for installation section
            has_installation = bool(re.search(r'#+\s*(installation|install|setup|getting started|requirements)', readme_content))
            
            # Check for usage section
            has_usage = bool(re.search(r'#+\s*(usage|how to use|using|examples|api|documentation)', readme_content))
            
            # Check for contributing section
            has_contributing = bool(re.search(r'#+\s*(contributing|contribution|contributors|how to contribute)', readme_content))
            
            # Check for license section
            has_license = bool(re.search(r'#+\s*(license|licensing|copyright|mit|apache|gpl)', readme_content))
            
        except Exception as e:
            print(f"  Error parsing README for {repo_name}: {e}")
    
    # Determine missing sections
    if has_readme:
        if not has_title:
            missing_sections.append('title')
        if not has_description:
            missing_sections.append('description')
        if not has_installation:
            missing_sections.append('installation')
        if not has_usage:
            missing_sections.append('usage')
        if not has_contributing:
            missing_sections.append('contributing')
        if not has_license:
            missing_sections.append('license')
    
    # Check if SRS.md exists
    srs_result = subprocess.run(
        ['gh', 'api', f'repos/it-ondemand/{repo_name}/contents/SRS.md'],
        capture_output=True, text=True
    )
    srs_exists = srs_result.returncode == 0
    
    results.append({
        'repo_name': repo_name,
        'has_readme': has_readme,
        'has_title': has_title,
        'has_description': has_description,
        'has_installation': has_installation,
        'has_usage': has_usage,
        'has_contributing': has_contributing,
        'has_license': has_license,
        'missing_sections': ','.join(missing_sections) if missing_sections else '',
        'srs_exists': srs_exists
    })

# Write CSV
csv_path = '/Users/pituk/.openclaw/workspace/readme_standards_report.csv'
with open(csv_path, 'w', newline='') as f:
    writer = csv.DictWriter(f, fieldnames=[
        'repo_name', 'has_readme', 'has_title', 'has_description', 
        'has_installation', 'has_usage', 'has_contributing', 'has_license',
        'missing_sections', 'srs_exists'
    ])
    writer.writeheader()
    writer.writerows(results)

print(f"\nAnalysis complete! CSV saved to: {csv_path}")
print(f"Total repos analyzed: {len(results)}")

# Print summary
has_readme_count = sum(1 for r in results if r['has_readme'])
has_srs_count = sum(1 for r in results if r['srs_exists'])
complete_readme = sum(1 for r in results if r['has_readme'] and not r['missing_sections'])
missing_readme = len(results) - has_readme_count
missing_sections_count = sum(1 for r in results if r['has_readme'] and r['missing_sections'])

print(f"\n=== SUMMARY ===")
print(f"Total repos: {len(results)}")
print(f"Repos with README: {has_readme_count}")
print(f"Repos with complete README (all sections): {complete_readme}")
print(f"Repos missing README: {missing_readme}")
print(f"Repos missing key sections: {missing_sections_count}")
print(f"Repos with SRS.md: {has_srs_count}")
