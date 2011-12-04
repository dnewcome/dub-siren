#!/bin/bash

## transform midi data from amidi to web requests
## usage:
## midicurl <80|90> <note> <velocity>
# 80 is midi note on, 90 is midi note off
# for now we ignore note off

echo $1
tokens=( $1 )
curl "http://localhost:3003/play?note=${tokens[1]}&vel=${tokens[2]}"
