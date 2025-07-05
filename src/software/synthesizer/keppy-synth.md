# Keppy's Synthesizer

Keppy's Synthesizer is a software synthesizer for the Microsoft Windows operating system. The synth was originally named *Keppy's Driver*, which was then renamed to *Keppy's Synthesizer*.

::: warning 

This article discusses about an older version of OmniMIDI. For the new version, visit the [OmniMIDI article](./omnimidi).

:::

## Installation

#### Download {data-step="1"}

Currently, there is one main source to acquire this divine musical equipment:

- [GitHub][gh] (Windows, open-source, latest)

The first listed `.exe` file should be the setup file which we need to run.

#### Install {data-step="2"}

Upon running the setup file, it will require you to give it administrative privilege so it could access the system files where it will plant a file that will allow you to play MIDIs with sound later on. At this point, you have to say yes as it's too late to say no anymore.

The setup will then tell you about the licence agreement when using the software. You must read and agree to all of it wholeheartedly as it is the introductory testament to your acceptance and obedience to the divine program's commandments you asked for. While reading, you must use your two fingers on the right hand to press on your right ear (symbol and meditation of hearing protection increases resistance to tinnitus) and raise your left hand with the fingers forming an ok hand that looks like a letter "k" (initials of keppy and kspaghetti). (DO NOT MAKE A MISTAKE OR MISPRONUNCIATION WHILE READING)

![keppy setup showing license conditions](/ks/setup1.webp)

The next step is about finalizing your commitment to the divine program.

![keppy setup asserting its second coming](/ks/setup2.webp)

After you click the 'Finish' button, Keppy's Driver should now be by your side forever. Should you feel troubled, it will comfort you and enlighten you what to conduct.


## Configuration

To run the configuration window, simply head to the start menu and find Keppy's Driver folder, where the shortcut for it exists.

![keppy synth start menu folder](/ks/startconfig.webp)

### Managing Soundfonts

#### Adding soundfonts

When you want to add a soundfont, just click the plus button or drag and drop the soundfont file from the file explorer.

![keppy synth config pointed at button for adding soundfont](/ks/addsf.webp)

#### Toggling soundfonts

You can toggle the soundfont using green red buttons.

![keppy synth config pointed at soundfont toggle buttons](/ks/togglesf.webp)

The refresh button above it can be used to push a state update on what soundfonts the currently running MIDI players listening to the synth should play. For example, if you have a MIDI player that loaded the list with soundfont A toggled on and soundfont B toggled off, and then you toggle on the soundfont B, you will only be able to hear soundfont B on that player after you click the refresh button. If you want it to automatically push a state update whenever you toggle a soundfont, you can enable this behaviour through the menu:

![keppy synth config auto reload soundfonts menu](/ks/autoreload.webp)

#### Soundfont list assignment per application

You can assign an application to what specific list number it should load the soundfonts from.

![keppy synth config per app soundfont list assignment toggle menu](/ks/sflistassign.webp)

On the next window that appears select which list the application/s will load from, then right-click anywhere on the white background for the options to appear.

![keppy synth config per app soundfont list assignment window](/ks/sflistassignwindow.webp)

`Absolute path` means the synth will recognize the app through the location of the app. The second option means the synth will recognize the app by its name alone, but in any location it is.


### Quick optimizations

These are some experience improvements when using the synth.

#### LoudMax (audio compressor)

If you hear dank noises (or cracking noises) at sound peaks, you could install LoudMax to the synth. LoudMax is an audio compressor which is useful for normalizing extreme sound output especially from Black MIDIs.

![keppy synth config loudmax menu](/ks/loudmax.webp)

#### WinMM patch

You can apply a patch to any other application that makes use of Keppy's Synthesizer. This can yield slightly better playback performance. However, if issues are encountered, you can also revert it back. Furthermore, you could always ask for help from the community to possibly solve issues with your program.

![keppy synth config winmm patch menu](/ks/winmm.webp)

#### Hotkey for sound resetting
 An option to let you use the `Insert` key on your keyboard to cut and reset all MIDI events at one point in time is available. This can be handy if some channels somehow get their sustain events stuck (or any other events).

![keppy synth config hotkey toggle](/ks/hotkey.webp)


## Advanced

You can change further settings of the synth for playback optimization or experimentation. There are also some available presets to choose from according to your needs.

![keppy synth config showing advanced configuration options](/ks/settings.webp)

The `Audio engine` is the engine for the audio. Currently, WASAPI is the most efficient audio engine of the synth. You may change it if you are having issues with other engines.


Each checkbox will create some form of performance degradation when toggled on, but results in compromise in audio quality when toggled off (especially interpolation, sequential note cut-offs, and sound effects).

The third checked box about the `sequential note cut-offs` means that when the maximum voice count limit is reached, it will cut the sound of the note that is still sustained, that is, the prioritized note to be cut off is the "oldest instance" meaning whichever sustained note was the first to be triggered at that moment.

::: details Elaboration about sequential note cut-offs

For example, if your maximum voice count is 3 for the figure below, the violet note will get cut off when your playhead starts triggering the 4th note. The blue note will get cut off next if your playhead reaches the 5th note. Finally, if two notes with the same starting point triggers, two other sustained notes at the same time must also get cut off if there are still 3 other notes playing.

![only release oldest instance for note off illustration](/ks/illusoldestintancenoteoff.webp)

:::

The biggest factor for getting black MIDI playback speed is the synth's ability to cut as much voices as fast as it can. Setting an optimized `Driver voice limit` of 1000 gives a reasonable room for you to hear enough of the sound idea from a huge amount of notes playing. However, having a higher max voice count means you will be able to hear as much sustained notes as possible at every time, giving you an uninterrupted note fade offs.

`Maximum rendering time` is simply the ratio of the CPU usage allotted for the synth. This is in accordance with voice limiting, where if a CPU usage of 100% is reached, but the synth couldn't keep up with the further increasing voice count, the synth will just 'choke' and create distorted noises signifying its despair from the overload. This ratio is there to automatically enforce a voice limit (that can override the user-specified voice limit) when a specified percent is reached by the CPU. For example, if 75% is the limit and 2000 is the user-specified voice limit, a CPU that can only handle 1800 voices at 90% will be throttled, and will result in forced voice limiting to around 1500.[^a]

`Driver audio frequency` has something to do with [sample rates][samp]. To simply put, a lower rate will result in slightly better playback performance, but lower sound quality.

`Driver buffer length` has something to do with any [general application buffering][buff]. It is how much time the synth driver is given before playing the accumulated sound play instructions. Very high values might give the playback a 'quantized' sound.

## Miscellaneous

Here are some programs where you can use Keppy's Driver:

- [Piano From Above](/software/midi-visualizer/piano-from-above)

## Footnotes

[^a]: I didn't actually confirm the maths (lol). I only made rough estimates.


[gh]: <https://github.com/KaleidonKep99/Keppy-s-MIDI-Driver/releases>
[samp]: <https://en.wikipedia.org/wiki/Sampling_(signal_processing)#Audio_sampling>
[buff]: <https://en.wikipedia.org/wiki/Data_buffer>