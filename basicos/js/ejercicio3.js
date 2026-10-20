/*
  EJERCICIO 3: TABLA DE MULTIPLICAR

  ENUNCIADO:
  Muestra la tabla de multiplicar del 7, desde el multiplicador 1
  hasta el 10.

  OBJETIVO:
  Piensa cómo repetir una operación varias veces y cómo construir
  cada línea del resultado.

  PISTA:
  Consulta analisis.md si necesitas orientación.
*/

function ejercicio3() {
  // Declara las variables necesarias
  const numero = 7;
  let multiplicacion = 0;
  let mensaje ="";
  // Implementa la lógica necesaria
  for (let i = 1; i <= 10; i++){
    multiplicacion = numero * i;
    mensaje = numero + "x" + i + "=" + multiplicacion;
  }

  // Muestra el resultado
  const resultado = document.querySelector("#resultado3");
  resultado.textContent = "";
}

// Comentario Nico: No sé hacerlo asi con queryselector o funcion, pero si lo hago con console.log funciona.