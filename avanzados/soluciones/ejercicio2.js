function ejercicio2() {
  const notas = [4, 7, 9, 3];

  const aprobados = notas.filter((nota) => nota >= 5);
  const dobles = notas.map((nota) => nota * 2);

  const salida = document.querySelector("#resultado2");
  salida.textContent =
    "Aprobados: " + aprobados.join(", ") +
    " — Dobles: " + dobles.join(", ");
}
