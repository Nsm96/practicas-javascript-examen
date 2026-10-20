export function nombresDisponibles(datos) {
  return datos
    .filter((producto) => producto.stock > 0)
    .map((producto) => producto.nombre);
}
