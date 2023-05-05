async function getDataFromJSON() {
    let jsonPath = await fetch ("testdata.json");

    let jsonObject = await jsonPath.json();
    let output = "<table><tr><th>Firstname</th><th>Lastname</th><th>Username</th><th>Email</th><th>Password</th><th>Confirmed password</th></tr>";
    
    for (var i=0; i<jsonObject.length; i++) {

        var counter = jsonObject[i];
        output += `<tr>`;
        output += `<td>${counter.Firstname}</td>`;
        output += `<td>${counter.Lastname}</td>`;
        output += `<td>${counter.Username}</td>`;
        output += `<td>${counter.Email}</td>`;
        output += `<td>${counter.Password}</td>`;
        output += `<td>${counter.ConfirmPassword}</td>`;
        output += `</tr>`;
    }
    output += "</tabel>"


    document.getElementById("output").innerHTML = output;
};
