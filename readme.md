# About

Dub Siren is a Node.js application that makes use of Simple DirectMedia Layer to play sounds.
The inspiration behind the app is the simple synth boxes used in Dub Reggae music to make 
warbling and laser hit sounds. These boxes have come to be known affectionately as "Dub sirens".

The inspiration behind creating a server app for playing Dub sounds came while working
on some ideas for collaborative music jamming whilst listening to some Reggae music.

This particular Dub siren is pre-set to play only one sound sample. The Dub siren is run on a server
connected to a set of speakers and anyone can connect to it with a Web browser to play
the sound.

# Installation

Dub Siren has been tested on OS X and Ubuntu Linux. It should work on Windows since SDL
Mixer and Node.js are available for that platform, but I don't know if the Node module
will compile on Windows.

### Mac OS X

Install Node and SDL Mixer using Homebrew

    $ brew install sdl_mixer
    $ brew install node

Install npm using the npm bootstrap script

    $ curl http://npmjs.org/install.sh | sh

Install dependencies using npm install

    $ npm install 

Run the Dub Siren server under node

    $ node server.js

### Ubuntu

Install Node and SDL Mixer using apt-get

    $ sudo apt-get install libsdl-mixer1.2-dev nodejs

Install npm using the npm bootstrap script

    $ curl http://npmjs.org/install.sh | sh

Install dependencies using npm install

    # npm install 

Run the Dub Siren server under node

    $ node server.js


# Usage

Browsing to the root of the application will show the Dub Siren UI. Click the "wail"
button to trigger the synth sound. 

![Dub Siren UI screenshot](https://github.com/dnewcome/dub-siren/raw/master/screenshot.png)

That's all there is to it, however the sound 
may also be triggered via the "API" which is to say that issuing an HTTP GET to 
/wail also works. Script this on a timer using cURL for bonus points.

    $ curl http://localhost:3003/wail

Note that the sound will be played by the _server_ running the Node app, not through 
the Web browser of the user triggering the sound.

# Future Work

The Dub Siren app is intended to be a proof of concept upon which more fully-featured
sampler applications can be based. Some things I'd like to see in the future are:

- Sound upload
- Drum kits/sample grouping
- Client-side MIDI/OSC support 
- Sound/kit sharing between users
