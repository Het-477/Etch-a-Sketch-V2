function DrawSketchArea(gridSize = 16) { // default grid size: 16px 

    // defining sketch area height & width 
    const GRID_WIDTH = 520;
    const GRID_HEIGHT = 520;

    const sketchArea = document.querySelector('#sketch-area');
    if (!sketchArea) return;

    // setting height and width 
    sketchArea.style.width = `${GRID_WIDTH}px`;
    sketchArea.style.height = `${GRID_HEIGHT}px`;

    // Clear previous pixels
    sketchArea.innerHTML = '';

    // Draw new pixels
    for (let i = 0; i < gridSize * gridSize; i++) {
        const gridPixel = document.createElement('div');
        gridPixel.classList.add('sketchpad-pixel');
        gridPixel.style.width = `${GRID_WIDTH / gridSize}px`;
        gridPixel.style.height = `${GRID_HEIGHT / gridSize}px   `;
        sketchArea.appendChild(gridPixel);
    }
}

export default DrawSketchArea;
