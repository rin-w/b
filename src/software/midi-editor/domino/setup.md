# Setting up *Domino*

::: info

Domino is a freeware dedicated MIDI editor written in C++ exclusively for the
Windows operating system.

:::

## Installation

### Download {data-step="1"}

Here are some source links for various versions of the application:

- [GitHub][dome] (v1.43, x86, English)
- [Official][doms] (v1.44, x86, Japanese)
- [Official][doml] (v1.45, x64, beta, Japanese)

Select one from above. The difference between these versions is minimal. The
first link will give you a version that has already been pre-patched by me to
make the interface of the app be English. The second link will give you the
original stable version containing more improvements/bug fixes, without full
support of an English interface. The third link is a beta release with a new
major feature which is its 64-bit app architecture. This version can handle
much more notes and can render MIDIs faster than the previous versions.

All links above will give you a zip file containing the application. Head to
the next step for quick instructions for extracting the zip file.

### Extract {data-step="2"}

The downloaded zip files can be extracted using any zip extraction tools such
as [7-Zip][7z], [WinRAR][winrar], or the File Explorer.

![extract files context menu in file explorer](/domino/extractzip.webp)

The location of the extracted files should not be in a user-inaccessible
location by default.

![file explorer prepares for full power domino extracting calamity](/domino/extractfileexplorer.webp)

Locations where Domino might not work properly include
the `C:\Program Files` folder, but placing it in `C:\Domino` may work.
Otherwise, keep the application in your own personal folders, such as
`C:\Users\{your-profile-name}\Documents`.

![domino files fully engaged as shown in file explorer](/domino/files.webp)

### Optional Patch {data-step="3"}

::: info

If you chose the 64-bit release of Domino, this step will not have any effect
as that version does not have the same limitations its counterpart have.

:::

If you are planning to create multi-million note MIDIs with the editor, it is
recommended to apply the 4GB patch to break the memory usage limits of the
32-bit application.

- [How to use the 4GB Patch](/software/misc/4gb-patch)

### Run {data-step="4"}

To run the application, simply double click on the `.exe` file.

The first run should look like this:

![domino fully engaged](/domino/window.webp)


## Configuration

### Synthesizer

The synthesizer(s) can be setup in the Preferences window, which can be
accessed by pressing `F12` or by clicking on the red wrench icon at the top
right of the window.

Go to the MIDI-OUT section and click on one of the slots for the `MIDI-OUT
Device` column. Select your preferred device and proceed to the next column.

![domino preference window](/domino/synthsetup.webp)

The `Sound Source` column is a specified configuration for how Domino should
fetch/interpret messages to/from the synth (e.g. sound names and other
settings). This technical configuration is documented in the official manual.

Click OK to save. Domino will automatically open ports to the selected MIDI
synth.

### Sound Source Definition

There are pre-existing definitions which can be assigned to any particular
synthesizer. These definitions will aid in knowing Control Change (CC) names,
resolve customized CCs in imported MIDIs, and various other configs. 

Two of these definitions can be assigned to *Keppy's Synthesizer* (KS) and
functionally make use of the defined CC naming and values, however, this can
be a bit bloated when it also contains other CCs that are not used by the
synthesizer. Although this is not too much of an inconvenience, it is still
cooler to install a slightly more accurate definition file for KS.

::: tip ATTACHMENT

[BASSMIDI Keppy Synth (.xml)](/ks_bass.xml){download}

Click the link above to save it to your computer.

:::

This file can be placed inside the `Domino\Module\` folder. Domino requires a
restart after placement to recognize this definition.

![domino sound source setup](/domino/ksbass.webp)


[dome]: <https://github.com/ryryjy/Domino-English-Translation/releases/download/1.43-en.4.1/domino/143e_pre-patched.zip>
[doms]: <https://takabosoft.com/download/win/domino/Domino144.zip>
[doml]: <https://takabosoft.com/beta/Domino145_dev005_x64.zip>

[7z]: <https://7-zip.org/>
[winrar]: <https://www.rarlab.com/download.htm>