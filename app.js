var btntranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var output = document.querySelector("#output-here");

var serverUrl = "https://api.funtranslations.com/translate/minion.json";

function getTransUrl(text) {
    return serverUrl + "?" + "text=" + text;
    
}

function errorHandler(err) {
     console.log("Error Occurred:" + err);
     alert("Something Went Wrong");   
}
btntranslate.addEventListener("click",function clickHandler() {
      //taking Inputs
    var inputText = txtInput.value;
    //calling Server
    fetch(getTransUrl(inputText))
    .then(response => response.json())
    .then(json => {
        var transText = json.contents.translated;
        output.innerHTML = transText;
    })

    .catch(errorHandler)

});