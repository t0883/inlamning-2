function checkPassword(){
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;

    if(password != confirmPassword){
        alert("Passwords do NOT match!");
    }
}
