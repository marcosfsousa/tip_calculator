
const billAmount = document.querySelector('#input-bill');
const customTip = document.querySelector('#input-custom');
const numberPeople = document.querySelector('#input-people');
const formBox = document.getElementById('form-box');
const tipContainer = document.querySelector ('.tip-container');
const tipResult = document.querySelector ('#tip-result');
const tipTotal = document.querySelector ('#tip-total');
const errorSpan = document.querySelector("label ~ span");
const errorPeople = document.querySelector("span:nth-child(8)")

tipContainer.addEventListener("click", handleEvent, false);

function handleEvent(event) {
    
    if (event.target !== event.currentTarget) {
        let clickedEvent = Math.abs(event.target.value);
        
        if (billAmount.value === '' && numberPeople.value === '') {
            addTwoError();
        } else if (billAmount.value === '') {
            addBillError();
        } else if (numberPeople.value === '') {
            addPeopleError();
        } else if (clickedEvent >= 1) {
            let customEvent = Math.abs(clickedEvent) / 100;
            calculateTip(customEvent);
           
        } else calculateTip(clickedEvent); 
        
    }

    event.stopPropagation();
}

function calculateTip (arg1) {
    console.log (billAmount.value);
    console.log(arg1);
    console.log(numberPeople.value);

    let tipAmount = billAmount.value * arg1 / numberPeople.value; 
    tipResult.textContent = tipAmount.toFixed(2);

    let personTotal = billAmount.value / numberPeople.value + tipAmount;
    tipTotal.textContent = personTotal.toFixed(2);


}

function addBillError() {
        errorSpan.classList.remove("hidden");
        errorSpan.classList.add("error-msg");
}

function addPeopleError() {
        errorPeople.classList.remove("hidden");
        errorPeople.classList.add("error-msg");
}

function addTwoError() {
    errorSpan.classList.remove("hidden");
    errorSpan.classList.add("error-msg");
    errorPeople.classList.remove("hidden");
    errorPeople.classList.add("error-msg");
}





function formReset() {
    formBox.reset();
    billAmount.value = '';
    customTip.value = '';
    numberPeople.value = '';
    errorSpan.classList.add("hidden");
    errorPeople.classList.add("hidden");
}



//  To DO 

//     Listen to bill value ; Set invalid if Bill Value = 0

//     Listen for 'Enter' presses for Custom Tip (optional UX) 

//     Listen to Number of People ; Set invalid if Number of People = 0
    
//     Sanitize inputs to positive integer values ;
    
    
//     Math = bill amount x (tip%) / number of People ;



