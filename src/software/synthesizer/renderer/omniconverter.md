# OmniConverter

OmniConverter is a MIDI-based audio renderer originally developed by Keppy's Software succeeding the similar program [Keppy's MIDI Converter](./keppy-midi-converter).

OmniConverter is primarily used for generation of black MIDI audio playback, but can also be used for any other MIDIs.

The application is being developed by a handful of programmers from the Black MIDI Community, and is yet to have a stable release.

## Installation

### Download {data-step="1"}

OmniConverter can be downloaded from the following site:

- [OmniConverter (.zip)][gh] (official pre-release, Linux/Windows/macOS, x64)

Choose the `.zip` file that corresponds to the operating system being used (e.g. `win64.zip` for Windows).

### Run {data-step="2"}

The downloaded `.zip` file will contain an executable file (e.g. `OmniConverter.exe` for Windows).

![omniconverter window](/omcon/window.webp)


## Configuration

### Target MIDIs

MIDIs can be added to the render list by dragging and dropping files directly into the main OmniConverter window, or heading to `File` -> `Add MIDIs to queue`.

### Applying soundfonts

Soundfonts can be added through a manager by clicking `[SoundFonts]` at the bottom right corner.

Multiple soundfonts can be applied to all MIDIs on the list. However, all soundfonts in the list will be merged for each instrument. The soundfont closest to the bottom of the list will be prioritized.

Click on `[Add SoundFont]` to browse for and add the soundfont to be applied to the MIDIs:

![omcon soundfont manager](/omcon/soundfont-manager.webp)

Unlike [KMC](./keppy-midi-converter), OmniConverter cannot render the audio with a limiter (LoudMax). Clipping can be mitigated on the rendered audio using tools like Audacity or FFmpeg.


### Render mode

OmniConverter offers two render modes: standard and realtime which can be set on the `[Settings]` -> `Enable real time playback simulation`. 

![omcon synthesizer settings](/omcon/setting-synthesizer.webp)

Standard rendering means it will render the MIDI as accurate as possible, while realtime rendering adds some 'realism' or randomness to certain variables by creating a buffered playback simulation.

### Polyphony limit

This value can be changed in the 'Synthesizer settings' window by locating the `[Settings]` -> `Voice limit`.

### Start render

Once the configuration settings are satisfactory, rendering can be started by clicking `[Convert MIDIs]`.

The program will render the MIDIs into `.WAV` files in the same location the MIDI file is. The destination can be changed in the 'Export' settings.

## Other settings

<!-- explain here the other magic stuff -->

[gh]: <https://github.com/BlackMIDIDevs/OmniConverter/releases>