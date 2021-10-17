/*
* File: app.ts
* Author: Szivák Gergő
* Copyright: 2021, Szivák Gergő
* Group: Szoft II N
* Date: 2021-10-17
* Github: https://github.com/Gergosz-2000/tomtestin0323
* Licenc: GNU GPL
*/
const weight = document.querySelector("#weight") as HTMLInputElement;
const height = document.querySelector("#height") as HTMLInputElement;
const result = document.querySelector("#result") as HTMLInputElement;
const calcButton = document.querySelector("#calcButton");

function calcIndex(weight: number, height: number):number{
    return weight/(Math.pow(height,2));
}

calcButton.addEventListener('click', event => {
    result.value = String(calcIndex(+weight.value,+height.value).toFixed(0));
})