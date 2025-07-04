# How to play Black MIDIs

Usually, a Black MIDI is played on MIDI players for an optimized playback performance and visual pleasure. Apart from "usually", I have no clue what dark/enigmatic stories they offer.

## Download a MIDI player {data-step="1"}

You have a variety of other selections, but here are the popular ones and my recommendations: 

::: details *Piano From Above* (Windows, open-source, [latest][pfa-l], [forked][pfa-f])

The most commonly used visual MIDI player for Black MIDIs, from piano tutorials to benchmarking multi-bajillion notes just to see their computers *lag*. Originally closed-source, PFA was conceived by Brian Pantano as a concept of playing one's piano with easy to follow visuals. It was easy until blackers started using it. Forks of the program were released with further performance optimizations.

:::

::: details [*Synthesia*][synthe] (Windows (v9, freeware); macOS (v9, freeware); Android; iPad; all freemium)

Another visual MIDI player one will usually see on piano tutorial videos with similar features as PFA, is to no surprise, also used as a Black MIDI visual player. It is usually used over PFA for its distinct visual appearance.[^f]

:::

::: details [*TMIDI*][tmidi] (Windows, open-source)

A fairly simple MIDI player with minimal visuals.

:::

::: details [*Kiva*][kiva] (Windows, open-source)

Aimed to replace Piano From Above once and for all, it was conceived by Arduano, dedicated to play Black MIDIs in a way more performant manner.

:::

::: details [*Chikara*][chikar] (Windows, open-source)

Another goddamn visual MIDI player developed only for humongus Black MIDIs aiming to take advantage of multithreading further to juice down one\'s CPU with absolutely no room left for it to breathe. 

:::

::: details *MIDI Voyager*{#mv} ([Android][mv-a], [iOS][mv-i][^g], proprietary)

An ugly but performant visual MIDI player.

:::

## Install the MIDI player {data-step="2"}

To install the program you have picked, you either directly run the .exe file directly, or run the installer for it. For mobile devices, *Google Play Store* and *App Store* will give provision on getting it to work on your devices.

Here are some detailed instructions for some of the listed programs: 

- [How to install Piano From Above on Windows](/software/midi-visualizer/piano-from-above.html#installation)

## Play a MIDI in the player {data-step="3"}

After you manage to open the player, find and open a MIDI file of your choice. Each MIDI player has its own way of opening MIDI files, but here are some detailed instructions for some:

- [How to open a MIDI in Piano From Above on Windows](/software/midi-visualizer/piano-from-above.html#playing-midi)

## Enhance sound {data-step="4"}

Now, you might notice the sound of the Black MIDI you are hearing is either poor or non-existent at all. This is where you should know about *synthesizers* to alleviate that problem. For starters, a synthesizer is a software instrument that makes the digital sound. In comparison to a MIDI player and a MIDI file, the MIDI player reads the MIDI file while the synthesizer just follows and makes sound based on what the MIDI player is reading on command. You might ask 'Why can't the synthesizer just play the MIDI file by itself?' Well, some synthesizers do that, but this mechanism was on purpose so MIDI players can read a particular MIDI file for multiple synthesizers, synchronously.

For Windows, there is already a bundled software synthesizer when it is installed on your computer, however, this is not customizable to your desired *soundfont*, nor does it support more polyphony.

You have a lot of choices for a MIDI synthesizer (including hardware synthesizers), but the most commonly used as a software synth engine is [bassmidi][bass]. The first two are some implementations of it:

#### Downloads

::: details [*Keppy's Synthesizer*][kepys] (Windows, x64)

The most commonly used software synthesizer among blackers, and a dedicated Black MIDI synthesizer.

:::

::: details [*VirtualMIDISynth*][vms] (Windows)

A stable software synth that works on a handful kinds of Black MIDIs.

:::

::: details [*MIDI Voyager*](#mv)

This program has its own soundfont player that's used as you play a MIDI. (Links mentioned above)

:::

To install the program you have picked, you either directly run the .exe file directly, or complete the installer for it first. 

Here are some detailed instructions for some of the listed programs: 

- [How to install Keppy's Synthesizer on Windows](/software/synthesizer/keppy-synth.html#installation)
- [VirtualMIDISynth Setup Tutorial][vms-tutorial]

Next thing you would want to do is to change how it sounds overall. The biggest factor for this is the *soundfont*. These files are usually named as `*.sf2` or `*.sfz`. You can either download an already existing soundfont, or [make one yourself](/soundfont/how-to/intro). For beginners, here are some sites where you can quickly get a soundfont:

- [MBMS' soundfont repositories][mbms]
- [Soundfonts 4U][s4u]
- [Musical Artifacts][ma]
- [Musescore][ms]

After you have setup your software synth, you can now configure your MIDI player to use it.

Here are some detailed instructions for some of the listed MIDI players: 

- [How to setup Piano From Above synth](/software/midi-visualizer/piano-from-above.html#setting-up-the-synthesizer)

## Footnotes

[^f]: Synthesia is significantly less performant than Piano From Above.
[^g]: Available mirror [here][mv].

[pfa-l]: <https://github.com/brian-pantano/pianofromabove/releases>
[pfa-f]: <https://github.com/khang06/pianofromabove/releases>
[synthe]: <https://synthesiagame.com/download>
[tmidi]: <https://www.grandgent.com/tom/projects/tmidi>
[kiva]: <https://github.com/arduano/Kiva/releases>
[chikar]: <https://github.com/Kaydax/Chikara/releases>
[mv]: <https://blackmidi.neocities.org/download/midivoyager>

[kepys]: <https://github.com/KeppySoftware/OmniMIDI/releases>
[vms]: <https://coolsoft.altervista.org/en/virtualmidisynth>

[mv-a]: <https://play.google.com/store/apps/details?id=com.bytebolt.midiloops>
[mv-i]: <https://apps.APple.com/us/app/midi-voyager/id1265602132>
[bass]: <https://www.un4seen.com/bass.html#addons>

[mbms]: <https://github.com/MyBlackMIDIScore?tab=repositories&q=soundfont&type=source>
[s4u]: <https://sites.google.com/site/soundfonts4u#h.ede42a23878f969_63>
[ma]: <https://musical-artifacts.com/artifacts?order=most_downloaded&tags=piano>
[ms]: <https://musescore.org/en/handbook/3/soundfonts-and-sfz-files#specialised>

[vms-tutorial]: <https://midkar.com/soundfonts/coolsoft.html>