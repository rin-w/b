# Setting up *Domino*

Domino is a freeware dedicated MIDI editor written in C++ exclusively for the Windows operating system.


## Installation

### Download {data-step="1"}

Here are some source links for various versions of the application:

- [Domino_143e_pre-patched (.zip)][dome] (modded, v1.43, x86, English)
- [Domino144 (.zip)][doms] (official, v1.44, x86, Japanese)
- [Domino145_dev008_x64 (.zip)][doml] (official, beta, v1.45, x64, Japanese)

Select one from above. The difference between these versions is minimal. The first link provides a version that has already been pre-patched to make the interface of the app English.

The second link provides an original version with recent stable features, but without support of an English interface.

The third link is a beta release that runs at 64-bit. This version can handle much more notes and can render MIDIs faster than the previous versions.

### Extract {data-step="2"}

The downloaded zip files can be extracted using any zip extraction tools such as [7-Zip][7z], [WinRAR][winrar], or the File Explorer.

![extract files context menu in file explorer](/domino/extractzip.webp)

The location of the extracted files should not be in a user-inaccessible location by default.

![file explorer prepares for full power domino extracting calamity](/domino/extractfileexplorer.webp)

Locations where Domino might not work properly include the `C:\Program Files` folder, but placing it in `C:\Domino` may work. Personal folders such as `C:\Users\{your-profile-name}\Documents` will work the best.

![domino files fully engaged as shown in file explorer](/domino/files.webp)

### Optional Patch {data-step="3"}

::: info

This step is not required for the 64-bit release of Domino, as that version does not have the same limitations its counterpart have.

:::

If multi-million note MIDIs are planned for creation with the editor, it is recommended to apply the 4GB patch to break the memory usage limits of the 32-bit application.

- [How to use the 4GB Patch](/software/misc/4gb-patch)

### Run {data-step="4"}

To run the application, simply double click on the `.exe` file.

The first run should look like this:

![domino fully engaged](/domino/window.webp)


## Configuration

### Synthesizer

The synthesizer(s) can be setup in the Preferences window, which can be accessed by pressing `F12` or by clicking on the red wrench icon at the top right of the window.

Go to the MIDI-OUT section and click on one of the slots for the `MIDI-OUT Device` column. Select a preferred device and proceed to the next column.

![domino preference window](/domino/synthsetup.webp)

The `Sound Source` column is a specified configuration for how Domino should fetch/interpret messages to/from the synth (e.g. sound names and other settings). This technical configuration is documented in the official manual.

Click OK to save. Domino will automatically open ports to the selected MIDI
synth.

### Sound Source Definition

There are pre-existing definitions which can be assigned to any particular synthesizer. These definitions will aid in knowing Control Change (CC) names, resolve customized CCs in imported MIDIs, and various other configs. 

Two of these definitions can be assigned to *OmniMIDI* (formerly *Keppy's Synthesizer*) and functionally make use of the defined CC naming and values, however, this can look bloated when it also contains other CCs that are not used by the synthesizer.

::: tip ATTACHMENT

[BASSMIDI OmniMIDI (.xml)](/domino/ks_bass.xml){download}

Click the link above to save it locally in the disk.

:::

::: info

The module above is pre-bundled in the pre-patched Domnino `.zip` in the download links of this page.

:::

This file can be placed inside the `Domino\Module\` folder. Domino requires a restart after placement to recognize this definition.

![domino sound source setup](/domino/ksbass.webp)


[dome]: <https://github.com/rin-w/dominohook/releases/download/1.43e/Domino_143e_pre-patched.zip>
[doms]: <https://takabosoft.com/download/win/domino/Domino144.zip>
[doml]: <https://takabosoft.com/beta/Domino145_dev008_x64.zip>

[7z]: <https://7-zip.org/>
[winrar]: <https://www.rarlab.com/download.htm>