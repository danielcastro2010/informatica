document.getElementById("btnCalcular").addEventListener("click", () => {
  const nombre = document.getElementById("evento").value;
  const fechaEvento = new Date(document.getElementById("fecha").value);
  const hoy = new Date();

  if (!nombre || !fechaEvento) {
    alert("Por favor, complete todos los campos.");
    return;
  }

  const diferencia = Math.ceil((fechaEvento - hoy) / (1000 * 60 * 60 * 24));

  if (diferencia > 0) {
    document.getElementById("resultado").textContent = `Faltan ${diferencia} días para ${nombre}.`;
  } else if (diferencia === 0) {
    document.getElementById("resultado").textContent = `¡El evento '${nombre}' es hoy! 🎉`;
  } else {
    document.getElementById("resultado").textContent = `El evento '${nombre}' ya ocurrió.`;
  }
});

