import FillRandomColor from "./FillRandomColor";
import FillSpecificColor from "./FillSpecificColor";

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
