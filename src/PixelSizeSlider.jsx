import { useEffect, useState } from "react";
import DrawSketchArea from "./main/DrawSketchArea";

function PixelSizeSlider() {
    const [areaSize, setAreaSize] = useState(16); // initial resolution

    const handleSliderChange = (e) => {
        setAreaSize(Number(e.target.value));
    };

    useEffect(() => {
        DrawSketchArea(areaSize); // redraw when resolution changes
    }, [areaSize]);

    return (
        <div id="slider-container">
            <input
                id="slider"
                className="slider"
                type="range"
                min="1"
                max="100"
                value={areaSize}
                onChange={handleSliderChange}
            />
            <span id="slider-value">
                {areaSize} x {areaSize} (Resolution)
            </span>
        </div>
    );
}

export default PixelSizeSlider;
    