#!bin/bash
aws s3 sync ./ s3://steezify.me --acl public-read --exclude ".git*" --profile arose