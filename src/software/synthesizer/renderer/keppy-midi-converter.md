# Using Keppy's MIDI Converter

KMC is a Windows program by Riccardo Loi that takes a MIDI file and creates an
audio file of it using soundfonts.

## Installation

#### Download {data-step="1"}

Get the application from the official source:

- [GitHub][gh]

You can use the portable version so no extra installation steps are needed.

#### Install {data-step="2"}

If you downloaded the setup version, I'll skip on demonstrating this part.
Just accept the licence agreement then keep clicking the button that doesn't
say `[Cancel]` or `[Back]`. Click `[Browse...]` if you want a different
location for the app.

#### Run {data-step="3"}

To run the program, find the program's folder in your start menu. 

If you used the portable version, simply run `KeppyMIDIConverter.exe`.


## Configuration

### Target MIDIs

You could add a MIDI to the render list by dragging and dropping files into
KMC, or heading to `Actions` -> `Import MIDIs`.

### Soundfont and VST

You can apply multiple soundfonts and it will apply to all MIDIs on the list.
However, you can only apply one soundfont for each instrument. You can add
soundfonts by heading to the menu -> `Actions` -> `Open Soundfonts/VSTs
manager`.

![kmc actions menu](/kmc/actions.webp)

Click on `Import soundfont(s)` to add the soundfont you want to apply to the
MIDIs:

![kmc soundfont manager](/kmc/sfman.webp)

Make sure you have LoudMax enabled in the VST manager so no dank noises will
occur:

![kmc vst manager](/kmc/vstman.webp)

You could also add other VST plugins, such as reverb plugins. You can explore
more plugins on [plugins4free.com][free] for free. After getting one, you could click `
[Load]` on one of the plugin slots, then select the `*.dll` file plugin.

### Render mode

KMC offers two render modes: standard and realtime which can be set on the
menu -> `Options` -> `Render mode`. 

![kmc render mode options](/kmc/rendermodes.webp)

Standard rendering means it will render the MIDI at a perfect performance,
while realtime rendering adds some 'realism' or randomness to certain
variables by creating a buffered playback simulation.

### Polyphony limit

This value can be changed in the 'Advanced settings' window by clicking the `
[Open settings]` button. It is in 'Audio settings' -> `Maximum voices` capped
to 100,000 voices.

### Start render

Once you think the configuration is good, you can head to the menu ->
`Actions` -> `Render to <audio-type>`.

- `.WAV` is the highest form of audio storing lossless data. It typically has
  a higher file size depending on the length.
- `.OGG` is a lossy audio compression format. However, it is much smaller than
  `.WAV` while being enough to retain most of the important quality.
- `.MP3` is almost the same as `.OGG`, except it has much less encoding
  capabilities. However, it is enough for Black MIDI audio.

It will then ask you where to store the audio files, then LoudMax will appear.
You can adjust its sliders if you want to increase the compression and/or
decrease the maximum volume.

You can then just close LoudMax and it will start rendering the MIDIs one by
one.

## Birthday

When you open KMC on its conception day (September 17), it will show a message
celebrating its own anniversary. That is kinda cute ngl will totally sma

[gh]: <https://github.com/KeppySoftware/KMC/releases>
[free]: <https://plugins4free.com/effects/Reverb/>