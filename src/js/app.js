import '../css/app.scss'
import $ from 'jquery'
import TrackedMenu from './tracked'

$(document).ready( function ( ) {
    const $window = $( window ),
        header =            '.header',
        active =            'header_active',
        headerMenuList =    '#header-menu-list',
        menuMobile =        'menu_mobile',
        headerColors = {
            'section-home':         'header_yellow',
            'section-what-i-do':    'header_white',
            'section-my-works':     'header_white',
            'section-about-me':     'header_white',
            'section-contact':      'header_blue',
        },
        menuColors = {
            'section-home':         'menu_yellow',
            'section-what-i-do':    'menu_white',
            'section-my-works':     'menu_white',
            'section-about-me':     'menu_white',
            'section-contact':      'menu_blue',
        };

    $( '#header-menu-btn' ).click( function ( e ) {
        console.log('header-menu');
        e.preventDefault();
        $( '.menu-icon-toggle' ).toggleClass( 'menu-icon-toggle_expanded' );
        $( headerMenuList ).toggleClass( 'menu_active' );
    } );



    function setHeader() {
        console.log('header', $window.width( ));
        if( $window.width( ) < 1024) {
            $( headerMenuList ).addClass( menuMobile );
            const trackedMenu = new TrackedMenu( header, {}, {}, headerMenuList, 'menu__item_active', '.section_tracked' );
        } else {
            const trackedMenu = new TrackedMenu( header, headerColors, menuColors,  headerMenuList, 'menu__item_active', '.section_tracked' );
            $( headerMenuList ).removeClass( menuMobile );
            $window.scroll( function ( ) {
                if ( $window.scrollTop( ) > 10 ) {
                    $( header ).addClass( active );
                } else {
                    $( header ).removeClass( active );
                }
            })
        }
    }

    setHeader();

    $window.resize(function () {
        setHeader();
    });

    $( headerMenuList + ' li' ).on( 'click', 'a', function( e ) {
        e.preventDefault( );

        let id = $( this ).attr( 'href' );
        let top = $( id ).offset( ).top - $( headerMenuList + ' li' ).outerHeight( true );


        $( 'body, html' ).animate({
            scrollTop: top
        }, 1500);

    });

} );
