document.getElementById("btnSaludo").addEventListener("click", () => {
  let nombre = prompt("Ingrese su nombre:");
  let apellido = prompt("Ingrese su apellido:");
  let curso = prompt("Ingrese su curso:");
  
  let mensaje = `Bienvenido, ${nombre} ${apellido}, del curso ${curso}.`;
  document.write(`<h1>${mensaje}</h1>`);
});

