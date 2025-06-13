let form = document.getElementById("form")

form.addEventListener("submit", (e) => {
    e.preventDefault()

    let name = document.getElementById("name").value;
    let lastname = document.getElementById("lastname").value;
    let mob = document.getElementById("mob").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let cpwd = document.getElementById("cpwd").value;

    if (name == "" || lastname == "" || mob == "" || email == "" || password == "" || cpwd == "") {
        alert("please fill the details")
    } else if (password != cpwd) {
        alert("please fill the correct password")
    }
    else {
        alert("registration successfully");
        localStorage.setItem("useremail", email)
        localStorage.setItem("password", password)

        console.log(name, lastname, mob, email, password, cpwd)
        window.open('./login.html')
        window.location.reload()
    }
})