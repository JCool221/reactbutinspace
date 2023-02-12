import React from "react";
import AboutMe from "./aboutMe";

const Handler = () => {
    
    const handleClick = (e) => {
        // e.preventDefault();
        console.log(e)
    }

    return (
        <div>
            <a onClick={() => handleClick('AboutMe')}>About Me</a>  
            <a onClick={() => handleClick('Portfolio')}>Portfolio</a>  
            <a onClick={() => handleClick('Contact Me')}>Contact Me</a>  
            <a onClick={() => handleClick('Resume')}>Resume</a>  

            {/* {renderComp && React.createElement(renderComp)}   */}

        </div>
    )
}

export default Handler