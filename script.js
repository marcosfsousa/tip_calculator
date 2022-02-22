const billAmount = document.querySelector("#input-bill");
const customTip = document.querySelector("#input-custom");
const numberPeople = document.querySelector("#input-people");
const formBox = document.getElementById("form-box");
const tipContainer = document.querySelector(".tip-container");
const tipResult = document.querySelector("#tip-result");
const tipTotal = document.querySelector("#tip-total");
const totalWithTip = document.querySelector("#total-plus-tip");
const errorSpan = document.querySelector("label ~ span");
const errorPeople = document.querySelector("label.label-people ~ span");
const errorCustom = document.querySelector(".error-custom");

billAmount.addEventListener("change", checkInput, false);

function checkInput() {
  if (billAmount.value > 0) {
    errorSpan.classList.add("hidden");
    billAmount.classList.remove("error");
  }
}

numberPeople.addEventListener("change", checkPeopleInput, false);

function checkPeopleInput() {
  if (numberPeople.value > 0) {
    errorPeople.classList.add("hidden");
    numberPeople.classList.remove("error");
  }
}

tipContainer.addEventListener("click", handleEvent, false);

function handleEvent(event) {
  if (event.target !== event.currentTarget) {
    let clickedEvent = event.target.value;

    if (billAmount.value === "" && numberPeople.value === "") {
      addTwoError();
    } else if (billAmount.value === "" && billAmount.value !== 0) {
      addBillError();
    } else if (numberPeople.value === "" && billAmount.value !== 0) {
      addPeopleError();
    } else calculateTip(clickedEvent);
    customTip.value = "";
    // } else if (clickedEvent >= 1) {
    //   let customEvent = clickedEvent / 100;
    //   calculateTip(customEvent);
    // } else if (clickedEvent < 1) {
    //   customTip.value = "";
    //   Math.abs(clickedEvent);
    //   calculateTip(clickedEvent);
    // }
  }
  event.stopPropagation();
}

customTip.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    if (
      billAmount.value === "" &&
      numberPeople.value === "" &&
      customTip.value === ""
    ) {
      addThreeError();
    } else if (billAmount.value === "" && numberPeople.value === "") {
      addTwoError();
    } else if (billAmount.value === "" && billAmount.value !== 0) {
      addBillError();
    } else if (numberPeople.value === "" && billAmount.value !== 0) {
      addPeopleError();
    } else if (customTip.value === "") {
      addCustomError();
    } else if (customTip.value >= 1) {
      let customEvent = customTip.value / 100;
      calculateTip(customEvent);
    } else calculateTip(customTip.value);
  }
});

function calculateTip(arg1) {
  console.log(billAmount.value);
  console.log(arg1);
  console.log(numberPeople.value);

  let tipAmount = (billAmount.value * arg1) / numberPeople.value;
  tipResult.textContent = "$" + Math.abs(tipAmount).toFixed(2);

  let personTotal = billAmount.value / numberPeople.value + tipAmount;
  tipTotal.textContent = "$" + Math.abs(personTotal).toFixed(2);

  let totalTip = personTotal * numberPeople.value;
  totalWithTip.textContent = "$" + Math.abs(totalTip).toFixed(2);

  removeError();
}

function removeError() {
  errorSpan.classList.add("hidden");
  errorPeople.classList.add("hidden");
  billAmount.classList.remove("error");
  numberPeople.classList.remove("error");
  errorCustom.classList.add("hidden");
  errorCustom.classList.remove("custom-error-msg");
  customTip.classList.add("input-border");
  customTip.classList.remove("error");
}

function addBillError() {
  errorSpan.classList.remove("hidden");
  errorSpan.classList.add("error-msg");
  billAmount.classList.add("error");
  customTip.value = "";
}

function addPeopleError() {
  errorPeople.classList.remove("hidden");
  errorPeople.classList.add("error-msg");
  numberPeople.classList.add("error");
  customTip.value = "";
}

function addTwoError() {
  errorSpan.classList.remove("hidden");
  errorSpan.classList.add("error-msg");
  billAmount.classList.add("error");
  errorPeople.classList.remove("hidden");
  errorPeople.classList.add("error-msg");
  numberPeople.classList.add("error");
  customTip.value = "";
}

function addCustomError() {
  errorSpan.classList.remove("hidden");
  customTip.classList.remove("input-border");
  errorCustom.classList.add("custom-error-msg");
  customTip.classList.add("error");
}

function addThreeError() {
  errorCustom.classList.remove("hidden");
  errorCustom.classList.add("custom-error-msg");
  customTip.classList.remove("input-border");
  customTip.classList.add("error");
  errorSpan.classList.remove("hidden");
  errorSpan.classList.add("error-msg");
  billAmount.classList.add("error");
  errorPeople.classList.remove("hidden");
  errorPeople.classList.add("error-msg");
  numberPeople.classList.add("error");
  customTip.value = "";
}

function formReset() {
  formBox.reset();
  billAmount.value = "";
  customTip.value = "";
  numberPeople.value = "";
  tipResult.textContent = "$0.00";
  tipTotal.textContent = "$0.00";
  totalWithTip.textContent = "$0.00";
  errorSpan.classList.add("hidden");
  errorPeople.classList.add("hidden");
  errorCustom.classList.add("hidden");
  errorCustom.classList.remove("custom-error-msg");
  customTip.classList.add("input-border");
  customTip.classList.remove("error");
  numberPeople.classList.remove("error");
  billAmount.classList.remove("error");
}

//  To DO

//     Listen to bill value ; Set invalid if Bill Value = 0

//     Listen for 'Enter' presses for Custom Tip (optional UX)

//     Listen to Number of People ; Set invalid if Number of People = 0

//     Sanitize inputs to positive integer values ;

//     Math = bill amount x (tip%) / number of People ;
