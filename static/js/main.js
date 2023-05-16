

var encryptDict =   {"e":"enter", 
                    "i":"imes",
                    "a":"ai",
                    "o":"ober", 
                    "u":"ufat"}


function encriptador(texto) {
    texto = texto.toLowerCase();
    for (var key in encryptDict) {
        if (texto.includes(key)) {
            texto = texto.replaceAll(key, encryptDict[key]);
        }
    }
    return texto;
}

function desencriptador(texto) {
    texto = texto.toLowerCase();
    let encryptDictInv = Object.entries(encryptDict).map(([key, value]) => [value, key]);
    encryptDictInv = Object.fromEntries(encryptDictInv);

    for (var key in encryptDictInv) {
        if (texto.includes(key)) {
            texto = texto.replaceAll(key, encryptDictInv[key]);
        }
    }
    return texto;
}



document.querySelector("[data-button='encrypt']").addEventListener("click", function () {
    var texto = document.querySelector("[data-text='input']").value;
    texto_encriptado = encriptador(texto);

    document.querySelector('.not-message').classList.replace('flex', 'hidden');
    document.querySelector('.encriptado').classList.remove('hidden');
    document.querySelector("[data-text='output']").innerHTML = texto_encriptado;

;
});

document.querySelector("[data-button='decrypt']").addEventListener("click", function () {
    var texto = document.querySelector("[data-text='input']").value;
    texto_desencriptado = desencriptador(texto);

    document.querySelector('.not-message').classList.replace('flex', 'hidden');
    document.querySelector('.encriptado').classList.remove('hidden');
    document.querySelector("[data-text='output']").innerHTML = texto_desencriptado;
});

document.querySelector("[data-button='copy']").addEventListener("click", function () {
    var copyText = document.querySelector("[data-text='output']").innerHTML;
    navigator.clipboard.writeText(copyText);
} );