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
