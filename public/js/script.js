function validation() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var tel = document.getElementById("tel").value;
    var error_message = document.getElementById("error_message");
    var text;
    error_message.style.backgroundColor = "#ea4436";
    if (name.length < 5) {
        text = " Porfavor introduce un nombre valido";
        error_message.style.padding = "10px";
        error_message.innerHTML = text;
    } else if (email.indexOf("@") == -1 || email.length < 6) {
        text = " Porfavor introduce un correo valido";
        error_message.style.padding = "10px";
        error_message.innerHTML = text;
    } else if (tel.length > 13 || tel.length < 10) {
        text = " Porfavor introduce un numero telefonico valido";
        error_message.style.padding = "10px";
        error_message.innerHTML = text;
    } else {
        error_message.style.padding = "10px";
        error_message.style.backgroundColor = "rgba(95, 158, 160, 0.9)";
        error_message.innerHTML =
            "FELICIDADES RECIBIRAS UNA LLAMADA PARA AGENDAR TU CITA";
        return true;
    }
    return false;
}
