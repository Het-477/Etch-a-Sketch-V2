import FillRandomColor from "./main/FillRandomColor";
import FillSpecificColor from "./main/FillSpecificColor";
import PixelSizeSlider from "./PixelSizeSlider";
import './css/footer-controls.css'

function FooterControls() {
    return (<>
        <PixelSizeSlider />
        <div id="footer-controls" className="footer-container">
            <button className="randomColorBtn" onClick={FillRandomColor}>Random</button>
            <input type="color" id="colorPicker" title="Choose a color" onClick={FillSpecificColor} />

        </div>
    </>);
}

export default FooterControls;
