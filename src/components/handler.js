import React from "react";

import { Link } from "react-router-dom";

const Handler = () => {

    return (
        <div>
            <Link to={`AboutMe`} >About Me</Link>
            <Link to={`Portfolio`}>Portfolio</Link>
            <Link to={`Contact`}>Contact Me</Link>
            <Link to={`Resume`}>Resume</Link>
            <Link to={'BreathingShapes'}>My Css Tricks</Link>
        </div>
    )
}

export default Handler