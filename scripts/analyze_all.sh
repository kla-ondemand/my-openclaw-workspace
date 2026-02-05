#!/bin/bash
# Complete README analysis for remaining it-ondemand repos

CSV_FILE="/Users/pituk/.openclaw/workspace/readme_standards_report.csv"
REPO_LIST="/Users/pituk/.openclaw/workspace/repo_list.txt"

# Create fresh CSV
echo "repo_name,has_readme,has_title,has_description,has_installation,has_usage,has_contributing,has_license,missing_sections,srs_exists" > "$CSV_FILE"

count=0
total=$(grep -c . "$REPO_LIST")

while IFS= read -r repo; do
    [ -z "$repo" ] && continue
    count=$((count + 1))
    echo "[$count/$total] Analyzing: $repo"
    
    # Check README.md exists
    if gh api "repos/it-ondemand/$repo/contents/README.md" >/dev/null 2>&1; then
        has_readme="true"
        
        # Get README content
        readme_content=$(gh api "repos/it-ondemand/$repo/contents/README.md" 2>/dev/null | jq -r '.content' | base64 -d 2>/dev/null | tr '[:upper:]' '[:lower:]')
        
        # Check sections
        has_title="false"
        has_description="false"
        has_installation="false"
        has_usage="false"
        has_contributing="false"
        has_license="false"
        
        echo "$readme_content" | grep -qE '^#[[:space:]]+[[:alnum:]]' && has_title="true"
        echo "$readme_content" | grep -qE '^[[:alnum:]]+( [[:alnum:]]+){4,}' && has_description="true"
        echo "$readme_content" | grep -qE '^#{1,3}[[:space:]]*(installation|install|setup|getting started|requirements|prerequisites)' && has_installation="true"
        echo "$readme_content" | grep -qE '^#{1,3}[[:space:]]*(usage|how to use|using|examples|api|documentation)' && has_usage="true"
        echo "$readme_content" | grep -qE '^#{1,3}[[:space:]]*(contributing|contribution|contributors)' && has_contributing="true"
        echo "$readme_content" | grep -qE '^#{1,3}[[:space:]]*(license|licensing|copyright|mit|apache|gpl)' && has_license="true"
        
        # Build missing sections
        missing=""
        [ "$has_title" = "false" ] && missing="${missing}title,"
        [ "$has_description" = "false" ] && missing="${missing}description,"
        [ "$has_installation" = "false" ] && missing="${missing}installation,"
        [ "$has_usage" = "false" ] && missing="${missing}usage,"
        [ "$has_contributing" = "false" ] && missing="${missing}contributing,"
        [ "$has_license" = "false" ] && missing="${missing}license,"
        missing_sections=$(echo "$missing" | sed 's/,$//')
    else
        has_readme="false"
        has_title="false"
        has_description="false"
        has_installation="false"
        has_usage="false"
        has_contributing="false"
        has_license="false"
        missing_sections="title,description,installation,usage,contributing,license"
    fi
    
    # Check SRS.md
    if gh api "repos/it-ondemand/$repo/contents/SRS.md" >/dev/null 2>&1; then
        srs_exists="true"
    else
        srs_exists="false"
    fi
    
    echo "$repo,$has_readme,$has_title,$has_description,$has_installation,$has_usage,$has_contributing,$has_license,$missing_sections,$srs_exists" >> "$CSV_FILE"
done < "$REPO_LIST"

echo ""
echo "=== ANALYSIS COMPLETE ==="
echo "CSV saved to: $CSV_FILE"
