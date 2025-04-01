import React from "react";
import Canvas from "./Canvas";

import { drawBox } from "./drawBox";
import { drawSpinningCube } from "./drawSpinningCube";
import { drawStarryNight } from "./drawStarryNight";
import { drawFireWorks } from "./drawFireWorks";


const Work = () => {

    console.log("work")

    return (
        <div>
            <h2>Work Page</h2>
            <Canvas draw={drawBox}/>
            <br/>
            <Canvas draw={drawSpinningCube}/>
            <br/>
            <Canvas draw={drawStarryNight}/>
            <br/>
            <Canvas draw={drawFireWorks}/>
        </div>
    )
};

export default Work;