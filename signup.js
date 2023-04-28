let firstName = document.getElementById("firstName").value;
let lastName = document.getElementById("lastName").value;
let email = document.getElementById("email").value;
let username = document.getElementById("username").value;
let password = document.getElementById("password").value;

let jsObject = {
    Firstname:firstName,
    Lastname:lastName,
    Email:email,
    Username:username,
    Password:password
};

let jsonObject = JSON.stringify(jsObject);

function collectInput(){
    console.log(jsObject);
    console.log(jsonObject);
}