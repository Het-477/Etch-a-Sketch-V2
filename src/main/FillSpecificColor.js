import FillPixels from "./FillPixels";

function FillSpecificColor() {
let selectedColor = '#000000'; // default black

document.getElementById('colorPicker').addEventListener('input', (e) => {
    selectedColor = e.target.value;
    FillPixels(selectedColor); // re-attach drawing logic with new color
});
 
}

export default FillSpecificColor