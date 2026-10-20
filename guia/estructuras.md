# Guía de estructuras JavaScript

Esta guía reúne las estructuras principales que necesitarás para resolver  
los ejercicios.

La idea es aprender estos “esqueletos” y después aplicarlos a cada problema.

## Variables

Usa `const` cuando el valor no va a cambiar y `let` cuando sí pueda cambiar.

```js
const precio = 40;
let total = 0;

total = precio * 2;
```

## Operadores

```js
const suma = 5 + 3;
const resta = 10 - 4;
const multiplicacion = 6 * 2;
const division = 20 / 4;
const resto = 17 % 5;
const potencia = 2 ** 3;
```

El operador `%` devuelve el resto de una división.

Por ejemplo:

```js
const resto = 14 % 2; // 0
```

## Comparaciones

```js
const edad = 18;

edad === 18;
edad !== 18;
edad > 18;
edad < 18;
edad >= 18;
edad <= 18;
```

Usa `===` para comparar sin convertir tipos.

No confundas:

```js
let numero = 5;   // asignación
numero === 5;     // comparación
```

## Operadores lógicos

```js
const edad = 20;
const tieneEntrada = true;

edad >= 18 && tieneEntrada;
edad < 18 || tieneEntrada;
!tieneEntrada;
```

- `&&`: las dos condiciones deben cumplirse.
- `||`: basta con que se cumpla una.
- `!`: niega una condición.

## if / else if / else

```js
const nota = 8;

if (nota >= 9) {
  console.log("Sobresaliente");
} else if (nota >= 7) {
  console.log("Notable");
} else if (nota >= 5) {
  console.log("Aprobado");
} else {
  console.log("Suspenso");
}
```

El orden importa: JavaScript comprueba las condiciones de arriba abajo y  
ejecuta la primera que se cumpla.

## Operador ternario

```js
const importe = 120;

const descuento = importe >= 100 ? 10 : 0;
```

Equivale a:

```js
let descuento;

if (importe >= 100) {
  descuento = 10;
} else {
  descuento = 0;
}
```

## switch

```js
const estado = "enviado";

switch (estado) {
  case "pendiente":
    console.log("Preparando");
    break;

  case "enviado":
    console.log("En camino");
    break;

  default:
    console.log("Consultar estado");
}
```

`break` evita que continúe comprobando los casos siguientes.

## Bucle for

```js
for (let i = 1; i <= 10; i++) {
  console.log(i);
}
```

Estructura:

```js
for (inicio; condición; actualización) {
  // código que se repite
}
```

## Bucle while

```js
let contador = 1;

while (contador <= 5) {
  console.log(contador);
  contador++;
}
```

## for...of

```js
const notas = [4, 7, 9, 3];

for (const nota of notas) {
  console.log(nota);
}
```

`for...of` recorre los valores de un array.

## Función normal

```js
function calcularTotal(precio, unidades) {
  return precio * unidades;
}

const total = calcularTotal(4, 3);
console.log(total); // 12
```

## Función flecha

```js
const doble = (numero) => numero * 2;

console.log(doble(4)); // 8
```

Si usas llaves, necesitas `return`:

```js
const sumar = (a, b) => {
  return a + b;
};
```

## Callback

Una callback es una función que se pasa a otra función.

```js
function aplicar(numero, operacion) {
  return operacion(numero);
}

const triplicar = (numero) => numero * 3;

console.log(aplicar(4, triplicar)); // 12
```

## Arrays

```js
const precios = [4, 6, 8];

console.log(precios[0]);        // 4
console.log(precios.length);    // 3
console.log(precios[precios.length - 1]); // 8
```

Añadir y eliminar elementos:

```js
const lista = ["A", "B"];

lista.push("C");       // añade al final
lista.pop();           // elimina el último
lista.unshift("Inicio"); // añade al principio
lista.shift();         // elimina el primero
```

## Objetos

```js
const producto = {
  nombre: "Cuaderno",
  precio: 4
};

console.log(producto.nombre);
console.log(producto["precio"]);
```

Objeto con método:

```js
const coche = {
  marca: "Toyota",
  modelo: "Yaris",
  descripcion() {
    return this.marca + " " + this.modelo;
  }
};

console.log(coche.descripcion());
```

## Array de objetos

```js
const productos = [
  { nombre: "Cuaderno", precio: 4 },
  { nombre: "Bolígrafo", precio: 2 }
];

for (const producto of productos) {
  console.log(producto.nombre, producto.precio);
}
```

## forEach

```js
const notas = [4, 7, 9, 3];

notas.forEach((nota) => {
  console.log(nota);
});
```

`forEach` recorre un array y ejecuta una acción por cada elemento.

## map

```js
const precios = [10, 20, 30];

const dobles = precios.map((precio) => precio * 2);

console.log(dobles); // [20, 40, 60]
```

`map` crea un array nuevo transformando cada elemento.

## filter

```js
const notas = [4, 7, 9, 3];

const aprobados = notas.filter((nota) => nota >= 5);

console.log(aprobados); // [7, 9]
```

`filter` crea un array nuevo con los elementos que cumplen una condición.

## find

```js
const productos = [
  { id: 1, nombre: "Libro" },
  { id: 2, nombre: "Lápiz" }
];

const encontrado = productos.find((producto) => producto.id === 2);

console.log(encontrado); // { id: 2, nombre: "Lápiz" }
```

`find` devuelve el primer elemento que cumple la condición.

## reduce

```js
const notas = [6, 8, 4, 10];

const suma = notas.reduce((acumulado, nota) => acumulado + nota, 0);

console.log(suma); // 28
```

`reduce` acumula un resultado a partir de los elementos de un array.

## Spread

```js
const notas = [5, 8, 6];

const masNotas = [...notas, 9];

console.log(notas);     // [5, 8, 6]
console.log(masNotas);  // [5, 8, 6, 9]
```

`...` expande los valores de un array dentro de otro.

## Módulos

En un archivo puedes exportar valores o funciones:

```js
// utilidades.js
export const doble = (numero) => numero * 2;
```

Y en otro archivo puedes importarlos:

```js
// app.js
import { doble } from "./utilidades.js";

console.log(doble(4)); // 8
```

## DOM básico

```js
const resultado = document.querySelector("#resultado");

resultado.textContent = "Total: 12 €";
```

Para que funcione, el HTML debe tener un elemento con ese `id`:

```html
<p id="resultado"></p>
```

## Eventos

```js
const boton = document.querySelector("#miBoton");

boton.addEventListener("click", () => {
  console.log("Botón pulsado");
});
```

## Errores habituales

- Olvidar cerrar paréntesis, llaves o corchetes.
- Olvidar cerrar comillas.
- Usar una variable antes de declararla.
- Escribir mal el nombre de una función o variable.
- Confundir `=` con `==` o `===`.
- Llamar a un método sobre `null` o `undefined`.
