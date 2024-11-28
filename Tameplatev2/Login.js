function pozdravi(event) {
    event.preventDefault(); 
    var ime = document.getElementById("username").value; 
    if (ime) {

        document.getElementById("poruka").innerHTML = "Dobrodošli, " + ime;
    } else {

        document.getElementById("poruka").innerHTML = "Please enter a username.";
    }
}

