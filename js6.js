document.getElementById("btnFiesta").addEventListener("click", () => {
  let nombre = prompt("Ingrese su nombre:");
  let asistencia = prompt("¿Asistirá a la fiesta de fin de año? (sí/no):");

  alert(`Nombre: ${nombre}\nAsistirá: ${asistencia.toLowerCase() === "sí" ? "Sí 🎉" : "No 😢"}`);
});

