# OmniMIDI

OmniMIDI is a MIDI-based software synthesizer created by Keppy’s Software[^a] for the Microsoft Windows operating system. It was created to optimize live playback of black MIDIs which no other synthesizer could handle smoothly. It has grown to become a general MIDI synthesizer for professionals.

The synth was originally named *Keppy's MIDI Driver*, which was then renamed to *Keppy's Synthesizer*, and finally *OmniMIDI*, with a complete rewrite starting version 15 (also known as *OmniMIDI v2*).

## Installation

### Download {data-step="1"}

The installer must be downloaded to get started with OmniMIDI. It can be acquired from the following trusted links:

- [OmniMIDI installer (GitHub mirror)][gh] (Windows, open-source, latest)
- [OmniMIDI installer (Softpedia mirror)][sft] (Windows, open-source, latest)

The file to be received is named `OmniMIDISetup.exe` which should be opened to start the installer.

### Install {data-step="2"}

Upon opening the installer, a prompt will pop up asking for administrator privileges. The user should follow the instructions on the next window that pops up.

![omnimidi setup views by panel](/om/setup.webp)

After clicking the `Finish` button, a configuration window will open up as starting point to setup proper synth playback.

![omnimidi configuration window](/om/configurator-start.webp)

## Configuration

To run the configuration window, simply head to the start menu and find the OmniMIDI folder where it is located.

![omnimidi start menu folder](/om/start-menu.webp)

### Managing Soundfonts

The configuration window provides various settings that will change the behavior of the synth and its audio playback.

The buttons on the left side pertains to operations on the current soundfont list. Hovering the cursor on the buttons will show a tooltip explaining the button's function.

For example, to add a soundfont, click the plus button or drag and drop the soundfont file from a file explorer window.

![keppy synth config pointed at button for adding soundfont](/om/add-soundfont-button.webp)

#### Toggling soundfonts

Added soundfonts are enabled by default and can be disabled by toggling its checkbox on the left side.

All soundfonts in the list will act as a single soundfont when loaded for playback, meaning soundfonts in the same list having the same instruments cannot play both sound samples at the same time. Instead, the soundfont positioned closest to the bottom of the list is prioritized.

Multiple lists allow for isolated activation of a set of soundfonts under a different domain.

![omnimidi lists](/om/list-selection.webp)

The `Shared list` and lists `2` to `8` can be loaded individually and results in playback of only the soundfonts of that list.

During live playback, the synth can switch between soundfont lists to activate. Pressing `Alt` + `1` or `2` or `3` and so on will toggle that specified list. 

The setting `Enable fast hotkey combinations` needs to be enabled for the list switching function to work.

### Quick optimizations

The following are some experience improvements when using the synth for Black MIDI.

#### LoudMax (audio compressor)

If broken, glitched noises (or clipping) occur on loud parts of the playback, an extension to mitigate this issue can be activated. LoudMax is bundled with OmniMIDI for normalizing extreme sound output especially from Black MIDI playback.

It can be installed by accessing the menu `Extensions` -> `LoudMax, [...]` -> `Install LoudMax, [...]`

#### WinMM patch

![omnimidi winmm patcher window](/om/winmm-patcher-window.webp)

A performance improvement patch can be applied to any MIDI application that can use OmniMIDI. However, if issues are encountered, it can be reverted back by deleting the `winmm.dll` file created alongside the target executable.

An application can be patched through `Extensions` -> `Windows Multimedia Wrapper`.

#### Hotkey for sound resetting

The synth lets the user press the `Insert` key to cut all sounds and reset all MIDI events at any point during playback. This can come useful if issues with sustain events (or any other events) arise.

The setting `Enable fast hotkey combinations` needs to be enabled for this function to work.


## Advanced settings

More settings of the synth can be modified for playback optimization, experimentation, or troubleshooting. The default settings typically satisfies the basic requirement for proper playback of any MIDI.

![omnimidi config showing advanced configuration options](/om/configurator-advanced.webp)

In the `Audio engine`, WASAPI is the default setting as a practical audio engine of the synth for the average user. This is changed to other engines to achieve a different kind of performance (e.g. ASIO for low latency playback).

Each setting will create some form of performance degradation when enabled, but usually results in compromise in audio quality when disabled (especially interpolation, and sound effects).

The setting `Disable fade-out when killing an old note` means that during playback, when the maximum voice count limit is reached, it will cut out the sound of the earliest triggered notes to accommodate the playback of newer incoming notes.

::: details Elaboration about sequential note cut-offs

For example, if the maximum voice count is 3 for the figure below, the violet note will get cut off when the play-head starts triggering the 4th note. The blue note will get cut off next if your play-head reaches the 5th note. Finally, if two notes with the same starting point triggers, two other sustained notes at the same time must also get cut off if there are still 3 other notes playing.

![only release oldest instance for note off illustration](/ks/illusoldestintancenoteoff.webp)

:::

Setting an optimized `Driver voice limit` of 1000 gives a reasonable room for the user to hear enough perceptible content from a huge amount of notes playing. However, having a higher max voice count means as much sustained notes as possible will be heard, providing uninterrupted note fade offs.

`Maximum rendering time` refers to the percentage of CPU usage allocated to the synthesizer. It works alongside voice limiting to prevent performance issues. When CPU usage hits 100% and the synth can't keep up with the number of active voices, it may start producing distorted sounds as a sign of overload.

To avoid this, the synth uses the maximum rendering time setting to automatically enforce a voice limit based on CPU load, even if it's lower than the user-specified limit.

For example, if you've set a limit of 2000 voices, but your CPU can only handle 1800 voices at 90% usage, and you've configured the maximum rendering time to 75%, the synth will attempt to cap the polyphony to around 1500.

`Output sample rate` is exactly what [sample rate][samp] the synth should play. A lower rate will result in slightly better playback performance, but lower sound quality.

`Output buffer` refers to the [general buffering][buff] of the synth playback. It is how much time the synth is allowed to proactively process incoming playback instructions before generating the sound. Very high values could give the playback a "quantized" sound.



<!--
	
	for the other settings like EV buffer, it should probably have its own sub pages.


 -->

## Miscellaneous

Here are some programs where you can use OmniMIDI:

- [Piano From Above](/software/midi-visualizer/piano-from-above)

## Footnotes

[^a]: As described in https://keppysoftware.github.io/


[gh]: <https://github.com/KaleidonKep99/Keppy-s-MIDI-Driver/releases>
[sft]: <https://www.softpedia.com/get/Multimedia/Audio/Audio-Mixers-Synthesizers/Keppys-Synthesizer.shtml>
[samp]: <https://en.wikipedia.org/wiki/Sampling_(signal_processing)#Audio_sampling>
[buff]: <https://en.wikipedia.org/wiki/Data_buffer>