function ejercicio4() {
  const numero = 14;

  let mensaje;

  if (numero % 2 === 0) {
    mensaje = "Par";
  } else {
    mensaje = "Impar";
  }

  const resultado = document.querySelector("#resultado4");
  resultado.textContent = mensaje;
}
