import React from 'react';
import {auth} from './firebase';
import './Header.css';

function Header() {
    return(
        <div className="head fixed-top bg-primary rounded">
            <img className="logo" src="../havk-logo.png" alt="logo"/>
            <h4>Havk Messenger App</h4>
            <button className="btn btn-outline-light" onClick={() => auth.signOut()}>Logout</button>
        </div>
    );
}


export default Header;