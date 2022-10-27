"use strict";

window.onload = init;

function init(){
    document.getElementById("calculateButton").onclick = fahrenheitToCelsius;
    document.getElementById("calculateButton2").onclick =celsiusToFahrenheit;

}

function fahrenheitToCelsius(){
    document.getElementById("celsiusOutput").value = ((Number(document.getElementById("fahrenheitField").value) - 32) *5/9).toFixed(2);

}

function celsiusToFahrenheit(){
    document.getElementById("fahrenheitOutput").value = ((Number(document.getElementById("celsiusField").value) * 9/5) + 32).toFixed(2);
}