"use strict";

window.onload = init;

function init(){
    let calBtn = document.getElementById("calculateButton");
    calBtn.onclick = presentAnnuity;
}
// Present value Annuity
function presentAnnuity(){
    let monthlyField = document.getElementById("monthlyField");
    let monthlyPayout = Number(monthlyField.value);
    console.log("monthly " + monthlyPayout);

    let interestField = document.getElementById("interestField");
    let interest = Number(interestField.value)/100/ 12; //(we take our interest rate and because we compound monthly our interest rate should reflect that)
    console.log("interest " + interest);


    let yearField = document.getElementById("yearField");
    let years = Number(yearField.value)* 12; //(our years compounded monthly);
    console.log("years " + years);

    const annuity = monthlyPayout * ((1/interest) - (1/(interest*Math.pow(1+interest, years))));
    let presentAnnuityField = document.getElementById("annuityField");
    presentAnnuityField.value = annuity.toFixed(2);
}