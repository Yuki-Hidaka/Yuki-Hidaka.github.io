import React, { useEffect, useRef } from "react";


function Canvas({draw}){

    const canvasRef = useRef(null);
    console.log("canvas")

    useEffect(() => {

        const canvas = canvasRef.current;
        draw(canvas);

    }, [draw]);

    return(

        <canvas ref={canvasRef} />

    );
}

export default Canvas;