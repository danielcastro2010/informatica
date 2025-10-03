function calcularPromedio() {
  let nota1 = Number(prompt("Ingresa la primera nota:"));
  let nota2 = Number(prompt("Ingresa la segunda nota:"));
  let nota3 = Number(prompt("Ingresa la tercera nota:"));

  if (!isNaN(nota1) && !isNaN(nota2) && !isNaN(nota3)) {
    let promedio = (nota1 + nota2 + nota3) / 3;
    if (promedio >= 6) {
      alert("Tu promedio es " + promedio.toFixed(2) + ". ¡Aprobado!");
    } else {
      alert("Tu promedio es " + promedio.toFixed(2) + ". Desaprobado.");
    }
  } else {
    alert("Debes ingresar solo valores numéricos.");
  }
}
