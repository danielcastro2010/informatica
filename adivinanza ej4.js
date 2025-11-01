const numeroSecreto = 7;
document.getElementById("btnJugar").addEventListener("click", () => {
  let intento = prompt("Adivina el número secreto (entre 1 y 10):");

  if (Number(intento) === numeroSecreto) {
    alert("¡Acertaste! 🎉");
  } else {
    alert("No acertaste 😢. El número secreto era " + numeroSecreto);
  }
});