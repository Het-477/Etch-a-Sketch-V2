import FillRandomColor from "./main/FillRandomColor";
import FillSpecificColor from "./main/FillSpecificColor";

function FooterControls() {
    return (
        <div id="footer-controls" className="footer-container">
            <button className="randomColorBtn" onClick={FillRandomColor}>Random</button>
            {/* <button className="specificColorBtn" onClick={}>Random</button> */}
            <input type="color" id="colorPicker" title="Choose a color" onClick={FillSpecificColor}/>

        </div>
    );
}

export default FooterControls;
