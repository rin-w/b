# Piano From Above

Piano From Above is a visualizer and player for general MIDIs. It was created by Brian Pantano as an alternative to Synthesia - another training software for playing piano.

## Installation

#### Download {data-step="1"}

Currently, there are a few well-known sources to get a copy of PFA:
- [GitHub][gh1] (Windows, open-source, latest)
- [GitHub][gh2] (Windows, open-source, forked)

For the original version, open the first link on the list above, then select the compatible executable file for your computer.

![github page for piano from above latest release](/pfa/dl.webp)

The red box in the photo above is where your options are. Select the one with a green arrow if you have a modern day computer.

For the optimized version, open the second link on the list above.

![github page for piano from above forked release](/pfa/vizdl.webp)

You could simply download the only listed executable file as show in the red box above. The latest version is what you will usually need as indicated in the green box.

#### Run {data-step="2"}

For starters, you could simply just double click on the executable file you downloaded.

![context menu to open piano from above](/pfa/open.webp)

Alternatively, you could select the file on your File Explorer window and press Enter on your keyboard. If you can't find the Enter key on your keyboard, consult your nearest technician/opthalmologist or buy a new keyboard.

For more ways on how to run an executable file, type and search "how to open files" on your favourite search engine like Google or Excavator.

Your first PFA launch should look something like this:

![active piano from above window](/pfa/opened.webp)

#### Patch (Optional) {data-step="3"}

If you will use OmniMIDI/Keppy's Synthesizer, you could apply a [WinMM patch](/software/synthesizer/keppy-synth#winmm-patch) to PFA to increase synth playback performance.

Make sure to close PFA before applying the patch.


## Playing MIDI

You can play a MIDI by navigating the top bar buttons (a.k.a the menu):

![piano from above File menu](/pfa/openmidi.webp)

A new window will appear prompting you to select a MIDI file to play.

### Setting up the synthesizer

The synthesizer will alow sound playback to be audible when playing MIDIs. Simply open the `Preferences` window through the menu or press `Ctrl` + `P`

![piano from above preferences option from Options menu](/pfa/synth1.webp)

Then go to the `Audio` tab and select the synthesizer you want to use. 

![Audio tab of Preferences window showing recognized synthesizers of piano from above](/pfa/synth2.webp)

Click OK and it should take effect immediately (for most cases).

::: tip

For black MIDIs, a performant synthesizer is typically used, particularly [OmniMIDI](/software/synthesizer/omnimidi).

:::

## Advanced Configuration

### Configurator

A convenient program that edits PFA's configuration is available for use. It is particularly useful for setting up note colors.

<!--
i dont think we need two previews
![piano from above configurator window](/pfa/pfa-configurator.webp)
-->

![piano from above configurator colors tab](/pfa/pfa-configurator-colors.webp)

::: tip ATTACHMENT

[PianoFromAboveConfigurator (.exe)](/pfa/PianoFromAboveConfigurator.exe)

Click the link above to save it to your computer.

:::

If the program does not open, the configuration could be not readable. To fix this, rebuild the config by deleting the `.xml` file (refer below) and reopening PFA.


### Configuration file

The configuration file for PFA can be found in your `AppData` folder. To quickly go there, just press `Win` + `R` to open the run box, then input `"%appdata%\Piano From Above"`. 

Within it, the file that is named `Config.xml` can be opened using any text editor (such as Notepad). 

::: tip
If you're not sure on how to open the file, just right-click on it and find on the menu -> `Open with...` -> `Notepad`.
:::

::: warning
Before editing the file, make sure to close PFA first or else it will explode (real).
:::

### 128 keys view

The forked viz version already has this option included in the preferences window. 

For the original version, open the configuration file, then find the section containing the string `<Visual ... >`. It will contain the two attributes we need to modify, which is the `FirstKey` and `LastKey`. The former needs to be set to `0` while the latter to `127`. The result after editing that line should look something like this:

```xml
<Visual KeysShown="0" AlwaysShowControls="0" AssociateFiles="0" FirstKey="0" LastKey="127">
```

You can save the edited file afterwards, and start PFA again.

### Changing the startup MIDI

#### For viz

[PFAviz](#download) already features a setting for changing the startup MIDI. Simply go to `Options` -> `Preferences` -> `Viz` tab -> `Browse` button under `Splash MIDI`

#### For vanilla PFA

For this, we will need a virus (resource editor). You can download one from here:

- [Resource Hacker][rh]

Once you open the app, you can target the PFA executable by heading to the menu -> `File` -> `Open ...`, or just by dragging and dropping PFA's executable file. 

![PFA on reshack about to get its resource modified](/pfa/reshack.webp)

Then, we need to look for resource 149, which is in the directory `MIDI` -> `149 : 1033`. Right-click on it, then click `Replace Resource...`.

You can then pick the desired MIDI ~~(bad apple)~~ to play on PFA's startup after you click on `[Select File...]`.

After selecting one, just click `[Replace]`. Then, the star should become red. At this point, you can save the modifications by clicking the green floppy disk.

## Troubleshoot

To close PFA fully, press `Ctrl` + `Shift` + `Esc`, then find PFA in the list, then click `[End Task]`.

### PFA is running but invisible

This bug has been fixed in the [pfaviz fork](#download).

::: details Steps to reproduce this bug 

- maximize the PFA window
- minimize it to taskbar
- right-click on it then click `Close window`
- run PFA again

:::

If you see it on the taskbar...

- hover on it, and wait for a mini view of PFA to appear
- right-click on the mini view
- on the menu, click `Maximize`
- close PFA
- run PFA again

### PFA doesn't run

If the previous steps didn't work, try resetting the [config file](#configuration-file). Here's a video on how to do it:

::: details Video: [How to fix Piano From Above if it doesn't load][gpfa] by Gingeas

<iframe
  src="https://youtube.com/embed/t0UsrBaXjFA"
  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
  frameborder="0" 
  allowfullscreen
></iframe>

:::

#### Video Summary

- close PFA
- go to `"%appdata%\Piano From Above"`
- delete `Config.xml`
- run PFA again

Further stated in the video description is to move away huge MIDI files stored in your library. The library also scopes these folders by default:

- `"%userprofile%\Desktop"`
- `"%userprofile%\Music"`
- `"%userprofile%\Documents"`
- `"%userprofile%\Music\Piano From Above"`


[gh1]: <https://github.com/brian-pantano/PianoFromAbove/releases>
[gh2]: <https://github.com/khang06/PianoFromAbove/releases>
[rh]: <http://www.angusj.com/resourcehacker/#download>

[gpfa]: <https://youtu.be/t0UsrBaXjFA>