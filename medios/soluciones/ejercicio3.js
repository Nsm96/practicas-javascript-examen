function ejercicio3() {
  const notas = [6, 8, 4, 10];

  let suma = 0;

  for (const nota of notas) {
    suma += nota;
  }

  const media = suma / notas.length;

  const resultado = document.querySelector("#resultado3");
  resultado.textContent = "La media es " + media;
}
