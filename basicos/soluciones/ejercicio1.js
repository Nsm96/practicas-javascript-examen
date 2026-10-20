function ejercicio1() {
  const numero = -8;

  let mensaje;

  if (numero > 0) {
    mensaje = "Positivo";
  } else if (numero < 0) {
    mensaje = "Negativo";
  } else {
    mensaje = "Cero";
  }

  const resultado = document.querySelector("#resultado1");
  resultado.textContent = mensaje;
}
