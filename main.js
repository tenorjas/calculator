let left = "";
let right = "";
let op = "";
let screenDisplay = document.getElementById("display");
let typeNum = document.querySelectorAll(".number");
let typeOperator = document.querySelectorAll(".operator");
let calculate = document.querySelector("#equals");
let cls = document.querySelector("#clear");

function clearScreen() {
  screenDisplay.value = "";
  left = "";
  right = "";
  op = "";
}

function clickOperator(event) {
  op = event.target.id;
}

function clickDigit(event) {
  if (op === "") {
    left += event.target.id;
    screenDisplay.value = left;
  } else {
    right += event.target.id;
    screenDisplay.value = right;
  }
}

function clickEquals(event) {
  switch (op) {
    case "plus":
      screenDisplay.value = Number(left) + Number(right);
      break;
    case "minus":
      screenDisplay.value = Number(left) - Number(right);
      break;
    case "multiply":
      screenDisplay.value = Number(left) * Number(right);
      break;
    case "divide":
      screenDisplay.value = Number(left) / Number(right);
      break;
    default:
  }
}

typeNum.forEach(button => {
  button.addEventListener("click", clickDigit);
});

typeOperator.forEach(button => {
  button.addEventListener("click", clickOperator);
});

calculate.addEventListener("click", clickEquals);

cls.addEventListener("click", clearScreen);
