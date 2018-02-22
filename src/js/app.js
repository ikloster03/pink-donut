import '../css/app.scss'
import $ from 'jquery'

$(document).ready( function ( ) {
    const $window = $( window );
    const header = '.header';
    const active = 'header_active';
    const headerMenuList = '#header-menu-list';
    const menuMobile = 'menu_mobile';

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
        } else {
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
    })


} );
