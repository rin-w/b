# How to make Black MIDI videos

The sharing/showcasing of one's work can be considered the main conception of Black MIDI. Making a video of it, in essence, is not only about presenting your work to the community and the world. It is also about contributing to the genre on shaping its culture and long-term standing.

::: details Video: [YOASOBI - アイドル (Han SeRin; Landrys; NewFall2023)][a] {open}

<iframe
  src="https://youtube.com/embed/IhbBqNzHSJY"
  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
  frameborder="0" 
  allowfullscreen
></iframe>

An example of a visual editing banger involving the use of *Adobe After Effects* and clever media source recycling.

:::

After you have finished a particular Black MIDI project, you may use creative methods in presenting each of the elements to make a pleasant Black MIDI video. A Black MIDI video can be mainly divided into two elements: visual signal, and sound signal - with the visual element containing various sub elements like piano roll/notation animations, audio visualizers, and ornaments such as particle effects (which may also sync with the audio) or really, anything if you wanted it.

## Audio {data-step="1"}

Whether you are making a Black MIDI video of your own work or others, it is always important to consider how the sound of it should be perceived by your audience, so let's start with tweaking the sound of your Black MIDI.

There isn't a strict rule on what kinds of sounds your Black MIDI should make, but here are some tutorials on how you can make your Black MIDI audio sound clear, and balanced.

- Black MIDI audio mastering

### File generation

You can use MIDI converters to create an audio file of your MIDI to be used to attach to videos, so synchronizing issues will be reduced. Alternatively, you could record a live playback. Here are some tutorials for it:

- [How to use Keppy's MIDI Converter](/software/synthesizer/renderer/keppy-midi-converter)
- [How to record synthesizer audio live](/software/insight/record-midi-live-with-audacity)

## Visuals {data-step="2"}

First, let's get familiar with how we can generate visuals using MIDIs. There are plenty of ways to do this including programs that are dedicated to rendering MIDIs.

There are two main ways you can generate a MIDI visual element. First one is by recording (specifically screen recording) a particular MIDI player. The second one is by using rendering programs.

Before rendering programs dedicated to Black MIDIs slowly began to be made, blackers would often record their screens to produce visuals for their videos. Here are some of screen recording applications that were used at least once for Black MIDIs:

::: details [*OBS Studio*][obs] (open-source)

An advanced multi-platform screen recorder.

:::

::: details [*Bandicam*][bandi] (Windows, freemium)

Currently has active users. An alternative to OBS Studio for less complex configuration requirements.

:::

::: details [*oCam*][ocam] (Windows, freemium)

Similar to Bandicam which also requires a purchased license to be used commercially.

:::

::: details [*Fraps*][frap] (Windows, freemium)

Outdated since 2013.

:::

::: details A camera

The classic.

:::

::: details ROM / GPU based

There are mobile devices which feature an out-of-the-box screen recording function, especially devices of newer generations. For desktop, a lot of graphics card models feature their own dedicated screen recorder such as ReLive on Radeon and ShadowPlay for GeForce

:::

These applications can then be used to capture a MIDI player playing a MIDI live with extra usage of computer resources. The video output can end up being smooth or laggy depending on the computer's performance capabilities.

For a guaranteed pristine animation, many blackers choose to use programs that make the base video for their MIDIs. The main advantage of this is its efficiency - no need to make tedious adjustments when recording a screen, and no need to wait as much time as the MIDI's length.[^s] Here are some visual MIDI renderers available for free:

::: details *Zenith* (Windows, [open-source][zen], [version 3 (beta)][zen3])

One of the commonly used visual renderer optimized especially for Black MIDIs.

:::

::: details [*Embers*][emb] (Windows, closed-source)

Although not recommended for Black MIDIs, it can render some of them properly. For removing the 'Embers' label, contact *Kaydax*.

:::

::: details [*MIDIFall*][mfall] (Windows, open-source)

Simple MIDI visualizer/renderer in 2D.

:::

::: details [*Parallel QMIDICore Quaver Stream*][qqs] (Windows; Android, open-source)

Optimized for Black MIDIs and commonly known as *QQS*, it is described as a MIDI to video converter which also features music notation animation.

:::

Here are some guides on how to use some of the programs listed above:

- How to make MIDI videos with Zenith on Windows
- How to make MIDI videos with QQS on Android 
<!--https://youtu.be/gJMOkLf60Tc-->
<!--https://youtu.be/aP3H7N2ML7U-->

## Editing {data-step="3"}

Now that you have your video and audio files ready, it's time to post-process them. Post-processing is the part of your Black MIDI project just prior to publishing it where you enhance the visual and audio content of your Black MIDI presentation as opposed to the conventional experience when playing the MIDI on a live player. Post-processing requires you to have a bit of knowledge about media technologies such as [codecs][codec] and editors ( [audio][aud], [video][vfx]). Here are some editing tools you may use:

### <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M12 3v9.28a4.39 4.39 0 00-1.5-.28C8.01 12 6 14.01 6 16.5S8.01 21 10.5 21c2.31 0 4.2-1.75 4.45-4H15V6h4V3h-7z"></path></svg> Audio Tools

- [*Audacity*][auda] (open-source)
- *Logic Pro* (macOS)
- *FL Studio* (Windows)
- *FL Studio Mobile* (Android)
- [*WaveEditor*][waveed] (Android, free, proprietary)
- [*Audio Editor - Music editor*][auded] (iOS, free, proprietary)

### <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z"></path><path d="M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4z"></path></svg> Video Tools

- [*Shotcut*][shotc] (open-source)
- [*Davinci Resolve*][davin] (free/proprietary, paid version available)
- [*Premiere Pro*][pr] (proprietary)
- [*After Effects*][ae] (proprietary)
- [*Blender*][blend] (open-source)
- [*ffmpeg*][ff] (open-source, CLI based, for advanced users)
- *Kinemaster* ([Android][kine-a], [iOS][kine-i], free/proprietary)
- *PowerDirector* ([Android][pdir-a], [iOS][pdir-i], free/proprietary)

For audio editors, you can utilize the same Digital Audio Workstation (DAW) that you have already chosen for editing MIDIs, given that DAWs are primarily designed for audio editing tasks. However, if your current MIDI audio requires no additional processing, you have the option to skip this step and proceed directly to using a video editor.

In case you prefer to avoid any further processing altogether, there are two approaches you can take. First, you can manually synchronize the audio and video by using either a video editor or by executing ffmpeg commands. However, please note that the latter method requires familiarity with command-line interface (CLI) and ffmpeg syntaxes.

Finally, if you really don't want to do any further processing, you could simply sync the audio and video using either a video editor or ffmpeg. Alternatively, some renderers (such as Zenith and QQS) offer the ability to automatically sync your rendered MIDI video and audio, and output a ready-for-publishing video file.

There are available tutorials for editing audio/videos from various people on video sharing sites (such as YouTube). They can offer detailed and insightful procedures on how to perform certain desired effects to be applied to your Black MIDI video. At this point, I could simply suggest to search on the sites using the keywords of your video/audio editor with the description of your desired effects.

<!--, but here are some that is especially applied for a Black MIDI video:-->
<!--ul>
  []()
</ul-->

## Publishing {data-step="4"}

After finally making a Black MIDI video, the final option would be to show it to the world by uploading the video to video sharing sites. The most viable solution to this is by using YouTube, which is currently one of the ~~only~~ video sharing platforms of all time. This is recommended for a number of reasons: (1) it can reach more audience the most; (2) it can keep you from possible unnecessary copyright concerns; (3) and it is where most blackers and fans are with the same interest for the genre.

To be able to use YouTube, you will need to create a Google account (or sign in to an existing one). You could then go to [YouTube][yt] and the site will guide you to navigate through the process of uploading your video.

Don't forget to share the link of the video to nearby communities like [Reddit][r/] or [Discord][gg] so you could get a head start audience!

## Footnotes

[^s]: Rendering time can vary by configuration.

[a]: <https://youtu.be/IhbBqNzHSJY>
[obs]: <https://github.com/obsproject/obs-studio/releases>
[bandi]: <https://www.bandicam.com/downloads/>
[ocam]: <https://ohsoft.net/eng/ocam/download.php>
[frap]: <https://fraps.com/download.php>
[zen]: <https://github.com/arduano/Zenith-MIDI/releases>
[zen3]: <https://cdn.discordapp.com/attachments/342003805270966284/1098826501400567889/Release.7z>
[emb]: <https://github.com/LyricWulf/Embers/releases/>
[mfall]: <https://github.com/Gawehold/MIDIFall/releases>
[qqs]: <https://github.com/Tweak-1600/ParallelQQS/releases>
[codec]: <https://en.wikipedia.org/wiki/Codec>
[aud]: <https://en.wikipedia.org/wiki/Audio_editing_software>
[vfx]: <https://en.wikipedia.org/wiki/Video_editing>
[auda]: <https://github.com/audacity/audacity/releases>
[waveed]: <https://play.google.com/store/apps/details?id=io.sbaud.wavstudio>
[auded]: <https://apps.apple.com/us/app/audio-editor-music-editor/id1493256837>
[shotc]: <https://www.shotcut.org/download/>
[davin]: <https://www.blackmagicdesign.com/products/davinciresolve/>
[pr]: <https://www.adobe.com/products/premiere.html>
[ae]: <https://www.adobe.com/products/aftereffects.html>
[blend]: <https://www.blender.org/>
[ff]: <https://github.com/GyanD/codexffmpeg/releases/>
[kine-a]: <https://play.google.com/store/apps/details?id=com.nexstreaming.app.kinemasterfree>
[kine-i]: <https://apps.apple.com/us/app/kinemaster-video-editor-maker/id1609369954>
[pdir-a]: <https://play.google.com/store/apps/details?id=com.cyberlink.powerdirector.DRA140225_01>
[pdir-i]: <https://apps.apple.com/tr/app/powerdirector-video-editor/id1473574597>
[yt]: <https://youtube.com>
[r/]: <https://reddit.com/r/BlackMIDI>
[gg]: <https://discord.gg/s42aft8>
