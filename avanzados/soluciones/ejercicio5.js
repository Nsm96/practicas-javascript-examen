function ejercicio5() {
  const productos = [
    { nombre: "Teclado", precio: 30, cantidad: 1 },
    { nombre: "Ratón", precio: 15, cantidad: 2 },
    { nombre: "Monitor", precio: 150, cantidad: 1 }
  ];

  let total = 0;

  for (const producto of productos) {
    total += producto.precio * producto.cantidad;
  }

  const resultado = document.querySelector("#resultado5");
  resultado.textContent = "Total: " + total + " €";
}
