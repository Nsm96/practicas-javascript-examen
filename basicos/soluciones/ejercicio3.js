function ejercicio3() {
  const numero = 7;

  let lineas = [];

  for (let i = 1; i <= 10; i++) {
    lineas.push(numero + " x " + i + " = " + numero * i);
  }

  const resultado = document.querySelector("#resultado3");
  resultado.textContent = lineas.join(" — ");
}
