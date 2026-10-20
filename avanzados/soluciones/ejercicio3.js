function ejercicio3() {
  const productos = [
    { nombre: "Teclado", precio: 30 },
    { nombre: "Ratón", precio: 15 },
    { nombre: "Monitor", precio: 150 }
  ];

  let lineas = [];

  for (const producto of productos) {
    if (producto.precio > 50) {
      lineas.push(producto.nombre + ": " + producto.precio + " €");
    }
  }

  const resultado = document.querySelector("#resultado3");
  resultado.textContent = lineas.join(" — ");
}
