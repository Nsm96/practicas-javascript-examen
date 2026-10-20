const temas = [
  {
    id: "variables",
    titulo: "Variables",
    descripcion: "Declaración con const y let.",
    codigo: "const precio = 10;\nlet unidades = 3;\n\nunidades = 5;\nconsole.log(precio * unidades);"
  },
  {
    id: "operadores",
    titulo: "Operadores",
    descripcion: "Aritméticos, comparación y lógicos.",
    codigo: "const a = 10;\nconst b = 3;\n\nconsole.log(a + b);\nconsole.log(a > b);\nconsole.log(a > 5 && b < 5);"
  },
  {
    id: "conversiones",
    titulo: "Conversiones",
    descripcion: "Convertir texto a número y viceversa.",
    codigo: "const texto = \"25\";\nconst numero = Number(texto);\n\nconsole.log(typeof texto);\nconsole.log(typeof numero);"
  },
  {
    id: "cadenas",
    titulo: "Cadenas",
    descripcion: "Métodos básicos y template literals.",
    codigo: "const nombre = \"Ana\";\nconst edad = 30;\n\nconsole.log(nombre.toUpperCase());\nconsole.log(\"Hola, \" + nombre);\nconsole.log(`Tengo ${edad} años`);"
  },
  {
    id: "condicionales",
    titulo: "Condicionales",
    descripcion: "if, else if y else.",
    codigo: "if (condicion) {\n  console.log(\"Se cumple la condición\");\n} else if (otraCondicion) {\n  console.log(\"Se cumple la otra condición\");\n} else {\n  console.log(\"No se cumple ninguna\");\n}"
  },
  {
    id: "switch",
    titulo: "Switch",
    descripcion: "Elegir entre varios valores concretos.",
    codigo: "switch (estado) {\n  case \"pendiente\":\n    console.log(\"Preparando\");\n    break;\n  case \"enviado\":\n    console.log(\"En camino\");\n    break;\n  default:\n    console.log(\"Consultar estado\");\n}"
  },
  {
    id: "ternario",
    titulo: "Operador ternario",
    descripcion: "Elección breve según una condición.",
    codigo: "const edad = 20;\n\nconst mensaje = edad >= 18\n  ? \"Mayor de edad\"\n  : \"Menor de edad\";\n\nconsole.log(mensaje);"
  },
  {
    id: "bucle-for",
    titulo: "Bucle for",
    descripcion: "Repetir un número concreto de veces.",
    codigo: "for (let i = 1; i <= 5; i++) {\n  console.log(\"Vuelta número \" + i);\n}"
  },
  {
    id: "while",
    titulo: "While y do...while",
    descripcion: "Repetir mientras se cumple una condición.",
    codigo: "let contador = 1;\n\nwhile (contador <= 3) {\n  console.log(contador);\n  contador++;\n}\n\ndo {\n  console.log(\"Se ejecuta al menos una vez\");\n} while (false);"
  },
  {
    id: "for-of",
    titulo: "for...of",
    descripcion: "Recorrer los valores de un array.",
    codigo: "const notas = [4, 7, 5, 3];\n\nfor (const nota de notas) {\n  console.log(nota);\n}"
  },
  {
    id: "arrays",
    titulo: "Arrays",
    descripcion: "Crear, acceder y recorrer.",
    codigo: "const frutas = [\"manzana\", \"pera\", \"uva\"];\n\nconsole.log(frutas[0]);\nconsole.log(frutas.length);\n\nfrutas.push("naranja");"
  },
  {
    id: "metodos-array",
    titulo: "Métodos de array",
    descripcion: "map, filter, find y reduce.",
    codigo: "const notas = [4, 7, 9, 3];\n\nconst aprobados = notas.filter(n => n >= 5);\nconst dobles = notas.map(n => n * 2);\nconst primero = notas.find(n => n > 5);\nconst total = notas.reduce((suma, n) => suma + n, 0);"
  },
  {
    id: "objetos",
    titulo: "Objetos",
    descripcion: "Propiedades y acceso con punto.",
    codigo: "const persona = {\n  nombre: "Ana",\n  edad: 30,\n  ciudad: "Madrid"\n};\n\nconsole.log(persona.nombre);"
  },
  {
    id: "funciones",
    titulo: "Funciones",
    descripcion: "Función normal con parámetros y return.",
    codigo: "function sumar(a, b) {\n  return a + b;\n}\n\nconst resultado = sumar(2, 3);\nconsole.log(resultado);"
  },
  {
    id: "flechas",
    titulo: "Funciones flecha y callbacks",
    descripcion: "Sintaxis corta y funciones como argumentos.",
    codigo: "const doble = n => n * 2;\n\nfunction aplicar(numero, operacion) {\n  return operacion(numero);\n}\n\nconsole.log(aplicar(4, doble));"
  },
  {
    id: "spread",
    titulo: "Spread y desestructuración",
    descripcion: "Copiar arrays y extraer valores.",
    codigo: "const notas = [5, 8, 6];\nconst copia = [...notas, 9];\n\nconst [primera, segunda] = notas;\n\nconsole.log(copia);\nconsole.log(primera, segunda);"
  },
  {
    id: "modulos",
    titulo: "Módulos",
    descripcion: "Exportar e importar entre archivos.",
    codigo: "// datos.js\nexport const productos = [];\n\n// app.js\nimport { productos } from "./datos.js";"
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
