let email = document.getElementById("email");
let password = document.getElementById("password");
let submit = document.getElementById("submit");
let form = document.getElementById("login-form");
function checkLogin() {
    let users = JSON.parse(localStorage.getItem("users")) || [];
    let emailInput = email.value;
    let passwordInput = password.value;
    let loggedIn = false;
    for (let user of users) {
        if (user.email === emailInput && user.password === passwordInput) {
            loggedIn = true;
            sessionStorage.setItem("user", JSON.stringify(user));
            break;
        }
    }
    if (loggedIn) {
        alert("Đăng nhập thành công!");
    } else {
        alert("Thông tin không chính xác!");
    }
}
form.addEventListener("submit", function(event) {
    event.preventDefault();
    checkLogin();
});
