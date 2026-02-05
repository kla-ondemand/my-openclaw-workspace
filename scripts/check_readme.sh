#!/bin/bash

# Script to check README.md standards for GitHub repos
# Usage: ./check-readme.sh it-ondemand student-portal-api

ORG="it-ondemand"

# Array of repo names (100 repos from it-ondemand)
repos=(
  "student-portal-api"
  "learn-service-api"
  "refund-change-management-service"
  "learn-service-ui"
  "SA-TA-Booking"
  "airflow"
  "learn-portal-api"
  "learn-portal-ui"
  "data-lakehouse"
  "payment-integration"
  "insidesatit"
  "ignite_ignite_liff"
  "ig-student-portal"
  "ig-booking1on1"
  "auth-service"
  "oauth-gateway"
  "order-management-service"
  "payment-service"
  "learn-shop-online-ui"
  "learn-delivery-api"
  "onboarding-service"
  "student-portal-ui"
  "ondemand"
  "payment-service-ui"
  "steamlit-tribe-1-service"
  "learn-shop-online-server"
  "atlas-erp-queue-manager"
  "data-quality-management"
  "LE_Projector_DonorBoard_Backend"
  "LE_Projector_DonorBoard_Frontend"
  "data-team-api"
  "learn-poral-migration"
  "report-api-test"
  "notification-service"
  "amortization-service"
  "poc-nextjs-share-cookie-1"
  "rbac-provisioning-complete-Create"
  "rbac-provisioning-complete-Delete"
  "courses-service"
  "oe-mastercourse"
  "LC-sportsday"
  "be-form-service-api"
  "fe-form-service"
  "audit-service"
  "so-adapter"
  "bank-gateway"
  "etax-service"
  "generate-bank-transfer-file"
  "sku-promotion-management"
  "github-backup"
  "user-portal"
  "learn-portal-k6-script"
  "user-api"
  "self_api"
  "reward-points-ui"
  "kissflow-webhook"
  "atlas-pubsub-forwarder"
  "poc-nextjs-share-cookie-2"
  "course-recommendation"
  "RBAC-awx-project"
  "lic_stock_learn-web"
  "lic_stock_learn-front"
  "atlas-mobile-app"
  "atlas-strapi"
  "asset-service"
  "upload-file-service"
  "oe-wangplan"
  "asset-management-service"
  "self_one"
  "edusmithsales"
  "career-school-data"
  "airflow-UAT"
  "send-in-blue"
  "atlas-shorten-url"
  "debt-collection"
  "git-action-poc"
  "learn-okr"
  "atlas-diagram"
  "atlas-app-hit"
  "atlas-logger-service"
  "user-portal-backoffice"
  "od-flash-fulfillment-service"
  "SSIS-SALE-ERP"
  "SSIS-B2B-AMT"
  "TEST-GITHUB"
  "SSIS-LEARNCRAFT"
  "point-engine"
  "SSIS-ONLINE-POS"
  "atlas-erp-tunnel"
  "appa-sale-system"
  "academic-cost"
  "app-hit-service-poc"
  "SSIS-INVENTORY_AGING"
  "SSIS-CUSTOMER-DEPT-TRACKING"
  "amt"
  "SSIS-CUSTOMER_AR_AP"
  "SSIS-ONLINE-PEDAGOGY"
  "SSIS-SALE-ERP-FIX"
  "SSIS-CURRENT_TERM"
  "SSIS-JIRA-GW"
)

echo "repo_name,has_readme,has_title,has_description,has_installation,has_usage,has_contributing,has_license,missing_sections,srs_exists"

for repo in "${repos[@]}"; do
  # Try to fetch README.md
  readme_content=$(gh api "/repos/${ORG}/${repo}/contents/README.md" 2>/dev/null | jq -r '.content' 2>/dev/null | base64 -d 2>/dev/null)
  
  # Check SRS.md or docs/SRS.md
  srs_exists="No"
  gh api "/repos/${ORG}/${repo}/contents/SRS.md" 2>/dev/null | jq -e '.name' >/dev/null 2>&1 && srs_exists="Yes"
  gh api "/repos/${ORG}/${repo}/contents/docs/SRS.md" 2>/dev/null | jq -e '.name' >/dev/null 2>&1 && srs_exists="Yes"
  
  if [ -z "$readme_content" ]; then
    echo "${repo},No,N/A,N/A,N/A,N/A,N/A,N/A,No README.md,${srs_exists}"
    continue
  fi
  
  # Check for standard sections
  has_title="No"
  has_description="No"
  has_installation="No"
  has_usage="No"
  has_contributing="No"
  has_license="No"
  
  # Check first line (usually title)
  first_line=$(echo "$readme_content" | head -1)
  if [[ "$first_line" =~ ^# ]]; then
    has_title="Yes"
  fi
  
  # Check for description (content after title, before first heading)
  if echo "$readme_content" | head -20 | grep -v "^#" | grep -v "^$" | head -3 | wc -l | grep -q "[2-9]"; then
    has_description="Yes"
  fi
  
  # Check for standard sections
  echo "$readme_content" | grep -qiE "^#+.*install" && has_installation="Yes"
  echo "$readme_content" | grep -qiE "^#+.*usage" && has_usage="Yes"
  echo "$readme_content" | grep -qiE "^#+.*contribut|getting.started|quick.start" && has_contributing="Yes"
  echo "$readme_content" | grep -qiE "^#+.*license|licence" && has_license="Yes"
  
  # Calculate missing sections
  missing=""
  [ "$has_installation" = "No" ] && missing="${missing}Installation "
  [ "$has_usage" = "No" ] && missing="${missing}Usage "
  [ "$has_contributing" = "No" ] && missing="${missing}Contributing/QuickStart "
  [ "$has_license" = "No" ] && missing="${missing}License "
  [ -z "$missing" ] && missing="None"
  
  echo "${repo},Yes,${has_title},${has_description},${has_installation},${has_usage},${has_contributing},${has_license},${missing},${srs_exists}"
done
