document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("btnSaludo");

  btn.addEventListener("click", () => {
    const nombre = document.getElementById("nombre").value.trim();
    const apellido = document.getElementById("apellido").value.trim();
    const curso = document.getElementById("curso").value.trim();

    if (!nombre || !apellido || !curso) {
      alert("Por favor completá todos los campos.");
      return;
    }

    // Abrir nueva ventana
    const nuevaVentana = window.open("", "_blank", "width=500,height=400");

    if (!nuevaVentana) {
      alert("No se pudo abrir la nueva ventana. Revisa que tu navegador permita pop-ups.");
      return;
    }

    // Escribir contenido HTML en la nueva ventana
    nuevaVentana.document.write(`
      <!DOCTYPE html>
      <html lang="es">
      <head>
        <meta charset="UTF-8">
        <title>Bienvenida</title>
        <style>
          body { font-family: Arial; text-align: center; padding-top: 50px; background-color: #f0f8ff; }
          h1 { color: #2a4d8f; }
          p { font-size: 18px; }
        </style>
      </head>
      <body>
        <h1>¡Bienvenido, ${nombre} ${apellido}!</h1>
        <p>Curso: <strong>${curso}</strong></p>
      </body>
      </html>
    `);

    // Cerrar documento para que cargue bien
    nuevaVentana.document.close();
  });
});
