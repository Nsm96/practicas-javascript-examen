function precioFinal(precio, porcentajeDescuento = 10) {
  const descuento = (precio * porcentajeDescuento) / 100;
  return precio - descuento;
}

function ejercicio6() {
  const resultado1 = precioFinal(100);
  const resultado2 = precioFinal(80, 25);

  const resultado = document.querySelector("#resultado6");
  resultado.textContent =
    "Precio final 1: " + resultado1 + " € — Precio final 2: " + resultado2 + " €";
}
