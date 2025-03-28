import React from "react";
import Canvas from "./Canvas";


const Work = () => {

    console.log("work")

    return (
        <div>
            <h2>Work Page</h2>
            <Canvas _className="tri" src_path = "./main.js" />
        </div>
    )
};

export default Work;