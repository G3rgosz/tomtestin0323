/*
* File: app.ts
* Author: Szivák Gergő
* Copyright: 2021, Szivák Gergő
* Group: Szoft II N
* Date: 2021-10-17
* Github: https://github.com/Gergosz-2000/tomtestin0323
* Licenc: GNU GPL
*/
var weight = document.querySelector("#weight");
var height = document.querySelector("#height");
var result = document.querySelector("#result");
var calcButton = document.querySelector("#calcButton");
function calcIndex(weight, height) {
    return weight / (Math.pow(height, 2));
}
calcButton.addEventListener('click', function (event) {
    result.value = String(calcIndex(+weight.value, +height.value).toFixed(0));
});
