document.getElementById("convert-btn").addEventListener("click", function () {
  const numberInput = document.getElementById("number").value;
  const outputElement = document.getElementById("output");
  let romanNumeral = "";

  if (numberInput === "") {
    outputElement.textContent = "Please enter a valid number";
  } else {
    const number = parseInt(numberInput, 10);
    if (isNaN(number) || number < 1) {
      outputElement.textContent =
        "Please enter a number greater than or equal to 1";
    } else if (number >= 4000) {
      outputElement.textContent = "Please enter a number less than 4000";
    } else {
      romanNumeral = convertToRoman(number);
      outputElement.textContent = romanNumeral;
    }
  }
});

function convertToRoman(number) {
  const romanSymbols = [
    { value: 1000, symbol: "M" },
    { value: 900, symbol: "CM" },
    { value: 500, symbol: "D" },
    { value: 400, symbol: "CD" },
    { value: 100, symbol: "C" },
    { value: 90, symbol: "XC" },
    { value: 50, symbol: "L" },
    { value: 40, symbol: "XL" },
    { value: 10, symbol: "X" },
    { value: 9, symbol: "IX" },
    { value: 5, symbol: "V" },
    { value: 4, symbol: "IV" },
    { value: 1, symbol: "I" },
  ];

  let result = "";
  for (let i = 0; i < romanSymbols.length; i++) {
    while (number >= romanSymbols[i].value) {
      result += romanSymbols[i].symbol;
      number -= romanSymbols[i].value;
    }
  }

  return result;
}
