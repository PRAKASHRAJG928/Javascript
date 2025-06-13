let body = document.querySelector("body");


let section = document.createElement("section");

let left_container = document.createElement("div");
let facebook = document.createElement("h1");
let facebook_disc = document.createElement("p");

let right_container = document.createElement("div");
let form = document.createElement("form");
let email = document.createElement("input");
let password = document.createElement("input");
let login_button = document.createElement("button");
login_button.innerText = "Log in";
let forgot_pass = document.createElement("p");
forgot_pass.innerText = "Forgotten password?";
let hr = document.createElement("hr");
let new_acc = document.createElement("button");
new_acc.innerText = "Create new account";

let p_below_form = document.createElement("p");

section.className = "container";

right_container.className = "right_container";
email.className = "email";
email.placeholder = "Email address or phone number";
password.className = "password";
password.placeholder = "Password";
login_button.className = "login";
forgot_pass.className = "forgot_pass";

hr.id = "hr";
new_acc.className = "new_acc";

p_below_form.className = "p_below_form";
p_below_form.innerHTML =
  "<span>Create a Page</span> for a celebrity, brand or business.";


section.append(right_container);
form.append(email);
form.append(password);
form.append(login_button);
form.append(forgot_pass);
form.append(hr);
form.append(new_acc);
right_container.append(form);
right_container.append(p_below_form);

body.append(section);
