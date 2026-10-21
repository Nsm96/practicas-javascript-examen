/*
  EJERCICIO 4: SUMAR UNA MATRIZ

  ENUNCIADO:
  Dada la matriz [[2, 4, 6], [1, 3, 5]], calcula la suma de todos
  sus elementos usando bucles anidados.

  OBJETIVO:
  Piensa cómo recorrer las filas y, dentro de cada fila, sus valores.

  PISTA:
  Consulta analisis.md si necesitas orientación.
*/

function ejercicio4() {
  // Declara las variables necesarias
  const datos = [
    [2,4,6],
    [1,3,5]
  ]

  let sumaTotal = 0;

  // Implementa la lógica necesaria
  for(fila of datos){
    for (numero of fila){
      sumaTotal += numero;
    }
  }

  // Muestra el resultado
  const resultado = document.querySelector("#resultado4");
  resultado.textContent = "La suma es: " + sumaTotal;
}
