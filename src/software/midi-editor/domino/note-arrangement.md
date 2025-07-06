# Note Arrangement in Domino MIDI Editor

Domino has features that let the user manipulate notes in various ways. These can be helpful in arranging creative and interesting black MIDI phrases.

## Quantize and Humanize

![domino quantize flipnote](/domino/quantizehumanize.webp)

The quantize tool automatically re-aligns notes that are off from the rhythm even for a slight bit. It can be initialized by pressing `Ctrl` + `Q` or through the menu -> `Event` -> `Quantize...`.


::: details Quantizing Recorded Notes

<video controls="controls" preload="metadata" src="/domino/quantizedemo.webm" />

:::

The humanize does the opposite of quantize. It randomizes the properties of notes to make the arrangement sound "human". It can be accessed in the menu -> `Event` -> `Humanize...`.

::: details Humanizing a Chord

<video controls="controls" preload="metadata" src="/domino/humanizedemo.webm" />

:::

## Stretching and Flipping

A selection of notes can be stretched to a specified time. This option can be accessed through the menu -> `Event` -> `Stretch...`. On this case, I made the selection a half shorter:

![domino stretch window](/domino/stretch.webp)

Note that the stretching effect is applied to the boundaries of the selection box, not the edges of the selected notes.

![domino stretched down notes](/domino/stretchresult.webp)

Notes in Domino can only be flipped horizontally through the menu -> `Event` -> `Flip`.

![domino flip note](/domino/flip.webp)

## Harmonize

The harmonize function makes use of key scales to generate "harmony" from a progression of single notes. It can be configured on the menu -> `Event` -> `Miscellaneous` -> `Harmonize...` and applied to measures.

::: details Harmonizing a Key Progression

<video controls="controls" preload="metadata" src="/domino/harmonizedemo.webm" />

:::

::: tip

The added Key Scale events can be edited in the Conductor track.

:::


## Stroke

The stroke function applies incremental delays for each beginning of notes from a chord. After selecting the chords, strokes can be applied through the menu -> `Event` -> `Stroke...`.

::: details Stroking Chords

<video controls="controls" preload="metadata" src="/domino/strokedemo.webm" />

:::


## Pattern Slice

A pattern slice automates rhythmic slicing of notes or chords by applying a pre-defined user pattern. To create or apply a pattern, simple go to the menu -> `Event` -> `Pattern Slice...`.

We can demonstrate pattern registration by first creating a rhythm out of
notes:

![domino flip note](/domino/patternslice0.webp)

Note that the scope of note arrangement is limited to a single measure.
However, the notes can be on multiple keys as it only captures the starting point and velocity of the notes.

Afterwards, we target the measure number where the arrangement is located and
register it:

![domino flip note](/domino/patternslice1.webp)

The pattern is saved and the original arrangement can now be deleted. The following demonstrates the application of the created pattern:

::: details Applying the Pattern to Notes

<video controls="controls" preload="metadata" src="/domino/patternslicedemo.webm" />

:::
<!-- making the patterns is a bit of a work. plz add adadadaddd

The following file attached contains pre-defined patterns that you might find
useful for blacking MIDIs.

::: tip ATTACHMENT

[insert-custom-patterns-filename (.ini)](/PatternSlice.ini){data-file download}

Click the link above to save it to your computer.

:::
-->
The patterns are saved in the `Domino\IniFiles\Dialog\PatternSlice.ini` file and can be safely replaced with a different one. 

::: warning

Replacing the `PatternSlice.ini` file will remove existing user patterns.

:::


## Linking Measures

The measure link event mirrors notes from a sequence of measures to another within a track. It can be created through the menu -> `Insert` -> `Measure Link`.

::: details Measure Link Demonstration

<video controls="controls" preload="metadata" src="/domino/measurelinkdemo.webm" />

:::

### Video Summary

- The source measure can be configured by double-clicking on the entry in the Event List. It can also be configured by changing the values on the Gate and Vel/Value column, which are measure starting point and transpose value, respectively
- The measure link event spans all subsequent measures containing no events.
- If the measure link destination ends too early, the End of Track (EOT) event can be manually placed on a later measure point past by the measure source's time.