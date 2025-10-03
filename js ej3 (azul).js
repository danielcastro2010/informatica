function verificarEdad() {
  let edad = prompt("Ingresa tu edad:");
  edad = Number(edad);

  if (!isNaN(edad)) {
    if (edad >= 18) {
      alert("Acceso permitido. Eres mayor de edad.");
    } else {
      alert("Acceso denegado. Eres menor de edad.");
    }
  } else {
    alert("Por favor ingresa un número válido.");
  }
}
