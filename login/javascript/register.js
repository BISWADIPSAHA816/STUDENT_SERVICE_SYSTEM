const redirectlogin = document.getElementById("btn1");

redirectlogin.addEventListener("click", redirectloginPage);

function redirectloginPage() {
    var raw =
        '{\r\n    "biodata":{\r\n        "name":"Test User 1",\r\n        "roll_no":1905483,\r\n        "registration_no":1234567890,\r\n        "email": "1905483@kiit.ac.in"\r\n    },\r\n    "credentials":{\r\n        "email": "1905483@kiit.ac.in",\r\n        "passphrase":"cleartext-password"\r\n    }\r\n}';

    var requestOptions = {
        method: "POST",
        body: raw,
        redirect: "follow",
    };

    //ekhane fetch request hocche...so api call na hole catch ei dhukbe..hence alert ashbe
    fetch("localhost:8080/auth/signup", requestOptions)
        .then((response) => response.text())
        .then((result) => {
            alert("You have Succesfully Submit");
            window.location.href = "./login.html";
        })
        .catch((error) => {
            alert("Invalid Username");
            console.log("error", error);
            window.location.href = "./register.html";
        });
}