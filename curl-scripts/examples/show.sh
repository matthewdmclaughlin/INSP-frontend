
# Ex: TOKEN=tokengoeshere ID=idgoeshere sh curl-scripts/examples/show.sh

curl "https://wdi-library-api.herokuapp.com/examples/${ID}" \
  --include \
  --request GET \
  --header "Content-Type: application/json" \
  --header "Authorization: Token token=${TOKEN}" \

echo
