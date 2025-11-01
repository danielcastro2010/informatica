document.getElementById("btnIMC").addEventListener("click", () => {
  const peso = parseFloat(document.getElementById("peso").value);
  const altura = parseFloat(document.getElementById("altura").value);

  if (isNaN(peso) || isNaN(altura) || altura <= 0) {
    alert("Por favor, ingrese valores válidos.");
    return;
  }

  const imc = peso / (altura * altura);
  let estado = "";

  if (imc < 18.5) estado = "Bajo peso";
  else if (imc < 25) estado = "Peso normal";
  else if (imc < 30) estado = "Sobrepeso";
  else estado = "Obesidad";

  document.getElementById("resultadoIMC").textContent = `Tu IMC es: ${imc.toFixed(2)} → ${estado}`;
});

