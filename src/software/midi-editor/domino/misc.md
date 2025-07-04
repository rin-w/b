# Miscellaneous *Domino* Wonders

## The Event List

![domino event list](/domino/eventlist.webp)


The Event List is a panel containing simplified entries of all the event data of the MIDI. It is located at the left side of the window. 

Each event can start at a specific point of time on the MIDI. That specific
point of time can be called a `Tick` representing a non-decimal and
non-negative number. In Domino, this number resets to 0 after every new **mea**sure.

The `Gate` is simply the amount of ticks from the event trigger until the
event ends. A control change (CC) event will not have a gate value as it only triggers to change a parameter value at once.

The `Vel/Value` can either be the note event's velocity amount, or the CC's
value. The CC value shown in the column can be represented as words through the sound source definition.

The `Step` of an event is the number of ticks between its first tick and the first tick of the subsequent event.

![domino event list](/domino/stepdemo.webp)

If we apply Einstein-level math on this, it is revealed that the numbers of
tick and step between adjacent events are related to each other as shown above.

Finally, the `Mea` ('measure') is the division of ticks through the specified rhythmic/time signature.

## Domino Parts

The Domino part file (`*.dmp`) is a secret encoding of MIDI events which only
Domino will be able to understand or open. This file is used primarily for storing MIDI events extracted from a Domino project.

You can generate part files by selecting the events to export and navigating the menu -> `File` -> `Export highlighted events...`.

::: details Part File Exporting Demonstration

<video controls="controls" preload="metadata" src="/domino/dmpexp.webm" />

:::

### Demo Summary

- Events can be selected using the Event List or the Piano Roll.
- Select a sequence of events in the Event List by holding the `Shift` key and clicking two ends of a set of events.
- Add specific events on the list to the selection by holding `Ctrl`, then clicking the desired events to add.
- When importing the part file, 3 options are given for the `Paste Mode`
- The `Normal` mode appends the part file events right from the currently selected playhead position without removing any existing events.
- The `Ripple Paste` mode creates a separate space spanning the whole part
  file events and places them within that space with the existing events moved forward (if there's any).
- The `Ripple Replace` mode completly replaces the same amount of timespan of
  the existing project as the part file's right directly from the current playhead position.


Events can also be selected through the Track List view to export multiple tracks of the MIDI to a single part file:

::: details Exporting Multiple Tracks To Part File

<video controls="controls" preload="metadata" src="/domino/dmpexptr.webm" />

:::
