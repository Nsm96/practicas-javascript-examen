import { productos } from "../js/catalogo.js";
import { nombresDisponibles } from "../js/filtrarCatalogo.js";

function ejercicio6() {
  const nombres = nombresDisponibles(productos);

  const salida = document.querySelector("#resultado6");
  salida.textContent = "Productos disponibles: " + nombres.join(", ");
}
