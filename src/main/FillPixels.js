let isDrawing = false; // track if mouse button is pressed

export function attachSketchpadListeners(colorChoice) {
    const sketchArea = document.querySelector('#sketch-area');
    if (!sketchArea) return;

    // Normalize: wrap colorChoice in a function if it's not already
    const getColor = typeof colorChoice === 'function' ? colorChoice : () => colorChoice;

    sketchArea.addEventListener("mousedown", (e) => {
        if (e.target.classList.contains("sketchpad-pixel")) {
            isDrawing = true;
            e.target.style.backgroundColor = getColor();
        }
    });

    sketchArea.addEventListener("mouseover", (e) => {
        if (isDrawing && e.target.classList.contains("sketchpad-pixel")) {
            e.target.style.backgroundColor = getColor();
        }
    });

    document.addEventListener("mouseup", () => {
        isDrawing = false;
    });

    sketchArea.addEventListener("mouseleave", () => {
        isDrawing = false;
    });
}

export default function FillPixels(colorChoice = 'black') {
    attachSketchpadListeners(colorChoice);
}
