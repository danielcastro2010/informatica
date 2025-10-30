let contador = 10;
let boton = document.getElementById("btndisminuir");
let numero = document.getElementById("conteo");

boton.addEventListener("click", function() {
    if (contador > 0) {
        contador--;
        numero.textContent = contador;
    } else {
        numero.textContent = "¡Llegaste a 0!";
    }
});
