/*
  EJERCICIO 5: REPARTO CON RESTO

  ENUNCIADO:
  Hay 23 jamones para repartir entre 10 empleados.

  Calcula cuántos recibe cada uno y cuántos sobran.

  OBJETIVO:
  Piensa cómo obtener la parte entera de una división y cómo
  calcular el resto.

  PISTA:
  Consulta analisis.md si necesitas orientación.
*/

function ejercicio5() {
  // Declara las variables necesarias
const jamones = 23;
const empleados = 10;
let repartidos = 0;
let totalRepartidos = 0;

let sobrantes = 0;

  // Implementa la lógica necesaria
repartidos = Math.floor(jamones / empleados);
sobrantes = jamones % empleados;

  // Muestra el resultado
  const resultado = document.querySelector("#resultado5");
  resultado.textContent = "Cada uno recibe: " + repartidos + " y sobran : " + sobrantes;
}
