"use strict";
window.onload = init;

function init(){
        const CalBtn = document.getElementById("calculateButton");
        CalBtn.onclick = mortgageCal;
}

function mortgageCal(){
        let principalField = document.getElementById("principalField");
        let principal = Number(principalField.value);
        
        let interestField = document.getElementById("interestField");
        let interest = Number(interestField.value)/100/12;

        let yearField = document.getElementById("yearField");
        let years = Number(yearField.value);

        // M = P [ i(1 + i)^n ] / [ (1 + i)^n – 1] - monthly payment
        let monthly = (principal * ( interest*Math.pow((1+interest), 12*years) ) / ( Math.pow( (1+interest), (12*years)) -1 ));

        let monthlyOutput = document.getElementById("monthlyOutput");
        monthlyOutput.value = monthly.toFixed(2);

        //Total Interest calculation
        var totalInterest = 0;
        var principalTotal = principal;
        var monthlyInterest = 0;

        for(let i = years*12; i>0 ;i--){
        monthlyInterest = (principalTotal * interest);
        totalInterest += monthlyInterest;
        principalTotal = (principalTotal - (monthly - monthlyInterest));
        }

        let totalInterestField = document.getElementById("totalInterest");
        totalInterestField.value = totalInterest.toFixed(2);
}