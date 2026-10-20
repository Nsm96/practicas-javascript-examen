function ejercicio3() {
  const productos = [
    { id: 1, nombre: "Cuaderno" },
    { id: 2, nombre: "Lápiz" },
    { id: 3, nombre: "Libro" }
  ];

  const encontrado = productos.find((producto) => producto.id === 2);

  let mensaje;

  if (encontrado) {
    mensaje = "Producto encontrado: " + encontrado.nombre;
  } else {
    mensaje = "Producto no encontrado";
  }

  const salida = document.querySelector("#resultado3");
  salida.textContent = mensaje;
}
