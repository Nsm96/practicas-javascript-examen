/*
  EJERCICIO 1: CONTAR APROBADOS Y SUSPENSOS

  ENUNCIADO:
  Dado el array de notas [4, 7, 5, 3, 9, 6], cuenta cuántas son
  aprobados y cuántas suspensos.

  Se aprueba con una nota mayor o igual que 5.

  OBJETIVO:
  Piensa cómo recorrer el array y contar los elementos que cumplen
  cada condición.

  PISTA:
  Consulta analisis.md si necesitas orientación.
*/

function ejercicio1() {
  // Declara las variables necesarias
  let notas = [4,7,5,3,9,6];
  const minimoAprobado = 5;
  let aprobados = 0;
  let suspensos = 0;

  // Implementa la lógica necesaria
  for (const nota of notas){
    if (nota >= 5){
      aprobados++;
    } else {
      suspensos++;
    }
  }

  // Muestra el resultado
  const resultado = document.querySelector("#resultado1");
  resultado.textContent = `Aprobados: ${aprobados} Suspensos: ${suspensos}`;
}
