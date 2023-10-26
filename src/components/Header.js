import React from 'react';
import { NavLink } from 'react-router-dom';

function Header(props) {
    return (
        <header>
            <a href="/" className="logo"><img src="/assets/img/logo.svg" alt className="logo" /></a>
            <nav>
                <ul id="navbar">
                <li><NavLink className="active" to={"/"}>Home</NavLink></li>
                    {/* <li><a href="index.html" className="active">Home</a></li> */}
                    <li><NavLink  to={"shop/"}>Shop</NavLink></li>
                    <li><NavLink  to={"blog/"}>Blog</NavLink></li>
                    <li><NavLink  to={"about/"}>About</NavLink></li>
                    <li><NavLink  to={"contact/"}>Contact</NavLink></li>
                    <li><NavLink  to={"auth/"}>Account</NavLink></li>
                    <li id="lg-bag"><NavLink  to={"cart/"}><i className="fa fa-bag-shopping" /></NavLink></li>
                    <a href="#" id="close"><i className="fa-solid fa-xmark" /></a>
                </ul>
            </nav>
            <div id="mobile">
                <a href="cart.html"><i className="fa fa-bag-shopping" /></a>
                <i id="bar" className="fas fa-outdent" />
            </div>
        </header>

    );
}

export default Header;