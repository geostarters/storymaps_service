#!/bin/bash

rm -fr /home/tic/storymaps_service
cp -r ./tmp /home/tic/storymaps_service
cd /home/tic
docker build -t icgc/storymaps-service ./storymaps_service/ 
docker-compose down
docker-compose up -d 
