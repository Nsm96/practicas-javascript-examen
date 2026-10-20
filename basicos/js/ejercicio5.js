/*
  EJERCICIO 5: CALCULAR IVA

  ENUNCIADO:
  Dado un precio de 100 €, calcula el IVA del 21 % y el precio final.

  Muestra el IVA y el precio final.

  OBJETIVO:
  Piensa cómo calcular un porcentaje y cómo obtener el precio total.

  PISTA:
  Consulta analisis.md si necesitas orientación.
*/

function ejercicio5() {
  // Declara las variables necesarias
  const precio = 100;
  const iva = 21;
  let totalIva = 0;
  let precioFinal = 0;
  // Implementa la lógica necesaria
  totalIva = precio * iva / 100;
  precioFinal = precio + totalIva;

  // Muestra el resultado
  const resultado = document.querySelector("#resultado5");
  resultado.textContent = precioFinal;
}
