const buttons = document.querySelectorAll(".btn");
const inputBtn = document.querySelector(".input-btn");
let rate = 0;
const getResult = document.querySelector(".get");
const resetBtn = document.querySelector(".reset");

const bill = document.querySelector(".bill");
const people = document.querySelector(".people");
resetBtn.addEventListener("click", () => {
  bill.value = "0";
  people.value = "0";
  document.querySelector(".tip-amount").innerText = "$0.00";
  document.querySelector(".total-amount").innerText = "$0.00";
  buttons.forEach((btn) => btn.classList.remove("active"));
  inputBtn.classList.remove("custom");
  inputBtn.value = "";
});

function calculateTip(bill, people, rate) {
  rate = parseFloat(rate) / 100;
  bill = parseFloat(bill);
  people = parseInt(people);
  const tipAmount = document.querySelector(".tip-amount");
  const totalAmount = document.querySelector(".total-amount");
  if (bill === "" || people === "") {
    tipAmount.innerText = "$0.00";
    totalAmount.innerText = "$0.00";
  } else {
    const tip = (bill * rate) / people;
    const total = bill / people + tip;
    tipAmount.innerText = `$${tip.toFixed(2)}`;
    totalAmount.innerText = `$${total.toFixed(2)}`;
  }
}

document.addEventListener("DOMContentLoaded", () => {
  document.querySelector(".tip-amount").innerText = "$0.00";
  document.querySelector(".total-amount").innerText = "$1.00";
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      inputBtn.value = ""; 
      buttons.forEach((btn) => btn.classList.remove("active")); // Reset all buttons
      button.classList.add("active"); // Set the clicked button as active
      rate = button.innerText; // Set the rate to the clicked button value
      inputBtn.value = "";
    });
    inputBtn.addEventListener("click", () => {
      buttons.forEach((btn) => btn.classList.remove("active"));
      inputBtn.classList.add("custom");
      inputBtn.classList.remove("active");
      rate = inputBtn.value;
    });
  });
});

getResult.addEventListener("click", () => {
  let billAmt = bill.value; // Assuming .bill is an input field
  let peopleCnt = people.value; // Assuming .people is an input field
  const rateElement = document.querySelector(".active");
  rate = rateElement ? rateElement.innerText : inputBtn.value;
  calculateTip(billAmt, peopleCnt, rate);
});
