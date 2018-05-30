#!/bin/sh

sed -i s/betaserver2.icgc.cat/$ADDRESS/ path.properties 
sed -i s/JWT_SECRETE/$SECRET/ path.properties 
sed -i s~/dades/html/storymaps/data/~$DATAPATH~ path.properties
sed -i s/storymaps/$URLPATH/ path.properties

node storymaps.js
