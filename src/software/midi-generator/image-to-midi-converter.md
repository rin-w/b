# Image to MIDI

ImageToMidi allows the user to select colors from an image and automatically capture all pixels in the image to be converted into a MIDI track per color. This is useful for conveniently drawing patterns or note art outside piano roll editors which could get cumbersome to work on.

![image to midi sample image](/misc/ImageToMidi.webp)


## Installation

The program is portable and is minimal in installation.

### Download {data-step="1"}

Provided below is the download link to ImageToMidi

- [ImageToMidi (.exe)][gh] (Windows)

### Run {data-step="2"}

Opening the executable should immediately show the program options.


## Configuration

To start, simply click `[Browse]` to target an image to convert into a MIDI. Click on one of the eyedropper boxes and target any color from the image preview.

Click `[Export MIDI]` to start processing and output the MIDI file to a destination.


### Resolution

The `Maximum Note Length` option will dictate how "chopped" the resulting notes are based on the details of the source image. A value of `1` is equivalent to 1 tick long notes, which is 1 pixel of the fitted image. If the option is disabled, the program will guess for the longest a note can elapse based on similarity to neigbouring pixel colors. <!-- that did not sound smooth -->

`Ticks per pixel` can be analogous to the canvas size; a higher value will result a longer note.

<!--
### Color events

The `Generate Color Events` option
actually i dont know what the hell this does exactly -->


<!--
there is this mod or extension by jieneng (jienengjianghao @ discord) awaiting english translation

might be cool to add that here-->


[gh]: <https://github.com/arduano/ImageToMidi/releases>