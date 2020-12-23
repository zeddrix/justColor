import React from 'react'

const Arbitrary = () => {
  return (
    <div>
      <button className="arbitrary-btn" onClick={changeToArbitraryColor}></button>
    </div>
  )
}

const rgbToHex = (rgb) => {
  let hex = Number(rgb).toString(16);
  if (hex.length < 2) {
    hex = "0" + hex;
  }
  return hex;
};

const fullColorHex = (r, g, b) => {
  const red = rgbToHex(r);
  const green = rgbToHex(g);
  const blue = rgbToHex(b);
  return red + green + blue;
};

const getArbitraryColorValue = () => {
  return Math.floor(Math.random() * 256);
};

const changeToArbitraryColor = () => {
  const rColor = fullColorHex(
    getArbitraryColorValue(),
    getArbitraryColorValue(),
    getArbitraryColorValue()
  );
  document.body.style.backgroundColor = "#" + rColor;
  // enableAppendBtn();
};

export default Arbitrary;
