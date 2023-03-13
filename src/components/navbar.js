import React from "react";
import Handler from "./handler";

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