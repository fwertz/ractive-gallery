**ractive-gallery** is currently under development. First planned release is **0.1.0**


# ractive-gallery
**ractive-gallery** is a [Ractive](https://github.com/ractivejs/ractive) [component](http://docs.ractivejs.org/latest/components) which aims to encapsulate primary features commonly found in an image gallery.

### Installation
`npm install ractive-gallery`


### Project Integration
Set up **ractive-gallery** like you would any other component.

```
Ractive.components[ "r-gallery" ] = require( "ractive-gallery" );
```

If not using modules, **ractive-gallery** will expose a **`RactiveGallery`** global.


### Basic Usage
```
<r-gallery
    images="{{sourceURLArray}}"
    thumbnails="true"
     />
```

### Options
+ `images` [`undefined`]
    + A `String[]` of URL sources for the images
+ `selected` [`0`]
    + A `Number` (zero based) index of which image is initially selected
+ `thumbnails` [`true`]
    + Any value which evaluates truthy will enable thumbnail strip
+ `prevButtonLabel` [`<`]
    + A `String` label to use for the *previous* button control
+ `nextButtonLabel` [`>`]
    + A `String` label to use for the *next* button control
+ `placeholder` [`undefined`]
    + A `String` or `Function => String` for placeholder URLs on all images in the gallery (feature and thumbnails)

### Events
**TBD**

### Testing
For now, I'm manually testing initial features and small additions. Test scripts will be a requirement before launching **v1.0.0**


### Contributing
Small project (and I'm new to writing public facing modules), so no preferences on contributions yet. PR's welcome, just name it something obvious.