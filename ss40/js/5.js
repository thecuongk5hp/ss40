let name = document.getElementById("name");
let email = document.getElementById("email");
let password = document.getElementById("password");
let confirm = document.getElementById("confirm");
let submit = document.getElementById("submit");
let form = document.getElementById("register-form");
function checkPasswordMatch() {
    if (password.value !== confirm.value) {
        alert("Password and confirm password do not match!");
        return false;
    }
    return true;
}
function saveUser() {
    let users = JSON.parse(localStorage.getItem("users")) || [];
    let user = {
        name: name.value,
        email: email.value,
        password: password.value
    };
    users.push(user);
    localStorage.setItem("users", JSON.stringify(users));
    alert("Registration successful!");
}
form.addEventListener("submit", function(event) {
    event.preventDefault();
    if (checkPasswordMatch()) {
        saveUser();
    }
});
