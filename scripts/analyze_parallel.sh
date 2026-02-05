#!/bin/bash
# Parallel README analyzer for it-ondemand repos

REPO_LIST="/Users/pituk/.openclaw/workspace/repo_list.txt"
TEMP_DIR="/Users/pituk/.openclaw/workspace/temp_analysis"
mkdir -p "$TEMP_DIR"

# Function to analyze a single repo
analyze_repo() {
    local repo="$1"
    local temp_file="$TEMP_DIR/${repo}.csv"
    
    # Check README.md exists
    readme_check=$(gh api "repos/it-ondemand/$repo/contents/README.md" 2>/dev/null)
    has_readme="false"
    has_title="false"
    has_description="false"
    has_installation="false"
    has_usage="false"
    has_contributing="false"
    has_license="false"
    missing_sections=""
    
    if [ $? -eq 0 ]; then
        has_readme="true"
        
        # Get README content
        readme_content=$(echo "$readme_check" | jq -r '.content' | base64 -d 2>/dev/null | tr '[:upper:]' '[:lower:]')
        
        # Check for title
        if echo "$readme_content" | grep -qE '^#[[:space:]]+[[:alnum:]]'; then
            has_title="true"
        fi
        
        # Check for description
        if echo "$readme_content" | grep -qE '^[[:alnum:]]+( [[:alnum:]]+){4,}'; then
            has_description="true"
        fi
        
        # Check for installation
        if echo "$readme_content" | grep -qE '^#{1,3}[[:space:]]*(installation|install|setup|getting started|requirements|prerequisites)'; then
            has_installation="true"
        fi
        
        # Check for usage
        if echo "$readme_content" | grep -qE '^#{1,3}[[:space:]]*(usage|how to use|using|examples|api|documentation|getting started)'; then
            has_usage="true"
        fi
        
        # Check for contributing
        if echo "$readme_content" | grep -qE '^#{1,3}[[:space:]]*(contributing|contribution|contributors|how to contribute)'; then
            has_contributing="true"
        fi
        
        # Check for license
        if echo "$readme_content" | grep -qE '^#{1,3}[[:space:]]*(license|licensing|copyright|mit|apache|gpl)'; then
            has_license="true"
        fi
        
        # Build missing sections
        missing=""
        [ "$has_title" = "false" ] && missing="${missing}title,"
        [ "$has_description" = "false" ] && missing="${missing}description,"
        [ "$has_installation" = "false" ] && missing="${missing}installation,"
        [ "$has_usage" = "false" ] && missing="${missing}usage,"
        [ "$has_contributing" = "false" ] && missing="${missing}contributing,"
        [ "$has_license" = "false" ] && missing="${missing}license,"
        missing_sections=$(echo "$missing" | sed 's/,$//')
    fi
    
    # Check SRS.md
    gh api "repos/it-ondemand/$repo/contents/SRS.md" &>/dev/null
    if [ $? -eq 0 ]; then
        srs_exists="true"
    else
        srs_exists="false"
    fi
    
    echo "$repo,$has_readme,$has_title,$has_description,$has_installation,$has_usage,$has_contributing,$has_license,$missing_sections,$srs_exists" > "$temp_file"
    echo "Done: $repo"
}

export -f analyze_repo
export TEMP_DIR

# Run analysis in parallel (4 at a time)
cat "$REPO_LIST" | xargs -P 4 -I {} bash -c 'analyze_repo "$@"' _ {}

# Combine results
CSV_FILE="/Users/pituk/.openclaw/workspace/readme_standards_report.csv"
echo "repo_name,has_readme,has_title,has_description,has_installation,has_usage,has_contributing,has_license,missing_sections,srs_exists" > "$CSV_FILE"
cat "$TEMP_DIR"/*.csv >> "$CSV_FILE"

# Cleanup
rm -rf "$TEMP_DIR"

echo ""
echo "Analysis complete! CSV saved to: $CSV_FILE"
