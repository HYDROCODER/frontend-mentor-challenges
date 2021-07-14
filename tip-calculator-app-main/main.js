const tipElem = document.querySelector(".tip-number"); //o/p span for tip
const totalElem = document.querySelector(".total-number"); //o/p span for total amount
const errorTxt = document.querySelector(".error-txt"); //o/p span for error text
const inputs = Array.from(document.querySelectorAll("input")); //All the inputs as a whole

//To store the inputs

let inputObject = {
  billAmount: (0).toFixed(2),
  tipPercent: 0,
  numPersons: 0,
};
//Set the output spans back to 0.00
function initial() {
  tipElem.innerHTML = "0.00";
  totalElem.innerHTML = "0.00";
  console.log("Initial function done");
}

//Adding blur listener to listen to changes for the inputs
inputs.forEach((input) => {
  input.addEventListener("blur", (e) => {
    // console.log(`name : ${e.target.name} , value: ${e.target.value}`);
    store(e.target.name, e.target.value); //to store the input value on blur
  });
});

//Storing the inputs in the inputObject and calling calculate() to compute the tip
function store(name, value) {
  document.querySelector("[type=reset]").disabled = false; //enable the reset again

  switch (name) {
    case "billAmount":
      inputObject.billAmount = value !== "" ? value : 0.0;
      break;
    case "tipPercent":
      inputObject.tipPercent = value !== "" ? value : 0.0;
      break;
    case "numPeople":
      inputObject.numPersons = value !== "" ? value : 0;
      break;
    case "ctipPercent":
      inputObject.tipPercent = value !== "" ? value : 0;
      resetRadio();
      break;
    default:
      console.log("No value entered");
      break;
  }
  // console.log(inputObject);
  console.log("Store function done");
  calculate(...Object.values(inputObject)); //spreading the values as an array
}
// Calculator function
function calculate(billAmount, tipPercent, numPersons) {
  //If it is 0:
  if (numPersons === "0" || numPersons === 0) {
    // console.log(errorTxt.classList);
    errorTxt.classList.remove("hide");
    // console.log(errorTxt.classList);
    return;
  }
  // else calculate and print the tip amount and total amount per person
  else {
    errorTxt.classList.add("hide");
    // console.log(billAmount, tipPercent, numPersons);
    let temp = (tipPercent * 1e-2 * billAmount) / numPersons;
    // console.log(temp);
    let totalTip = temp.toFixed(2);
    // console.log(totalTip);
    let totalAmount = temp + billAmount / numPersons;
    // console.log(totalAmount);
    tipElem.innerHTML = totalTip !== "NaN" ? totalTip : "0.00";
    totalElem.innerHTML =
      totalAmount.toFixed(2) !== "NaN" ? totalAmount.toFixed(2) : "0.00";
    console.log("Calculate function done");
  }
}
// To reset the radio button if the custom input is used
function resetRadio() {
  let radios = document.querySelectorAll("[type=radio]");
  radios.forEach((radio) => {
    radio.checked = false;
  });
}
// Script for the reset button
function resetForm() {
  document.getElementById("myForm").reset();
  document.querySelector("[type=reset]").disabled = true;
  inputObject = {
    billAmount: (0).toFixed(2),
    tipPercent: 0,
    numPersons: 0,
  };
  initial(); //Set the output spans back to 0.00
  errorTxt.classList.add("hide");
  console.log("Reset form function done");
}
