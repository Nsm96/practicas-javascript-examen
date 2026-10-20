function ejercicio2() {
  const productos = [
    { nombre: "Teclado", precio: 30 },
    { nombre: "Ratón", precio: 15 },
    { nombre: "Monitor", precio: 150 }
  ];

  let lineas = [];

  for (const producto of productos) {
    lineas.push(producto.nombre + ": " + producto.precio + " €");
  }

  const resultado = document.querySelector("#resultado2");
  resultado.textContent = lineas.join(" — ");
}
