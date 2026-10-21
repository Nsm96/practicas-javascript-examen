/*
  EJERCICIO 3: CALCULAR LA MEDIA

  ENUNCIADO:
  Dado el array de notas [6, 8, 4, 10], calcula la media usando
  un bucle.

  OBJETIVO:
  Piensa cómo sumar todos los valores y cómo obtener la media.

  PISTA:
  Consulta analisis.md si necesitas orientación.
*/

function ejercicio3() {
  // Declara las variables necesarias
  const notas = [6,8,4,10];
  let media = 0;
  let suma = 0;

  // Implementa la lógica necesaria
  for (const nota of notas){
    suma += nota;
  }

  media = suma / notas.length;

  // Muestra el resultado
  const resultado = document.querySelector("#resultado3");
  resultado.textContent = "La media es: " + media;
}
