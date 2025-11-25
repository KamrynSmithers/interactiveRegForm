let form = document.getElementById("registrationForm")
let formGroup = document.getElementById("form-group")
let username = document.getElementById("username")
let passwordField = document.getElementById("password")
let confirmPw = document.getElementById("confirmPassword")
let emailField = document.getElementById("email")

let userError = document.getElementById("usernameError")
let badEmail = document.getElementById("emailError")
let badPw = document.getElementById("passwordError")
let confirmPasswordError = document.getElementById("confirmPasswordError")

localStorage.setItem('username', "Kamryn123")
let user = localStorage.getItem("username")
console.log(user)
username.value = user


function allowedUser () {
    let usernameInput = username.value

    if (usernameInput === "") {
        userError.textContent = "Please Enter Username"
    return false  }
    userError.textContent = ""
    return true
}

function allowedEmail () {
    let emailInput = emailField.value
    
    if (emailInput === "") {
            badEmail.textContent = "Enter Email"
return false  }  
    badEmail.textContent = ""
    return true
}

function allowedPw () {
    let passwordInput = passwordField.value
    if (passwordInput === "") {
    badPw.textContent = "Enter Password"
return false  } 
    badPw.textContent = ""
    return true
}

function samePw () {
    let password = passwordField.value
    let confirmPassword = confirmPassword.value

    if (confirmPassword === "") {
        confirmPassword
    }
}


function goPw() {
    let password = passwordField.value;
    let confirmPassword = confirmPw.value;

    if (confirmPassword === '') {
    confirmPasswordError.textContent = "Confirm your password";
        return false;
} else if (password !== confirmPassword) {
    confirmPasswordError.textContent = "Your passwords don't match";
    return false;
    } else {
    confirmPasswordError.textContent = "";
    return true;
}}



form.addEventListener ("submit", (event) => {
    event.preventDefault ()
    if (allowedEmail() && allowedPw() && allowedUser() && goPw()) {
    alert("Submitted")
}
})




