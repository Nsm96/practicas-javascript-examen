# Prácticas JavaScript — Examen DWEC

Repositorio con ejercicios prácticos de JavaScript para preparar el examen de  
**Desarrollo Web en Entorno Cliente**.

Los ejercicios están pensados para practicar de forma progresiva: primero los  
conceptos básicos y, después, estructuras más complejas como arrays, objetos,  
funciones flecha, callbacks y métodos de arrays.

## Organización del repositorio

```text
practicas-javascript-examen/
├── README.md
├── guia/
│   ├── estructuras.md
│   └── estructuras.html
├── basicos/
│   ├── index.html
│   ├── analisis.md
│   ├── css/
│   ├── js/
│   └── soluciones/
├── medios/
│   ├── index.html
│   ├── analisis.md
│   ├── css/
│   ├── js/
│   └── soluciones/
└── avanzados/
    ├── index.html
    ├── analisis.md
    ├── css/
    ├── js/
    └── soluciones/
```

## Niveles de ejercicios

### Básicos

Ejercicios para practicar variables, operadores, comparaciones, condicionales  
y bucles sencillos.

Incluyen ejercicios como:

- Clasificar un número.
- Calcular un descuento.
- Mostrar una tabla de multiplicar.
- Comprobar si un número es par o impar.
- Calcular el IVA.
- Comparar dos números.

### Medios

Ejercicios para practicar arrays, acumuladores, matrices, bucles y funciones.

Incluyen ejercicios como:

- Contar aprobados y suspensos.
- Encontrar el mayor número de un array.
- Calcular la media de unas notas.
- Sumar los valores de una matriz.
- Calcular un reparto con resto.
- Crear una función que devuelva un precio final.

### Avanzados

Ejercicios para practicar funciones flecha, callbacks, métodos de arrays,  
objetos, spread y módulos.

Incluyen ejercicios como:

- Funciones flecha y callbacks.
- Uso de `filter()` y `map()`.
- Búsqueda en arrays de objetos con `find()`.
- Cálculo del valor de un inventario con `reduce()`.
- Copia y ampliación de arrays con spread.
- Filtrado de un catálogo usando módulos, `filter()` y `map()`.

## Cómo trabajar con los ejercicios

Cada nivel tiene su propia página `index.html`.

Dentro de cada nivel encontrarás:

- Un recuadro por ejercicio.
- El enunciado del ejercicio.
- El resultado esperado.
- Un botón para ejecutar el ejercicio.
- Un espacio donde aparecerá el resultado.

Cada ejercicio tiene su propio archivo JavaScript dentro de la carpeta `js/`.

Por ejemplo:

```text
basicos/js/ejercicio1.js
basicos/js/ejercicio2.js
basicos/js/ejercicio3.js
```

De esta forma, si un ejercicio tiene un error, los demás pueden seguir  
funcionando.

## Si no aparece ningún resultado

Si pulsas un botón y no aparece ningún resultado, abre la consola del  
navegador con `F12`.

Allí podrás ver si hay algún error de sintaxis, en qué archivo está y en qué  
línea se ha producido.

Algunos errores habituales son:

- Paréntesis, llaves o corchetes sin cerrar.
- Comillas sin cerrar.
- Usar una variable antes de declararla.
- Escribir mal el nombre de una función o variable.
- Confundir `=` con `==` o `===`.

## Análisis y soluciones

Cada nivel incluye un archivo `analisis.md`.

Antes de mirar la solución, puedes consultar el análisis. Allí encontrarás  
preguntas y pistas para orientarte sobre qué necesitas hacer.

Las soluciones están separadas en la carpeta `soluciones/` de cada nivel.

Recomendación:

1. Lee el enunciado.
2. Piensa cómo resolverlo.
3. Consulta `analisis.md` si te atascas.
4. Intenta resolverlo por tu cuenta.
5. Compara tu resultado con el esperado.
6. Consulta la solución solo después de haberlo intentado.

## Guía de estructuras

En la carpeta `guia/` encontrarás las estructuras principales de JavaScript  
en dos formatos:

- `estructuras.md`: versión en Markdown para leer directamente en GitHub.
- `estructuras.html`: versión web con ejemplos clicables.

Incluye estructuras como:

- Variables con `let` y `const`.
- Condicionales con `if`, `else if` y `else`.
- Operador ternario.
- Bucles `for`, `while` y `for...of`.
- Funciones normales.
- Funciones flecha.
- Arrays y objetos.
- Métodos de arrays como `forEach`, `map`, `filter`, `find` y `reduce`.
- Uso básico del DOM.
