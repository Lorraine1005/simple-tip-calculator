const calculatorBtn = document.getElementById("calculator-sum-btn");
const billInputEl = document.getElementById("bill-input-el");
const tipInputEl = document.getElementById("tip-percentage-input-el");
const resetBtn = document.getElementById("reset-btn");
const errorEl = document.getElementById("error-el");
const tipSumEl = document.getElementById("tip-sum");
let totalSumDisplayEl = document.getElementById("calculator-sum-display-el");

calculatorBtn.addEventListener("click", function () {
  const bill = Number(billInputEl.value);
  const tip = Number(tipInputEl.value);
  if (isNaN(tip) || isNaN(bill)) {
    totalSumDisplayEl.textContent = "ERROR";
    errorEl.textContent =
      "Please enter the tip amount and bill amount only without any symbols";
  } else {
    const tipSum = bill * (tip / 100);
    tipSumEl.textContent = tipSum;
    const totalBillAmount = bill + tipSum;
    totalSumDisplayEl.textContent = totalBillAmount;
  }
});
resetBtn.addEventListener("click", function () {
  billInputEl.value = "";
  tipInputEl.value = "";
  totalSumDisplayEl.textContent = "";
  tipSumEl.textContent = "";
});
