#!/bin/bash

## transform midi data from amidi to web requests
## usage:
## midicurl <80|90> <note> <velocity>
# 80 is midi note on, 90 is midi note off
# for now we ignore note off

tokens=( $1 )

## filter out spurious notes from my broken nanopad, sorry for this
## cruft.
if [ ${tokens[1]} == "26" ] ; then exit ; fi

## since this is a drum sampler for now, we only care about note-on events
if [ ${tokens[0]} == "90" ] ; then 
	echo $1
	curl "http://localhost:3003/play?note=${tokens[1]}&vel=${tokens[2]}"
fi
