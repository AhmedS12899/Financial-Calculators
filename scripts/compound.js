// Present value Annuity

// const rate = 2.5/100;
// const year= 20;
// let n = year * 12; //(our years compounded monthly);
// let i = rate /12; //(2.5 is our interest rate and because we compound monthly our interest rate should reflect that)
// const PMT = 3000;
// const annuity = PMT * ((1/i) - (1/(i*Math.pow(1+i, n))));
// console.log(annuity.toFixed(2));
"use strict";
window.onload = init;

function init(){
    let calculateBtn = document.getElementById("calculateButton");
    calculateBtn.onclick = compoundInterestDaily;
}

function compoundInterestDaily(){
        let depositField = document.getElementById("depositField");
        let interestField = document.getElementById("interestField");
        let yearField = document.getElementById("yearField");

        let deposit = Number(depositField.value);
        let interest = Number(interestField.value) / 100 / 365;
        let years = Number(yearField.value) * 365;
        //compound Interest formula
        let compoundDaily = deposit*Math.pow((1 + interest),years);

        let compoundDailyField = document.getElementById("compoundDailyField");
        compoundDailyField.value = compoundDaily.toFixed(2);

        let outputInterestField = document.getElementById("outputInterestField");
        outputInterestField.value = (compoundDaily - deposit).toFixed(2);
}