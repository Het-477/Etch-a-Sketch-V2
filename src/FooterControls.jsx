import FillRandomColor from "./FillRandomColor";

function FooterControls() {
    return (
        <div id="footer-controls" className="footer-container">
            <button className="randomColorBtn" onClick={FillRandomColor}>Random</button>

        </div>
    );
}

export default FooterControls;
