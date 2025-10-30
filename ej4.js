let tamanio = 16;
const texto = document.getElementById("texto");
const btnAumentar = document.getElementById("btnAumentar");
const btnDisminuir = document.getElementById("btnDisminuir");

btnAumentar.addEventListener("click", function() {
    tamanio += 2;
    texto.style.fontSize = tamanio + "px";
});

btnDisminuir.addEventListener("click", function() {
    if (tamanio > 8) {
        tamanio -= 2;
        texto.style.fontSize = tamanio + "px";
    }
});
