const triplicar = (numero) => numero * 3;

function aplicar(numero, operacion) {
  return operacion(numero);
}

function ejercicio1() {
  const resultado = aplicar(4, triplicar);

  const salida = document.querySelector("#resultado1");
  salida.textContent = "Resultado: " + resultado;
}
