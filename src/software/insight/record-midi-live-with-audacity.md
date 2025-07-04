# How to record live MIDI playback 
##### *(in the coolest tedious way possible)*

This method of recording a MIDI live can solve a problem some black MIDIs experience: voice limits.

Yeah, there are normal black MIDIs where the CPU just can't handle polyphony in some parts. So this is where the technique will come to use.

While, yes, we can just use a MIDI converter for this, there are still people who like the sound of live playbacks better.

The main gist is to record each MIDI track (or channel) one by one, and then merge each recording to a single one. This will of course, take a big amount of time. Another con is that the synthesizer's MIDI effects will multiply accordingly.

## Install Audacity {data-step="1"}

You can download this program through the official website:

- [www.audacity.org][aud] (open-source)

## Install a live MIDI player {data-step="2"}

There are some listed on this site's sidebar.

## Splitting the tracks {data-step="3"}

I usually don't even need to do this process, as I use PFA's configurable play settings.

~~I am still yet to investigate on tools that can split the tracks of a MIDI into its own MIDI file.~~

If anything more, you would probably want to re-group your note arrangements and assign them to tracks of the similar tones. This way, it will be possible to add effects to parts of your MIDI audio in a granular way.

### Add track marker

We will also need to add some kind of audio marker to know when each track starts after we finish recording, since you will most likely be starting the recording at different times for each track. This is added at the very beginning of the track. Thus, it would be convenient if you added some silence at the beginning of your entire MIDI.

I place one short note at a high key as my track marker, but you can use any other key as long as it is loud enough andq doesn't interfere with the main notes.

## Recording with Audacity {data-step="4"}

### Device recording target {data-step="1"} 

Usually, you'd target the `Speakers (<Audio device name>)` on the selection box right after the microphone icon. You can test to see if it's working by clicking the dB meter of the microphone, then playing some music on another application.

### Record the MIDI {data-step="2"} 

You first start playing the isolated track on your MIDI player. Then, as you play the track on the player, you record the sound by clicking the button that has a red circle. Make sure your track marker note is part of the recording.

When your track finishes playing, you can stop the recording too by clicking the stop button (square icon).

Now, before you start recording the next MIDI track, and head to the menu -> `Tracks` -> `Add new` -> `Stereo Track`. Then, tick the `Solo` option of that new audio track. Finally, click the button with a |< icon, so the record stream starts at the beginning.

Do make sure that the new track is the one that's highlighted as it is the target track of the next stream of recording.

### Repeat {data-step="3"} 

Keep repeating the previous step until you finish all tracks.

While application crashes happen rarely, you might also want to save the project frequently.

### Sync {data-step="4"} 

We will need to sync each track recorded using the marker note. To do this, we can shift the track by hold-clicking and dragging its handle (the top bar of the track) towards left or right.

If the marker note sound on the waveform is hard to see, you can switch the view to a spectrogram by clicking the drop down menu on its left side (arrow pointing down) -> `Spectrogram`.

Make all tracks have its marker note sound aligned to each other as precise as you can. You can use the time marker as your guide.

## Consolidation {data-step="5"} 

We are almost done, but we need a little more clean up. We can remove the marker note sounds by voluming it down. To do this, just select the part of the audio where the sound is playing, then head to the menu -> `Effect` -> `Amplify`, then shift the slider all the way to the left. Click OK, then the sound should be heard less. At this point, we don't need to keep clicking the menus just to apply the amplify effect as we can just press `Ctrl` + `R` and it will repeat the last effect we applied. So if you still hear the marker note, just keep pressing that hotkey again until the sound is gone. You do the same thing to the rest of the tracks.

### Clearing earrape

When you play the entire thing by deactivating solo mode, you might get dank noises. Don't worry - the recording isn't broken. Simply select all tracks by pressing `Ctrl` + `A`, then head to the menu -> `Effects` -> `Amplify`, then shift the slider to the left by a little bit and click OK. Play the project again, and if the dank noise is still there, just keep pressing `Ctrl` + `R` until the dank is gone.

### Exporting 

We can either export the entire project as a single audio by heading to the menu -> `File` -> `Export` -> `Export as WAV`. After that, you're pretty much done and now have a nice live playback MIDI with higher polyphony capacity.

### Exporting each track

We can also export each track to its own audio file, so we can open them on another editor, and add other audio effects we like. This can be done by heading to the menu -> `Export` -> `Export multiple...`.

[aud]: <https://www.audacityteam.org/download/>