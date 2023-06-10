const dot = document.querySelector(".dot");
const box = document.querySelector(".box");

let isdown = false;
dot.addEventListener("mousedown", () => {
    isdown = true;
});

window.addEventListener("mouseup", () => {
    isdown = false;
});

box.addEventListener("mousemove", (e) => {
    console.log(box.getBoundingClientRect().width);
    console.log(e.offsetX);
    if (isdown) {
        if (e.offsetX >= box.getBoundingClientRect().width + 40) {
            console.log("kdsjf");
            return;
        } else {
            console.log("dato");
            dot.style.top = e.offsetY + "px";
            dot.style.left = e.offsetX + "px";
        }
    }
});
