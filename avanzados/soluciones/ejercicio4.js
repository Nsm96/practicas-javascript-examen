function ejercicio4() {
  const productos = [
    { nombre: "Cuaderno", precio: 4, stock: 3 },
    { nombre: "Lápiz", precio: 2, stock: 0 },
    { nombre: "Libro", precio: 20, stock: 2 }
  ];

  const valorTotal = productos.reduce(
    (total, producto) => total + producto.precio * producto.stock,
    0
  );

  const salida = document.querySelector("#resultado4");
  salida.textContent = "Valor total del inventario: " + valorTotal + " €";
}
