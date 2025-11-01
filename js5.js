document.getElementById("btnPromedio").addEventListener("click", () => {
  let n1 = Number(prompt("Ingrese la primera nota:"));
  let n2 = Number(prompt("Ingrese la segunda nota:"));
  let n3 = Number(prompt("Ingrese la tercera nota:"));
  let promedio = (n1 + n2 + n3) / 3;

  if (promedio >= 6) {
    alert(`Promedio: ${promedio.toFixed(2)} → Aprobado ✅`);
  } else {
    alert(`Promedio: ${promedio.toFixed(2)} → Desaprobado ❌`);
  }
});

