$(npm bin)/closure-make-deps \
  -f app.js \
  -f node_modules/google-closure-library/closure/goog/deps.js \
  --closure-path node_modules/google-closure-library/closure/goog \
  > deps.js