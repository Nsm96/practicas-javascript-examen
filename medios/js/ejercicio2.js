/*
  EJERCICIO 2: ENCONTRAR EL MAYOR

  ENUNCIADO:
  Dado el array [-8, -3, -12, -1, -6], encuentra el mayor número
  sin usar Math.max() ni ordenar el array.

  OBJETIVO:
  Piensa cómo recorrer el array y comparar cada número con el mayor
  encontrado hasta ese momento.

  PISTA:
  Consulta analisis.md si necesitas orientación.
*/

function ejercicio2() {
  // Declara las variables necesarias
  const numeros = [-8,-3,-12,-1,-6];
  let mayor = numeros[0];

  // Implementa la lógica necesaria
  for (const numero of numeros){
    if (numero > mayor){
      mayor = numero;
    } 
  }

  // Muestra el resultado
  const resultado = document.querySelector("#resultado2");
  resultado.textContent = "El mayor es: " + mayor;
}

