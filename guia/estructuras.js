const temas = [
  {
    id: "variables",
    titulo: "Variables",
    descripcion: "Declaración con const y let.",
    codigo: `const precio = 10;
let unidades = 3;

unidades = 5;
console.log(precio * unidades);`
  },
  {
    id: "operadores",
    titulo: "Operadores",
    descripcion: "Aritméticos, comparación y lógicos.",
    codigo: `const a = 10;
const b = 3;

console.log(a + b);
console.log(a > b);
console.log(a > 5 && b < 5);`
  },
  {
    id: "conversiones",
    titulo: "Conversiones",
    descripcion: "Convertir texto a número y viceversa.",
    codigo: `const texto = "25";
const numero = Number(texto);

console.log(typeof texto);
console.log(typeof numero);`
  },
  {
    id: "cadenas",
    titulo: "Cadenas",
    descripcion: "Métodos básicos y template literals.",
    codigo: `const nombre = "Ana";
const edad = 30;

console.log(nombre.toUpperCase());
console.log("Hola, " + nombre);
console.log(\`Tengo \${edad} años\`);`
  },
  {
    id: "condicionales",
    titulo: "Condicionales",
    descripcion: "if, else if y else.",
    codigo: `if (condicion) {
  console.log("Se cumple la condición");
} else if (otraCondicion) {
  console.log("Se cumple la otra condición");
} else {
  console.log("No se cumple ninguna");
}`
  },
  {
    id: "switch",
    titulo: "Switch",
    descripcion: "Elegir entre varios valores concretos.",
    codigo: `switch (estado) {
  case "pendiente":
    console.log("Preparando");
    break;
  case "enviado":
    console.log("En camino");
    break;
  default:
    console.log("Consultar estado");
}`
  },
  {
    id: "ternario",
    titulo: "Operador ternario",
    descripcion: "Elección breve según una condición.",
    codigo: `const edad = 20;

const mensaje = edad >= 18
  ? "Mayor de edad"
  : "Menor de edad";

console.log(mensaje);`
  },
  {
    id: "bucle-for",
    titulo: "Bucle for",
    descripcion: "Repetir un número concreto de veces.",
    codigo: `for (let i = 1; i <= 5; i++) {
  console.log("Vuelta número " + i);
}`
  },
  {
    id: "while",
    titulo: "While y do...while",
    descripcion: "Repetir mientras se cumple una condición.",
    codigo: `let contador = 1;

while (contador <= 3) {
  console.log(contador);
  contador++;
}

do {
  console.log("Se ejecuta al menos una vez");
} while (false);`
  },
  {
    id: "for-of",
    titulo: "for...of",
    descripcion: "Recorrer los valores de un array.",
    codigo: `const notas = [4, 7, 5, 3];

for (const nota of notas) {
  console.log(nota);
}`
  },
  {
    id: "arrays",
    titulo: "Arrays",
    descripcion: "Crear, acceder y recorrer.",
    codigo: `const frutas = ["manzana", "pera", "uva"];

console.log(frutas[0]);
console.log(frutas.length);

frutas.push("naranja");`
  },
  {
    id: "metodos-array",
    titulo: "Métodos de array",
    descripcion: "map, filter, find y reduce.",
    codigo: `const notas = [4, 7, 9, 3];

const aprobados = notas.filter(n => n >= 5);
const dobles = notas.map(n => n * 2);
const primero = notas.find(n => n > 5);
const total = notas.reduce((suma, n) => suma + n, 0);`
  },
  {
    id: "objetos",
    titulo: "Objetos",
    descripcion: "Propiedades y acceso con punto.",
    codigo: `const persona = {
  nombre: "Ana",
  edad: 30,
  ciudad: "Madrid"
};

console.log(persona.nombre);`
  },
  {
    id: "funciones",
    titulo: "Funciones",
    descripcion: "Función normal con parámetros y return.",
    codigo: `function sumar(a, b) {
  return a + b;
}

const resultado = sumar(2, 3);
console.log(resultado);`
  },
  {
    id: "flechas",
    titulo: "Funciones flecha y callbacks",
    descripcion: "Sintaxis corta y funciones como argumentos.",
    codigo: `const doble = n => n * 2;

function aplicar(numero, operacion) {
  return operacion(numero);
}

console.log(aplicar(4, doble));`
  },
  {
    id: "spread",
    titulo: "Spread y desestructuración",
    descripcion: "Copiar arrays y extraer valores.",
    codigo: `const notas = [5, 8, 6];
const copia = [...notas, 9];

const [primera, segunda] = notas;

console.log(copia);
console.log(primera, segunda);`
  },
  {
    id: "modulos",
    titulo: "Módulos",
    descripcion: "Exportar e importar entre archivos.",
    codigo: `// datos.js
export const productos = [];

// app.js
import { productos } from "./datos.js";`
  }
];

const contenedor = document.querySelector("#contenedor");

temas.forEach(tema => {
  const seccion = document.createElement("section");
  seccion.className = "tema";

  const titulo = document.createElement("h2");
  titulo.textContent = tema.titulo;

  const descripcion = document.createElement("p");
  descripcion.textContent = tema.descripcion;

  const boton = document.createElement("button");
  boton.textContent = "Ver código";
  boton.onclick = () => {
    const bloque = seccion.querySelector(".codigo");
    bloque.textContent = tema.codigo;
  };

  const bloque = document.createElement("pre");
  bloque.className = "codigo";

  seccion.append(titulo, descripcion, boton, bloque);
  contenedor.append(seccion);
});
