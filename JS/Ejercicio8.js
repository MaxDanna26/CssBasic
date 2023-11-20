function validarDNI() {
    var dni = document.getElementById("dniInput").value.toString();

    if(dni.length < 9) alert("Dni No valido! Debe tener 9 caracteres.");

    if(dni.length == 9)
    {
        var numeroDNI = dni.substring(0,8);
    }

    var letraDni = dni.substring(8,9);

    var resto = numeroDNI  % 23;

    var letras = ["T", "R", "W", "A", "G", "M", "Y", "F", "P", "D", "X", "B", "N", "J", "Z", "S", "Q", "V", "H", "L", "C", "K", "E"];

    var letraCalculada = letras[resto];

    if(letraCalculada == letraDni)
    {
        alert("El DNI es correcto!");
    }
    else
    {
        alert("El DNI esta falsificado!");
    }
 }