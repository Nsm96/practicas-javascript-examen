function ejercicio5() {
  const precio = 100;
  const porcentajeIva = 21;

  const iva = (precio * porcentajeIva) / 100;
  const precioFinal = precio + iva;

  const resultado = document.querySelector("#resultado5");
  resultado.textContent =
    "IVA: " + iva + " € — Precio final: " + precioFinal + " €";
}
