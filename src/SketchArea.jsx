import { useEffect } from "react"
import DrawSketchArea from "./main/DrawSketchArea"
import FillPixels from "./main/FillPixels";
import './css/main.css'

function SketchArea() {
    let padSize = 16;

    useEffect(() => {
        DrawSketchArea(padSize);
        FillPixels();
    }, [padSize])
    
    return (<>
        <div id="sketch-area" className="container">
        </div>
    </>)
}

export default SketchArea