function verCondicionales() {
  const codigo = `if (condicion) {
  console.log("Se cumple la condición");
} else if (otraCondicion) {
  console.log("Se cumple la otra condición");
} else {
  console.log("No se cumple ninguna");
}`;

  const bloque = document.querySelector("#codigo-condicionales");
  bloque.textContent = codigo;
}

function verBucles() {
  const codigo = `for (let i = 1; i <= 5; i++) {
  console.log("Vuelta número " + i);
}`;

  const bloque = document.querySelector("#codigo-bucles");
  bloque.textContent = codigo;
}

function verFunciones() {
  const codigo = `function sumar(a, b) {
  return a + b;
}

const resultado = sumar(2, 3);
console.log(resultado); // 5`;

  const bloque = document.querySelector("#codigo-funciones");
  bloque.textContent = codigo;
}

function verArrays() {
  const codigo = `const notas = [4, 7, 5, 3];

for (const nota of notas) {
  console.log(nota);
}`;

  const bloque = document.querySelector("#codigo-arrays");
  bloque.textContent = codigo;
}

function verObjetos() {
  const codigo = `const persona = {
  nombre: "Ana",
  edad: 30,
  ciudad: "Madrid"
};

console.log(persona.nombre);`;

  const bloque = document.querySelector("#codigo-objetos");
  bloque.textContent = codigo;
}
