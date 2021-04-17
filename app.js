var btntranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
console.log(txtInput);

function clickHandler() {
    console.log("clicked!!!");
    console.log("input", txtInput.value);
}

btntranslate.addEventListener("click", clickHandler)
