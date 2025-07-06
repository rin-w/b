# Keppy's MIDI Converter

Keppy's MIDI Converter (KMC) is a MIDI-based audio renderer developed by Keppy's Software. It accepts MIDI files and creates a generated audio file of the MIDI playback using soundfonts.

KMC is typically used to surpass the limitations of synthesizer playback when playing black MIDIs.

It was superseded by a newer program, [OmniConverter](./omniconverter), by the same developer.

## Installation

### Download {data-step="1"}

KMC can be downloaded from the following site:

- [Keppy's MIDI Converter][gh] (official, Windows, x64)

The portable version can be used to skip installation, however the dependencies may still need to be installed separately.

### Install {data-step="2"}

The setup version requires administrative privileges to run. It will show instructions on how to process the installation.

![kmc setup collage](/kmc/setup.webp)


### Run {data-step="3"}

To run the program, find the program's folder in the start menu. 

For the portable version, simply run `KeppyMIDIConverter.exe`.

![kmc window](/kmc/window.webp)

## Configuration

### Target MIDIs

MIDIs can be added to the render list by dragging and dropping files into KMC, or heading to `Actions` -> `Import MIDIs`.

### Soundfont and VST

Soundfonts can be added by heading to the menu -> `Actions` -> `Open 
Soundfonts/VSTs manager`.

Multiple soundfonts can be applied to all MIDIs on the list. However, all soundfonts in the list will be merged for each instrument. The soundfont closest to the bottom of the list will be prioritized.

![kmc actions menu](/kmc/actions.webp)

Click on `Import soundfont(s)` to add the soundfont to apply to the MIDIs:

![kmc soundfont manager](/kmc/sfman.webp)

LoudMax can be enabled in the VST manager to mitigate clipping issues in black MIDIs:

![kmc vst manager](/kmc/vstman.webp)

Other VST plugins can be added, such as reverb plugins. However, the number of supported VSTs are limited.

You can explore more plugins on [plugins4free.com][free] for free. After getting one, you could click ` [Load]` on one of the plugin slots, then select the `*.dll` file.

### Render mode

KMC offers two render modes: standard and realtime which can be set on the menu -> `Options` -> `Render mode`. 

![kmc render mode options](/kmc/rendermodes.webp)

Standard rendering means it will render the MIDI as accurate as possible, while realtime rendering adds some 'realism' or randomness to certain variables by creating a buffered playback simulation.

### Polyphony limit

This value can be changed in the 'Advanced settings' window by clicking the ` [Open settings]` button. It is located at 'Audio settings' -> `Maximum voices` and capped to 100,000 voices.

### Start render

Once the configuration settings are satisfactory, rendering can be started through the menu -> `Actions` -> `Render to <audio-type>`.

- `.WAV` encodes audio in the best way possible. It typically has a higher file size depending on the length.
- `.OGG` compresses the audio for smaller file sizes with some imperceptible quality loss.
- `.MP3` is similar to `.OGG`. It is typically chosen for playback compatibility with older devices.

It will then prompt where to save the audio files. Afterwards, the LoudMax window will pop up. The sliders do not need adjustment unless more audio compression is desired.

The LoudMax window can be closed to proceed rendering the MIDIs one by
one.

## Birthday Message

When opening KMC on its conception day (September 17), it will show a message celebrating its own anniversary.

[gh]: <https://github.com/KeppySoftware/KMC/releases>
[free]: <https://plugins4free.com/effects/Reverb/>