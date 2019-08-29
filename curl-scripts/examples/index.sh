# Ex: TOKEN=tokengoeshere sh curl-scripts/examples/index.sh

curl "https://wdi-library-api.herokuapp.com/examples" \
  --include \
  --request GET \
  --header "Content-Type: application/json" \
  --header "Authorization: Token token=${TOKEN}" \

echo
