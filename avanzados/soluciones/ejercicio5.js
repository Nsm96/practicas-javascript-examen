function ejercicio5() {
  const notas = [5, 8, 6];

  const notasAmpliadas = [...notas, 9];

  const salida = document.querySelector("#resultado5");
  salida.textContent =
    "Original: " + notas.join(", ") +
    " — Ampliado: " + notasAmpliadas.join(", ");
}
