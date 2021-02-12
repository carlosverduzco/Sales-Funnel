function validation() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var tel = document.getElementById("tel").value;
  var error_message = document.getElementById("error_message");
  var text;
  if (name.length < 5) {
    text = " Porfavor introduce un nombre valido";
    error_message.style.padding = "10px";
    error_message.innerHTML = text;
  } else if (email.indexOf("@") == -1 || email.length < 6) {
    text = " Porfavor introduce un correo valido";
    error_message.style.padding = "10px";
    error_message.innerHTML = text;
  } else if (tel.length != 10) {
    if (tel.indexOf("+52") == -1 && tel != 13) {
      text = " Porfavor introduce un nombre valido";
      error_message.style.padding = "10px";
      error_message.innerHTML = text;
    }
  } else {
    error_message.style.padding = "0px";
    error_message.innerHTML = "";
    alert("FELICIDADES RECIBIRAS UNA LLAMADA PARA AGENDAR TU CITA");
  }
  return false;
}
