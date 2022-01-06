#!/usr/bin/env sh

set -e

export NODE_ENV=production

npm run build

cd dist

git init
git add -A
git commit -m "deploy"
git push -f https://github.com/bachzz/tuts-keeper.git master:gh-pages

cd -
