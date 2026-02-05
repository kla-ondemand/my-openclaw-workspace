#!/bin/bash
# Quick README check for it-ondemand repos - FAST VERSION

ORG="it-ondemand"

# All repos
read -r -d '' repos <<'EOF'
student-portal-api
learn-service-api
refund-change-management-service
learn-service-ui
SA-TA-Booking
airflow
learn-portal-api
learn-portal-ui
data-lakehouse
payment-integration
insidesatit
ignite_ignite_liff
ig-student-portal
ig-booking1on1
auth-service
oauth-gateway
order-management-service
payment-service
learn-shop-online-ui
learn-delivery-api
onboarding-service
student-portal-ui
ondemand
payment-service-ui
steamlit-tribe-1-service
learn-shop-online-server
atlas-erp-queue-manager
data-quality-management
LE_Projector_DonorBoard_Backend
LE_Projector_DonorBoard_Frontend
data-team-api
learn-poral-migration
report-api-test
notification-service
amortization-service
poc-nextjs-share-cookie-1
rbac-provisioning-complete-Create
rbac-provisioning-complete-Delete
courses-service
oe-mastercourse
LC-sportsday
be-form-service-api
fe-form-service
audit-service
so-adapter
bank-gateway
etax-service
generate-bank-transfer-file
sku-promotion-management
github-backup
user-portal
learn-portal-k6-script
user-api
self_api
reward-points-ui
kissflow-webhook
atlas-pubsub-forwarder
poc-nextjs-share-cookie-2
course-recommendation
RBAC-awx-project
lic_stock_learn-web
lic_stock_learn-front
atlas-mobile-app
atlas-strapi
asset-service
upload-file-service
oe-wangplan
asset-management-service
self_one
edusmithsales
career-school-data
airflow-UAT
send-in-blue
atlas-shorten-url
debt-collection
git-action-poc
learn-okr
atlas-diagram
atlas-app-hit
atlas-logger-service
user-portal-backoffice
od-flash-fulfillment-service
SSIS-SALE-ERP
SSIS-B2B-AMT
TEST-GITHUB
SSIS-LEARNCRAFT
point-engine
SSIS-ONLINE-POS
atlas-erp-tunnel
appa-sale-system
academic-cost
app-hit-service-poc
SSIS-INVENTORY_AGING
SSIS-CUSTOMER-DEPT-TRACKING
amt
SSIS-CUSTOMER_AR_AP
SSIS-ONLINE-PEDAGOGY
SSIS-SALE-ERP-FIX
SSIS-CURRENT_TERM
SSIS-JIRA-GW
EOF

echo "repo_name,has_readme,has_title,has_description,has_installation,has_usage,has_contributing,has_license,missing_sections,srs_exists"

# Function to check a single repo
check_repo() {
  local repo=$1
  local org=$2
  
  # Check README exists
  local readme_info=$(gh api "/repos/${org}/${repo}/contents/README.md" --jq '{size: .size, content: .content}' 2>/dev/null)
  
  if [ -z "$readme_info" ] || [ "$readme_info" = "null" ]; then
    # Check for SRS
    local srs=$(gh api "/repos/${org}/${repo}/contents/SRS.md" 2>/dev/null | jq -r 'if .name then "Yes" else "No" end')
    [ "$srs" != "Yes" ] && srs=$(gh api "/repos/${org}/${repo}/contents/docs/SRS.md" 2>/dev/null | jq -r 'if .name then "Yes" else "No" end')
    echo "${repo},No,N/A,N/A,N/A,N/A,N/A,N/A,No README.md,${srs}"
    return
  fi
  
  # Decode and analyze README
  local readme_content=$(echo "$readme_info" | jq -r '.content' 2>/dev/null | base64 -d 2>/dev/null)
  local size=$(echo "$readme_info" | jq -r '.size // 0')
  
  if [ -z "$readme_content" ] || [ "$size" -lt 50 ]; then
    local srs=$(gh api "/repos/${org}/${repo}/contents/SRS.md" 2>/dev/null | jq -r 'if .name then "Yes" else "No" end')
    [ "$srs" != "Yes" ] && srs=$(gh api "/repos/${org}/${repo}/contents/docs/SRS.md" 2>/dev/null | jq -r 'if .name then "Yes" else "No" end')
    echo "${repo},Yes,No,No,No,No,No,No,README too short or empty,${srs}"
    return
  fi
  
  # Check for standard sections
  local has_title="No"
  local has_desc="No"
  local has_install="No"
  local has_usage="No"
  local has_contrib="No"
  local has_license="No"
  
  # Check title (first line should be # heading)
  local first_line=$(echo "$readme_content" | head -1)
  [[ "$first_line" =~ ^# ]] && has_title="Yes"
  
  # Check for content (more than just title)
  local content_lines=$(echo "$readme_content" | wc -l)
  [ "$content_lines" -gt 5 ] && has_desc="Yes"
  
  # Check sections
  echo "$readme_content" | grep -qiE "^#+.*install|getting.started|setup" && has_install="Yes"
  echo "$readme_content" | grep -qiE "^#+.*usage|how.to|run|start" && has_usage="Yes"
  echo "$readme_content" | grep -qiE "^#+.*contribut|develop|build" && has_contrib="Yes"
  echo "$readme_content" | grep -qiE "^#+.*license|licence" && has_license="Yes"
  
  # Build missing sections list
  local missing=""
  [ "$has_install" = "No" ] && missing="${missing}Installation "
  [ "$has_usage" = "No" ] && missing="${missing}Usage "
  [ "$has_contrib" = "No" ] && missing="${missing}Contributing "
  [ "$has_license" = "No" ] && missing="${missing}License "
  [ -z "$missing" ] && missing="None"
  
  # Check SRS
  local srs=$(gh api "/repos/${org}/${repo}/contents/SRS.md" 2>/dev/null | jq -r 'if .name then "Yes" else "No" end')
  [ "$srs" != "Yes" ] && srs=$(gh api "/repos/${org}/${repo}/contents/docs/SRS.md" 2>/dev/null | jq -r 'if .name then "Yes" else "No" end')
  
  echo "${repo},Yes,${has_title},${has_desc},${has_install},${has_usage},${has_contrib},${has_license},${missing},${srs}"
}

export -f check_repo
export ORG

# Run in parallel with xargs (10 at a time)
echo "$repos" | xargs -P 10 -I {} bash -c 'check_repo "$@"' _ {}
