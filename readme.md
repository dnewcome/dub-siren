# About

Dub Siren is a Node.js application that makes use of Simple DirectMedia Layer to play sounds.
The inspiration behind the app is the simple synth boxes used in Dub Reggae music to make 
warbling and laser hit sounds. These boxes have come to be known affectionately as "Dub sirens".

# Installation

Dub Siren has been tested on OS X and Ubuntu Linux. It should work on Windows since SDL
Mixer and Node.js are available for that platform, but I don't know if the Node module
will compile on Windows.

## OS X:

Install Node and SDL Mixer using Homebrew
Install npm using the npm bootstrap script
Install dependencies using npm install
Run the Dub Siren server under node

## Ubuntu:

Install Node and SDL Mixer using apt-get
Install npm using the npm bootstrap script
Install dependencies using npm install
Run the Dub Siren server under node

# Usage

Browsing to the root of the application will show the Dub Siren UI. Click the "wail"
button to trigger the synth sound. That's all there is to it, however the sound 
may also be triggered via the "API" which is to say that issuing an HTTP GET to 
/wail also works. Script this on a timer using cURL for bonus points.

# Future Work

The Dub Siren app is intended to be a proof of concept upon which more fully-featured
sampler applications can be based. Some things I'd like to see in the future are:

- Sound upload
- Drum kits/sample grouping
- Client-side MIDI/OSC support 
- Sound/kit sharing between users
