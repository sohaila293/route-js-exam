let username = document.getElementsByTagName("input")[0];
let email = document.getElementsByTagName("input")[1];
let phone = document.getElementsByTagName("input")[2];
let age = document.getElementsByTagName("input")[3];
let password = document.getElementsByTagName("input")[4];
let repassword = document.getElementsByTagName("input")[5];
let submit = document.getElementsByTagName("input")[6];

const usernamePattern = /^[a-zA-Z0-9_]{3,15}$/; 
const agePattern = /^(1[89]|[2-9]\d)$/; 
const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
const phonePattern = /^\d{10}$/; 

submit.onclick = function(e) {
    e.preventDefault(); 
    if (
        username.value !== "" &&
        email.value !== "" &&
        phone.value !== "" &&
        age.value !== "" &&
        password.value !== "" &&
        repassword.value !== ""
    ) {

        if (
            usernamePattern.test(username.value) &&
            agePattern.test(age.value) &&
            passwordPattern.test(password.value) &&
            emailPattern.test(email.value) &&
            phonePattern.test(phone.value) &&
            password.value === repassword.value
        ) {
            window.location.href = "index.html"; 
            alert("Pleae enter correct data");
        }
    } else {
        alert("Please enter the required data");
    }
};


$(document).ready(function(){
    $(".open-close-icon").click(function(){
        $(".nav-item").slideToggle(); 
    });
});