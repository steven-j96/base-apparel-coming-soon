var input = document.querySelector("#email");
var response = document.querySelector("#response");
var errorIcon = document.querySelector(".error-icon");
input.addEventListener("invalid", responseValue);

function responseValue(){
    input.classList.add("invalid");
    response.classList.add("visible");
    errorIcon.classList.add("visible");
}