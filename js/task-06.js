const textInput = document.querySelector("input");

textInput.addEventListener("blur", () => {
  if (
    // Переробка. Привід до числа для строгої рівності
    textInput.value.length === Number(textInput.getAttribute("data-length"))
  ) {
    textInput.classList.add("valid");
    textInput.classList.remove("invalid");
  } else {
    textInput.classList.add("invalid");
    textInput.classList.remove("valid");
  }
});
