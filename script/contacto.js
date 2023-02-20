function validarFormulario() {
    // Validar nombre 
    if (document.formulario.nombre.value.length == 0) {
        alert("Nombre es obligatorio")
        document.formulario.nombre.focus()
        return false;
    }
    // Validar apellido 
    if (document.formulario.apellido.value == "") {
        alert("Apellido es obligatorio")
        document.formulario.apellido.focus()
        return false;
    }
    // Validar email
    var ck_email = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/;
    valor = document.getElementById("email").value;
    if (!(ck_email.test(valor))) {
        alert("Email debe contener un email")
        return false;
    }
    // Enviar formulario 
    alert("La cripta agradece el mensaje");
    document.formulario.submit();

}