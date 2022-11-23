const emailInput = document.getElementById("emailInput");
const loginredirect=document.getElementById("submit_form");
window.addEventListener("load", afterLoadingWindow);
window.addEventListener("click",loginredirectPage);

function afterLoadingWindow() {
    if (window.localStorage.getItem("email") != null) {
        emailInput.value = window.localStorage.getItem("email");
    }
}
function loginredirectPage(){
    var myHeaders = new Headers();
myHeaders.append("verification_code", "L64d2Q");

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  redirect: 'follow'
};

fetch("localhost:8080/auth/verify", requestOptions)
  .then(response => response.text())
  .then(result => {
    alert("You have successfully Change the Password");
    window.location.href = "./login.html";
    
  })
  .catch(error =>{
    console.log('error', error);
    window.location.href = "./forget.html";
  });
}