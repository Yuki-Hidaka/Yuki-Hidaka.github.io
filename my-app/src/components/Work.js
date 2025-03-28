import React from "react";
import Canvas from "./Canvas";

import { drawBox } from "./drawBox";
import { drawSpinningCube } from "./drawSpinningCube";


const Work = () => {

    console.log("work")

    return (
        <div>
            <h2>Work Page</h2>
            <Canvas draw={drawBox}/>
            <br/>
            <Canvas draw={drawSpinningCube}/>
        </div>
    )
};

export default Work;