const inputElement = document.getElementById("input");
const svgElement = document.getElementById("barcode");
const formElement = document.getElementById("form");

const handleForm = (event) => {
  event.preventDefault();

  JsBarcode(svgElement, inputElement.value, {
    format: "CODE128",
    lineColor: "#000",
    displayValue: true,
    fontSize: 30,
  });

  inputElement.value = "";
};

formElement.addEventListener("submit", handleForm);

inputElement.focus();
