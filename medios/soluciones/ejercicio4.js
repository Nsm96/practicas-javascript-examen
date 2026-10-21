function ejercicio4() {
  const matriz = [
    [2, 4, 6],
    [1, 3, 5]
  ];

  let sumaTotal = 0;

  for (const fila of matriz) {
    for (const numero of fila) {
      sumaTotal += numero;
    }
  }

  const resultado = document.querySelector("#resultado4");
  resultado.textContent = "La suma total es " + sumaTotal;
}
