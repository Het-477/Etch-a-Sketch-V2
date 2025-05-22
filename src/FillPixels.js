function FillPixels() {

    let isDrawing = false; // track if mouse button is pressed

    function attachSketchpadListeners() {
        const sketchArea = document.querySelector('#sketch-area');
        sketchArea.addEventListener("mousedown", (e) => {
            if (e.target.classList.contains("sketchpad-pixel")) {
                isDrawing = true;
                e.target.style.backgroundColor = "black";
            }
        });

        sketchArea.addEventListener("mouseover", (e) => {
            if (isDrawing && e.target.classList.contains("sketchpad-pixel")) {
                e.target.style.backgroundColor = "black";
            }
        });

        document.addEventListener("mouseup", () => {
            isDrawing = false; // Stop drawing when the mouse button is released
        });

        sketchArea.addEventListener("mouseleave", () => {
            isDrawing = false; // Stop drawing when leaving the sketchArea
        });
    }

    attachSketchpadListeners()
}

export default FillPixels