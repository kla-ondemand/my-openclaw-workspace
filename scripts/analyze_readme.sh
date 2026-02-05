#!/bin/bash
# Quick README analysis for it-ondemand repos

ORG="it-ondemand"
CSV_FILE="/Users/pituk/.openclaw/workspace/readme_standards_report.csv"

echo "repo_name,has_readme,has_title,has_description,has_installation,has_usage,has_contributing,has_license,missing_sections,srs_exists" > "$CSV_FILE"

gh repo list "$ORG" --limit 100 --json name -q '.[].name' | while read -r repo; do
  echo "Checking: $repo"
  
  # Check README.md
  readme_data=$(gh api "repos/$ORG/$repo/contents/README.md" 2>/dev/null)
  
  if [ -z "$readme_data" ] || [ "$readme_data" = "null" ]; then
    # No README
    echo "$repo,false,false,false,false,false,false,false,title description installation usage contributing license,false" >> "$CSV_FILE"
    continue
  fi
  
  # Get content
  readme_content=$(echo "$readme_data" | jq -r '.content // empty' | base64 -d 2>/dev/null | tr '[:upper:]' '[:lower:]')
  
  if [ -z "$readme_content" ]; then
    echo "$repo,true,false,false,false,false,false,false,title description installation usage contributing license,false" >> "$CSV_FILE"
    continue
  fi
  
  # Check sections
  has_title=$(echo "$readme_content" | grep -qE '^#[^#]' && echo "true" || echo "false")
  has_desc=$(echo "$readme_content" | wc -l | awk '{print ($1 > 5) ? "true" : "false"}')
  has_install=$(echo "$readme_content" | grep -qE '(install|setup|getting started|requirements)' && echo "true" || echo "false")
  has_usage=$(echo "$readme_content" | grep -qE '(usage|how to use|using|run|examples)' && echo "true" || echo "false")
  has_contrib=$(echo "$readme_content" | grep -qE '(contributing|contribution|developers|build)' && echo "true" || echo "false")
  has_license=$(echo "$readme_content" | grep -qE '(license|licence|copyright|mit|apache|gpl)' && echo "true" || echo "false")
  
  # Build missing sections
  missing=""
  [ "$has_title" = "false" ] && missing="${missing}title "
  [ "$has_desc" = "false" ] && missing="${missing}description "
  [ "$has_install" = "false" ] && missing="${missing}installation "
  [ "$has_usage" = "false" ] && missing="${missing}usage "
  [ "$has_contrib" = "false" ] && missing="${missing}contributing "
  [ "$has_license" = "false" ] && missing="${missing}license "
  missing=$(echo "$missing" | sed 's/ /,/g' | sed 's/,$//')
  [ -z "$missing" ] && missing="none"
  
  # Check SRS
  srs=$(gh api "repos/$ORG/$repo/contents/SRS.md" 2>/dev/null | jq -r 'if .name then "true" else "false" end')
  [ "$srs" != "true" ] && srs=$(gh api "repos/$ORG/$repo/contents/docs/SRS.md" 2>/dev/null | jq -r 'if .name then "true" else "false" end')
  
  echo "$repo,true,$has_title,$has_desc,$has_install,$has_usage,$has_contrib,$has_license,$missing,$srs" >> "$CSV_FILE"
done

echo "Analysis complete!"
