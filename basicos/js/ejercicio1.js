/*
  EJERCICIO 1: CLASIFICAR UN NÚMERO

  ENUNCIADO:
  Dado el número -8, muestra si es positivo, negativo o cero.

  OBJETIVO:
  Piensa cómo comprobar varias posibilidades y mostrar el mensaje
  correcto según el valor del número.

  PISTA:
  Consulta analisis.md si necesitas orientación.
*/

function ejercicio1() {
  // Declara las variables necesarias
  const numero = -8;
  let mensaje = "";
  // Implementa la lógica necesaria
  if (numero < 0) {
   mensaje = "Es negativo"
  } else {
   mensaje = "Es positivo";
  }

  // Muestra el resultado
  const resultado = document.querySelector("#resultado1");
  resultado.textContent = mensaje;
}
