/*
  EJERCICIO 4: COMPROBAR PAR O IMPAR

  ENUNCIADO:
  Dado el número 14, muestra si es par o impar.

  OBJETIVO:
  Piensa cómo saber si un número se puede dividir exactamente
  entre 2.

  PISTA:
  Consulta analisis.md si necesitas orientación.
*/

function ejercicio4() {
  // Declara las variables necesarias
  const numero = 14;
  let mensaje = "";

  // Implementa la lógica necesaria
  if (numero % 2 === 0){
    mensaje = "Es par";
  } else {
    mensaje = "Es impar";
  }

  // Muestra el resultado
  const resultado = document.querySelector("#resultado4");
  resultado.textContent = mensaje;
}
