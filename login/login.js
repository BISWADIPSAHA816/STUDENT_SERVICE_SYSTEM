let username = document.getElementById('username');
let password = document.getElementById('password');
let loginBtn = document.getElementById('login');
let forgot= document.getElementById('pass');

forgot.addEventListener('click',forgotSubmit);
loginBtn.addEventListener('click', loginSubmit);

function loginSubmit(e){
    // console.log(username.value);
    // console.log(password.value);
    e.preventDefault();

    if(username.value === "" || password.value === ""){
        alert("Enter value");
    }else{
        
        var raw = "{\r\n    \"username\":\"276@kiit.ac.in\",\r\n    \"password\":\"cleartext-password\"\r\n}";

var requestOptions = {
  method: 'POST',
  body: raw,
  redirect: 'follow'
};

fetch("localhost:8080/auth/login", requestOptions)
  .then(response => response.text())
  .then(result => {
    // Api call  ekhne success hocche
    window.location.href = './overview.html'
 })
  .catch(error => {
    console.log('error', error)
    //ekhne api call fail hocche
    window.location.href = './login.html'

  });
    }
}
function forgotSubmit(){
    if(username.value===""){
        alert("Please Provide Username");
    }
    else 
    {
        window.localStorage.setItem("email", username.value);
    }
}
