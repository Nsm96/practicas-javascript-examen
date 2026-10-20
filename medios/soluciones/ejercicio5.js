function ejercicio5() {
  const totalJamones = 23;
  const empleados = 10;

  const cadaUno = Math.floor(totalJamones / empleados);
  const sobran = totalJamones % empleados;

  const resultado = document.querySelector("#resultado5");
  resultado.textContent =
    "Cada empleado recibe " + cadaUno + " — Sobran " + sobran;
}
