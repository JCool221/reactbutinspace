import React from "react";
import Handler from "./handler";

const NavBar = () => {
    return (
        <nav className="nav-bar">
            <h1>Hello!</h1>
            <ul className="nav-list">
                
                    <Handler />
                    
                {/* <li><a href="#">Portfolio</a></li>
                <li><a href="#">Contact</a></li>
                <li><a href="#">Resume</a></li> */}
            </ul>
        </nav>
    )
}

export default NavBar;