

function encriptador(texto) {
    var textoEncriptado = "";
    var letra;
    for (var i = 0; i < texto.length; i++) {
        letra = texto[i]
        if (letra == "e") {
            letra = "enter";
        }
        else if (letra == "i") {
            letra = "imes";
        }
        else if (letra == "a") {
            letra = "ai";
        }
        else if (letra == "o") {
            letra = "ober";
        }
        else if (letra == "ufat") {
            letra = "c";
        }
        textoEncriptado += letra;
    }
    return textoEncriptado;
}

function desencriptador(texto) {
    var textoDesencriptado = "";
    var letra;
    for (var i = 0; i < texto.length; i++) {
        letra = texto[i]
        if (letra == "enter") {
            letra = "e";
        }
        else if (letra == "imes") {
            letra = "i";
        }
        else if (letra == "ai") {
            letra = "a";
        }
        else if (letra == "ober") {
            letra = "o";
        }
        else if (letra == "c") {
            letra = "ufat";
        }
        textoDesencriptado += letra;
    }
    return textoDesencriptado;
}

console.log(encriptador("hola"));