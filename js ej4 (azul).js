function jugar() {
  let numeroSecreto = 7; // número secreto definido en el código
  let intento = prompt("Adivina el número secreto (entre 1 y 10):");
  intento = Number(intento);

  if (!isNaN(intento)) {
    if (intento === numeroSecreto) {
      alert("¡Felicidades! Adivinaste el número secreto.");
    } else {
      alert("Lo siento, no acertaste. El número secreto era " + numeroSecreto);
    }
  } else {
    alert("Debes ingresar un número válido.");
  }
}
