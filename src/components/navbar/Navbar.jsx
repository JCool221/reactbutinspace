import React from "react";
import Handler from "./Handler";
import "./navbar.css"

const NavBar = () => {
    return (
        <nav className="nav-bar">
            <h1>Hello!</h1>
            <ul className="nav-list">

                <Handler />

            </ul>
        </nav>
    )
}

export default NavBar;