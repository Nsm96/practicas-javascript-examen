/*
  EJERCICIO 6: COMPARAR DOS NÚMEROS

  ENUNCIADO:
  Dados los números 12 y 9, muestra cuál es el mayor.

  OBJETIVO:
  Piensa cómo comparar dos valores y mostrar el resultado correcto.

  PISTA:
  Consulta analisis.md si necesitas orientación.
*/

function ejercicio6() {
  // Declara las variables necesarias
  const numero1 = 12;
  const numero2 = 9;
  let mensaje = "";

  // Implementa la lógica necesaria
  if (numero1 > numero2){
    mensaje = `${numero1} es el mayor.`
  } else {
    mensaje = `${numero2} es el mayor.`
  }

  // Muestra el resultado
  const resultado = document.querySelector("#resultado6");
  resultado.textContent = mensaje;
}
