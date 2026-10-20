function ejercicio2() {
  const numeros = [-8, -3, -12, -1, -6];

  let mayor = numeros[0];

  for (const numero of numeros) {
    if (numero > mayor) {
      mayor = numero;
    }
  }

  const resultado = document.querySelector("#resultado2");
  resultado.textContent = "El mayor es " + mayor;
}
