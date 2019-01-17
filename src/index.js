/* HOT MODULE WORKS HERE, BECAUSE IS INDEX.JS ENTRY IN CONFIG */
import './style.css';
import './style.scss';

console.log( 'Started Server we can code and save to see the magic' );

/**
 * HOT MODULE WORKS HERE IN THIS SCRIPT
 */
if ( module.hot ) {
    module.hot.accept();
    module.hot.dispose( function () {
        console.log( 'Hot Module' );
    } );
}