const changeColor = (color) => {
  document.body.style.backgroundColor = color;
};

// const red = document.querySelector('.red');
// red.addEventListener('click', () => {
//     document.body.style.backgroundColor = 'red';
// })

const rgbToHex = function (rgb) {
  let hex = Number(rgb).toString(16);
  if (hex.length < 2) {
    hex = "0" + hex;
  }
  return hex;
};

const fullColorHex = function (r, g, b) {
  const red = rgbToHex(r);
  const green = rgbToHex(g);
  const blue = rgbToHex(b);
  return red + green + blue;
};

const changeToRandomColor = () => {
  const rColor = fullColorHex(
    getRandomColorValue(),
    getRandomColorValue(),
    getRandomColorValue()
  );
  document.body.style.backgroundColor = "#" + rColor;
};

const getRandomColorValue = () => {
  return Math.floor(Math.random() * 256);
};

const arrayLength = colors.length;
const parent = document.querySelector(".container");

for (let c = 0; c < arrayLength; c++) {
  const button = document.createElement("button");

  // button.innerText = colors[c].label;
  button.classList.add(colors[c].name, "button-prop");
  button.addEventListener("click", () => changeColor(colors[c].colorValue));
  parent.append(button);
}

const addNewColorButton = () => {
  const newButton = document.createElement("button");
  newButton.innerText = " ";
  newButton.classList.add("button-prop");
  const newColor = document.body.style.backgroundColor;
  newButton.style.backgroundColor = newColor;
  newButton.addEventListener("click", () => changeColor(newColor));
  parent.append(newButton);
  console.log(newButton);
};

// const addNewColorButton = () => {
//     const newButton =
//     document.body.style.backgroundColor =
// }
