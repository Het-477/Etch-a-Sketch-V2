import FillPixels from "./FillPixels";

function getRandomRGBA(alpha = 1) {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

function FillRandomColor() {
    FillPixels(() => getRandomRGBA());
}

export default FillRandomColor;
