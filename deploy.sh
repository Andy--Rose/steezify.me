#!bin/bash

git pull
aws s3 sync ./ s3://steezify.me --acl public-read --delete --exclude ".git*" --profile arose