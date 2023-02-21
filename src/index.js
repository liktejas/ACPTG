import React from "react";
import ReactDOM from "react-dom";
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import App from "./components/ListCPT";
import AddNewCPT from "./components/AddNewCPT";
import './components/settings.scss';


document.addEventListener( 'DOMContentLoaded', () => {
    var element = document.getElementById( 'acpt-admin-app' );
    if ( typeof element !== 'undefined' && element !== null ) {
        ReactDOM.render( <App />, document.getElementById( 'acpt-admin-app' ) );
    }
    var element2 = document.getElementById( 'acptg-add-new-app' );
    if ( typeof element2 !== 'undefined' && element2 !== null ) {
        ReactDOM.render( <AddNewCPT />, document.getElementById( 'acptg-add-new-app' ) );
    }
} )
