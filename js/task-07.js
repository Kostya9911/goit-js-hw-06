const fontSizeControl = document.querySelector("input#font-size-control");

fontSizeControl.addEventListener("input", () => {
  const text = document.querySelector("span#text");
  text.style.fontSize = `${fontSizeControl.value}px`;
});
