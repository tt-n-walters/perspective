function map(value, in_min, in_max, out_min, out_max) {
    return (value / (in_max - in_min)) * (out_max - out_min) + out_min;
}

function rotate(event) {
    const mouseX = event.clientX - event.target.offsetLeft;
    const mouseY = event.clientY - event.target.offsetTop;
    const rotationX = map(mouseY, 0, 500, -5, 5);
    const rotationY = map(mouseX, 0, 500, 5, -5);
    const rotateStyle = `perspective(1000px) rotateX(${rotationX}deg) rotateY(${rotationY}deg)`;
    box.style.transform = rotateStyle;
}

let box;
window.addEventListener("DOMContentLoaded", () => {
    box = document.getElementById("box");
    box.addEventListener("mousemove", rotate);
});
