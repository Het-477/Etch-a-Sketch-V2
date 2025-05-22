import { useEffect } from "react"
import DrawSketchArea from "./DrawSketchArea"
import FillPixels from "./FillPixels";
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