/*
  EJERCICIO 2: CALCULAR UN DESCUENTO

  ENUNCIADO:
  Dado un importe de 120 €, si el importe alcanza los 100 €,
  aplica un descuento del 10 %.

  Muestra el descuento y el precio final.

  OBJETIVO:
  Piensa cómo calcular un porcentaje y cómo decidir si se aplica
  o no el descuento.

  PISTA:
  Consulta analisis.md si necesitas orientación.
*/

function ejercicio2() {
  // Declara las variables necesarias
  let importe = 120;
  const descuento = 10;
  const minimoParaDescuento = 100;
  let conDescuento = 0;
  let totalPagar = 0;

  // Implementa la lógica necesaria
  if (importe >= minimoParaDescuento){
    conDescuento = importe * descuento / 100;
    totalPagar = importe - conDescuento;
  }

  // Muestra el resultado
  const resultado = document.querySelector("#resultado2");
  resultado.textContent = totalPagar;
}
