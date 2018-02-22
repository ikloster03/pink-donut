import $ from 'jquery';

export default class TrackedMenu {

    constructor( header, headerColors, menuClass, menuClassActive, trackedClassName ) {
        const self = this;
        self.$header = $( header );
        self.headerColors = headerColors;
        self.$menuClass = $( menuClass + ' li' );
        self.menuClassActive = menuClassActive;
        self.$trackedClassName = $( trackedClassName );

        self.scrollSpy();
    }

    getMaxOfArray( arr ) {
        return Math.max.apply(null, arr);
    }

    getKeyByValue( obj, value ) {
        for ( const prop in obj ) {
            if ( obj.hasOwnProperty( prop ) ) {
                if ( obj[ prop ] === value ) {
                    return prop;
                }
            }
        }
    }

    getCurrentSection( obj, num ) {
        const self = this;
        let arr = [ ];
        for ( const key in obj ) {
            if ( obj.hasOwnProperty( key ) ) {
                const item = obj[ key ];
                if ( item <= num ) {
                    arr.push( item );
                }
            }
        }

        if ( arr.length === 0 ) {
            return null;
        } else  if ( arr.length === 1 ) {
            return  self.getKeyByValue( obj, arr[ 0 ] );
        }

        return self.getKeyByValue( obj, self.getMaxOfArray( arr ) );
    }

    changeMenuItem( hash ) {
        const self = this;
        self.$menuClass.removeClass( self.menuClassActive );
        for( const colorItem in self.headerColors) {
            self.$header.removeClass( self.headerColors[ colorItem ] );
        }
        self.$menuClass.each(function( ) {
            const item = $( this ).children( 'a' ).attr( 'href' ).slice( 1 );
            if ( item === hash ) {
                self.$header.addClass( self.headerColors[ item ] );
                $( this ).addClass( self.menuClassActive );
            }

        });
    }

    scrollSpy( ) {

        const
            self = this,
            jSections = this.$trackedClassName,
            sections = { },
            $window = $( window );

        jSections.each( function( index, element ) {
            sections[ element.id ] = element.offsetTop;
        });
        let curId, lastId;

        $window.scroll( function ( ) {

            let scrollPosition = $window.scrollTop( );

            curId = self.getCurrentSection( sections, scrollPosition + self.$menuClass.outerHeight( true ) );
            if ( curId ) {
                if ( lastId !== curId ) {
                    lastId = curId;
                    self.changeMenuItem( curId );
                }
            }

        });
    }

}