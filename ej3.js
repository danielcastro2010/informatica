const boton = document.getElementById("btnToggle");
const parrafo = document.getElementById("parrafo");

boton.addEventListener("click", function() {
    if (parrafo.style.display === "none") {
        parrafo.style.display = "block";
    } else {
        parrafo.style.display = "none";
    }
});
