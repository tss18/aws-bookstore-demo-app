#!/usr/bin/env bash

if [ $(python3 commentchecker.py ) = 1 ]; then
    echo "comment not present!"
    exit 2

fi
echo "comment check passed"

#npm install
npm run build
cd src/_tests_
jest
cd ../../../
git add .
git commit -m $1
git push origin master
git status