const emailInput = document.getElementById("emailInput");

window.addEventListener("load", afterLoadingWindow);

function afterLoadingWindow() {
    if (window.localStorage.getItem("email") != null) {
        emailInput.value = window.localStorage.getItem("email");
    }
}