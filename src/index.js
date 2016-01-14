require( './style.scss' );





/**
 *
 */
var computed = {
    selectedImage: function () {
        var selected = this.get( 'selected' );
        return this.get( 'images.' + selected );
    },

    galleryHeight: function () {
        var hasThumbnails       = this.get( 'thumbnails' ),
            thumbnailsHeight    = this.get( 'thumbnailsHeight' );

        return hasThumbnails ? 100 - thumbnailsHeight : 100;
    }

}







/**
 *
 */

var RactiveImage    = require( 'ractive-image' );

module.exports = Ractive.extend({
    template:   require( './template.html' ),
    components: {
        'r-image': RactiveImage,
        'r-thumb': RactiveImage
    },
    data:       data,
    computed:   computed,
    oninit:     oninit
});






/**
 *
 */
function data () {
    return {
        controls:           true,
        selected:           0,
        thumbnails:         false,
        thumbnailsHeight:   15
    }
}






/**
 *
 */
function oninit () {
    this.on( 'prev', function ( e ) {
        var selected    = this.get( 'selected' ),
            length      = this.get( 'images.length' ) || 0;

        if ( 0 === selected ) {
            this.set( 'selected', length - 1 );
        } else {
            this.set( 'selected', selected -1 );
        }
    });

    this.on( 'next', function ( e ) {
        var selected    = this.get( 'selected' ),
            length      = this.get( 'images.length' ) || 0;

        if ( length - 1 === selected ) {
            this.set( 'selected', 0 );
        } else {
            this.set( 'selected', selected + 1 );
        }
    });

    this.on( 'r-thumb.select', function ( e ) {
        this.set( 'selected', e.component.get( 'idx' ) );
    });
}