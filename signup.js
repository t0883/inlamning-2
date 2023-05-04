function checkPassword(){
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;

    if(password != confirmPassword){
        alert("Passwords do NOT match!");
    }
}; 

document.addEventListener("DOMContentLoaded", () => {
    const userFrom = document.getElementById("userFrom");

    userFrom.addEventListener("submit", async (event) => {
        event.preventDefault();

        let firstName = document.getElementById("firstName");
        let lastName = document.getElementById("lastName");
        let email = document.getElementById("email");
        let userName = document.getElementById("username");
        let password = document.getElementById("password");
        let confirmPassword = document.getElementById("confirmPassword");

        let newUser = {
            Firstname: firstName.value,
            Lastname: lastName.value,
            Email: email.value,
            Username: userName.value,
            Password: password.value,
            ConfirmPassword: confirmPassword.value
        };

        let response = await fetch("testdata.json");
        let data = await response.json();
        data.push(newUser);
        
        await fetch('signup', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
          });

          userFrom.reset();
    })
})