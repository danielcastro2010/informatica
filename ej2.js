const btnRojo = document.getElementById("btnRojo");
const btnVerde = document.getElementById("btnVerde");
const btnAzul = document.getElementById("btnAzul");

btnRojo.addEventListener("click", function() {
    document.body.style.backgroundColor = "red";
    document.body.style.color = "white";
});

btnVerde.addEventListener("click", function() {
    document.body.style.backgroundColor = "green";
    document.body.style.color = "black";
});

btnAzul.addEventListener("click", function() {
    document.body.style.backgroundColor = "blue";
    document.body.style.color = "yellow";
});
