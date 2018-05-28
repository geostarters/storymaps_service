#!/bin/sh

sed -i s/betaserver2.icgc.cat/$ADDRESS/ path.properties 

sed -i s/JWT_SECRETE/$SECRET/ path.properties 

node storymaps.js
