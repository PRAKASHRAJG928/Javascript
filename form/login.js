let form = document.getElementById("form")
form.addEventListener("submit", (e) => {
    e.preventDefault();
    let lemail = document.getElementById("email").value
    let lpassword = document.getElementById("password").value;
    console.log(lemail, lpassword)

    let useremail = localStorage.getItem("useremail");
    let password = localStorage.getItem("password");
    console.log(useremail, password)
    if (lemail == "" || lpassword == "" ) {
        alert("please fill the details!!");
    } else if (lemail != useremail || lpassword != password) {
        alert("please fill correct details!!!")
    } else {
        alert("login successfully!")
        window.open("./home.html")
        window.location.reload()
    }
})