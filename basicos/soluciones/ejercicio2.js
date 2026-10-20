function ejercicio2() {
  const importe = 120;
  const porcentajeDescuento = 10;

  let descuento = 0;
  let precioFinal = importe;

  if (importe >= 100) {
    descuento = (importe * porcentajeDescuento) / 100;
    precioFinal = importe - descuento;
  }

  const resultado = document.querySelector("#resultado2");
  resultado.textContent =
    "Descuento: " + descuento + " € — Precio final: " + precioFinal + " €";
}
