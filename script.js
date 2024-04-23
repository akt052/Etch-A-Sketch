const sketchPad = document.querySelector(".sketchpad");
const sizeOfGrid = document.querySelector("#grid-size");
const eraserElement = document.querySelector("#eraser");
const randomizeColorElement = document.querySelector("#randomize");
const selectedColorElement = document.querySelector("#selectedColor");
let randomizeColor = false;

eraserElement.addEventListener("click", () => {
    let value = parseInt(eraserElement.value);
    value = (value ? 0 : 1);
    eraserElement.value = value.toString();
})

randomizeColorElement.addEventListener("click", () => {
    let value = parseInt(randomizeColorElement.value);
    value = (value ? 0 : 1);
    randomizeColorElement.value = value.toString();
})

selectedColorElement.addEventListener("click", () => {
    let value = selectedColorElement.value;
    console.log(value);
})

for(let i = 0; i < 16; i++){
    for(let j = 0; j < 16; j++){
        const div = document.createElement("div");
        let height = 700 / 16;
        let width = 700 / 16;
        div.setAttribute("style", `background-color: white; height: ${height}px; width: ${width}px; margin: 0px; border: none;`);
        div.addEventListener('mouseover', () => {
            if(eraserElement.value == "0"){
                div.style.backgroundColor = "red";
            } else{
                div.style.backgroundColor = "white";
            }
        });
        sketchPad.appendChild(div);
    }
}

