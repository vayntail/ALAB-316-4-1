
const form = document.getElementById('registration');

const usernameEl = form.elements['username'];
const emailEl = form.elements['email'];
const passwordEl = form.elements['password'];

form.addEventListener('submit', validate);

function validate(event) {
    if (!validateUsername()) {
        event.returnValue = false;
        return false;
    }
    else if (!validateEmail()) {
        event.returnValue = false;
        return false;
    }
    else if (!validatePassword()) {
        event.returnValue = false;
        return false;
    }

    // store in localStorage
    localStorage.setItem("users", []);
    return true;
}

function validateUsername(){
    const regex = /[^A-Za-z0-9]/;
    let username = usernameEl.value;
    let isUnique = false;

    for (let i=0; i < username.length; i++) {
        if (username[i] != username[0]) isUnique = true;
    }

    if (username.length == 0) {
        alert("Your username cannot be blank.");
        usernameEl.focus();
        return false;
    }
    else if (username.length <= 4) {
        alert("Your username must be at least 4 characters long.");
        usernameEl.focus();
        return false;
    }
    else if (!isUnique) {
        alert("Your username must have at least two unique characters.");
        usernameEl.focus();
        return false;
    }
    else if (regex.test(username)){
        alert("Your username cannot contain any special characters or whitespace.");
        usernameEl.focus();
        return false;
    }
    else {
        return true;
    }
}

function validateEmail() {
    let email = emailEl.value;
    console.log(email)
    if (!email.includes("@") && !email.includes(".")) {
        alert(`Please enter a valid email address.`);
        emailEl.focus();
        return false;
    }
    else if (email.includes("@example.com")){
        alert(`Your email must not be from the domain "example.com."`);
        emailEl.focus();
        return false;
    }
    else {
        return true;
    }
}

function validatePassword() {
    let password = passwordEl.value;
    if (password.length <= 12) {
        alert("Your username must be at least 12 characters long.");
        passwordEl.focus();
        return false;
    }
    else if (password.toLowerCase().includes("password")) {
        alert(`Your password cannot contain the word "password".`);
        passwordEl.focus();
        return false;
    }
    else if (password.includes(usernameEl)) {
        alert("Your password cannot contain the username.");
        passwordEl.focus();
        return false;
    }
    else {
        return true;
    }
}

