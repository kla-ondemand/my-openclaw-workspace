#!/bin/bash

# 📋 Document Update Checker
# ตรวจสอบความถูกต้องและความสดใหม่ของเอกสารใน workspace
# Run: ./scripts/check-documents.sh

WORKSPACE="$HOME/.openclaw/workspace"
COLOR_RED='\033[0;31m'
COLOR_GREEN='\033[0;32m'
COLOR_YELLOW='\033[1;33m'
COLOR_BLUE='\033[0;34m'
COLOR_NC='\033[0m' # No Color

echo -e "${COLOR_BLUE}========================================${COLOR_NC}"
echo -e "${COLOR_BLUE}  Document Update Checker${COLOR_NC}"
echo -e "${COLOR_BLUE}  OneLearn Engineering Workspace${COLOR_NC}"
echo -e "${COLOR_BLUE}========================================${COLOR_NC}"
echo ""

# ตรวจสอบไฟล์หลัก
check_critical_files() {
    echo -e "${COLOR_BLUE}[1/5] ตรวจสอบไฟล์หลัก (Critical Files)${COLOR_NC}"
    
    files=(
        "INDEX.md:Master Index"
        "README.md:Overview"
        "MEMORY.md:Long-term Memory"
        "LINKS.md:Cross-references"
    )
    
    for item in "${files[@]}"; do
        IFS=':' read -r file desc <<< "$item"
        if [ -f "$WORKSPACE/$file" ]; then
            mtime=$(stat -f "%Sm" -t "%Y-%m-%d %H:%M" "$WORKSPACE/$file" 2>/dev/null || stat -c "%y" "$WORKSPACE/$file" | cut -d' ' -f1)
            echo -e "  ${COLOR_GREEN}✓${COLOR_NC} $file ($desc) - Last modified: $mtime"
        else
            echo -e "  ${COLOR_RED}✗${COLOR_NC} $file ($desc) - ${COLOR_RED}MISSING!${COLOR_NC}"
        fi
    done
    echo ""
}

# ตรวจสอบโปรเจกต์
check_projects() {
    echo -e "${COLOR_BLUE}[2/5] ตรวจสอบโปรเจกต์ (Projects)${COLOR_NC}"
    
    projects=(
        "ai-first-team:AI-First Team Process"
        "sfd-pocket:SFD Pocket POC"
        "onelearn-platform:OneLearn Platform"
        "team-analysis:Team Analysis"
    )
    
    for item in "${projects[@]}"; do
        IFS=':' read -r dir desc <<< "$item"
        if [ -d "$WORKSPACE/projects/$dir" ]; then
            file_count=$(find "$WORKSPACE/projects/$dir" -type f | wc -l)
            echo -e "  ${COLOR_GREEN}✓${COLOR_NC} $dir ($desc) - $file_count files"
        else
            echo -e "  ${COLOR_YELLOW}⚠${COLOR_NC} $dir ($desc) - ${COLOR_YELLOW}Not found${COLOR_NC}"
        fi
    done
    echo ""
}

# ตรวจสอบ Activity Logs
check_activity_logs() {
    echo -e "${COLOR_BLUE}[3/5] ตรวจสอบ Activity Logs${COLOR_NC}"
    
    # หา activity logs ล่าสุด
    latest_log=$(find "$WORKSPACE" -name "ACTIVITY_LOG_*.md" -type f -exec ls -t {} + 2>/dev/null | head -1)
    
    if [ -n "$latest_log" ]; then
        log_name=$(basename "$latest_log")
        log_date=$(echo "$log_name" | grep -oE '[0-9]{4}-[0-9]{2}-[0-9]{2}')
        today=$(date +%Y-%m-%d)
        
        if [ "$log_date" = "$today" ]; then
            echo -e "  ${COLOR_GREEN}✓${COLOR_NC} $log_name - ${COLOR_GREEN}Updated today${COLOR_NC}"
        else
            echo -e "  ${COLOR_YELLOW}⚠${COLOR_NC} $log_name - Last update: $log_date (Today: $today)"
            echo -e "     ${COLOR_YELLOW}→ Consider updating today's activity${COLOR_NC}"
        fi
    else
        echo -e "  ${COLOR_RED}✗${COLOR_NC} No activity logs found"
    fi
    echo ""
}

# ตรวจสอบ Team Summary
check_team_summary() {
    echo -e "${COLOR_BLUE}[4/5] ตรวจสอบ Team Summary${COLOR_NC}"
    
    team_file="$WORKSPACE/projects/team-analysis/team_summary_for_games.md"
    
    if [ -f "$team_file" ]; then
        mtime=$(stat -f "%Sm" -t "%Y-%m-%d" "$team_file" 2>/dev/null || stat -c "%y" "$team_file" | cut -d' ' -f1)
        
        # ตรวจสอบว่ามี Pei หรือยัง (indicates latest version)
        if grep -q "Pei" "$team_file"; then
            echo -e "  ${COLOR_GREEN}✓${COLOR_NC} team_summary_for_games.md - Updated: $mtime"
            echo -e "     ${COLOR_GREEN}→ Includes Pei (CTO+CPO)${COLOR_NC}"
        else
            echo -e "  ${COLOR_YELLOW}⚠${COLOR_NC} team_summary_for_games.md - Updated: $mtime"
            echo -e "     ${COLOR_YELLOW}→ Missing Pei (needs update)${COLOR_NC}"
        fi
    else
        echo -e "  ${COLOR_RED}✗${COLOR_NC} team_summary_for_games.md - Not found"
    fi
    echo ""
}

# ตรวจสอบ Presentation
check_presentation() {
    echo -e "${COLOR_BLUE}[5/5] ตรวจสอบ AI-First Presentation${COLOR_NC}"
    
    html_file="$WORKSPACE/projects/ai-first-team/AI_FIRST_TEAM_PRESENTATION.html"
    
    if [ -f "$html_file" ]; then
        file_size=$(du -h "$html_file" | cut -f1)
        echo -e "  ${COLOR_GREEN}✓${COLOR_NC} AI_FIRST_TEAM_PRESENTATION.html - Size: $file_size"
        
        # ตรวจสอบจำนวน slides
        slide_count=$(grep -c "class=\"slide" "$html_file" 2>/dev/null || echo "0")
        echo -e "     ${COLOR_GREEN}→ $slide_count slides found${COLOR_NC}"
    else
        echo -e "  ${COLOR_RED}✗${COLOR_NC} AI_FIRST_TEAM_PRESENTATION.html - Not found"
    fi
    echo ""
}

# แสดงสรุป
show_summary() {
    echo -e "${COLOR_BLUE}========================================${COLOR_NC}"
    echo -e "${COLOR_BLUE}  Summary${COLOR_NC}"
    echo -e "${COLOR_BLUE}========================================${COLOR_NC}"
    echo ""
    
    # นับสถิติ
    total_md=$(find "$WORKSPACE" -name "*.md" -type f | wc -l)
    total_html=$(find "$WORKSPACE" -name "*.html" -type f | wc -l)
    
    echo -e "  Total Markdown files: ${COLOR_GREEN}$total_md${COLOR_NC}"
    echo -e "  Total HTML files: ${COLOR_GREEN}$total_html${COLOR_NC}"
    echo ""
    
    # แนะนำ action
    echo -e "${COLOR_BLUE}📋 Recommended Actions:${COLOR_NC}"
    echo ""
    
    # เช็คว่ามี activity log วันนี้หรือยัง
    today_log=$(find "$WORKSPACE" -name "ACTIVITY_LOG_$(date +%Y-%m-%d).md" -type f)
    if [ -z "$today_log" ]; then
        echo -e "  ${COLOR_YELLOW}1. Create today's activity log${COLOR_NC}"
        echo -e "     → Use: shared/templates/ACTIVITY_LOG_TEMPLATE.md"
    fi
    
    # เช็ค git status
    cd "$WORKSPACE"
    if [ -d ".git" ]; then
        uncommitted=$(git status --porcelain 2>/dev/null | wc -l)
        if [ "$uncommitted" -gt 0 ]; then
            echo -e "  ${COLOR_YELLOW}2. Commit changes ($uncommitted files modified)${COLOR_NC}"
            echo -e "     → Run: git add -A && git commit -m \"update: ...\""
        fi
    fi
    
    echo ""
}

# Main execution
main() {
    check_critical_files
    check_projects
    check_activity_logs
    check_team_summary
    check_presentation
    show_summary
}

main