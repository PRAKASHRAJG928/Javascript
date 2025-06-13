let form = document.getElementById("form")
form.addEventListener("submit", (e) => {
    e.preventDefault();
    let username = document.getElementById("username").value
    let password = document.getElementById("password").value;

    if (username == "" || password == "") {
        alert("please fill the details!!");
    }
    else {
        console.log(username, password)
        window.location.reload()
    }
})
// ==========================
let showpassword = document.getElementById("showpassword");
let password = document.getElementById("password")
let emoji = document.getElementById("emoji")

showpassword.addEventListener("click", (e) => {
    e.preventDefault();
    if (password.value !== "") {
        if (password.type == "text") {
            password.type = "password";
            showpassword.innerHTML = "show Password";
            emoji.innerHTML = "🐵"
        }

        else {
            password.type = "text";
            showpassword.innerHTML = "hide Password";
            emoji.innerHTML = "🙈"

        }
    } else {
        alert("please enter your password")
    }
})

// ==============================================

let username = document.getElementById("username");
let submit = document.getElementById("submit");
let error1 = document.getElementById("error1");

username.addEventListener("keyup", (e) => {
    e.preventDefault()
    let validation = username.value.length < 8;
    if (validation) {
        error1.innerHTML = "*please enter the maximum 8 character"
        username.classList.add("warning")
        username.classList.remove("success");
        submit.disabled = true;
        submit.classList.add("disabled")

    } else {
        error1.innerHTML = " "
        username.classList.add("success")
        username.classList.remove("warning");
        submit.disabled = false;
        submit.classList.remove("disabled")
    }
})


let error2 = document.getElementById("error2");

password.addEventListener("keyup", (e) => {
    e.preventDefault()
    let validation = password.value.length < 8;
    if (validation) {
        error2.innerHTML = "*please enter the maximum 8 character"
        password.classList.add("warning")
        password.classList.remove("success");
        submit.disabled = true;
        submit.classList.add("disabled")

    } else {
        error2.innerHTML = " "
        password.classList.add("success")
        password.classList.remove("warning");
        submit.disabled = false;
        submit.classList.remove("disabled")
    }
})

