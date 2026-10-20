function ejercicio6() {
  const numero1 = 12;
  const numero2 = 9;

  let mensaje;

  if (numero1 > numero2) {
    mensaje = "El mayor es " + numero1;
  } else if (numero2 > numero1) {
    mensaje = "El mayor es " + numero2;
  } else {
    mensaje = "Los dos números son iguales";
  }

  const resultado = document.querySelector("#resultado6");
  resultado.textContent = mensaje;
}
