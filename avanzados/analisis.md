# Análisis — Ejercicios avanzados

Antes de mirar una solución, intenta responder a las preguntas de cada ejercicio. Después, si lo necesitas, lee las pistas.

## Ejercicio 1: Función flecha y callback

### Para pensar
- ¿Qué es una función flecha?
- ¿Qué es una callback?
- ¿Cómo se pasa una función como argumento?
- ¿Qué debe devolver `aplicar`?

### Pistas
- `triplicar` debe ser una función flecha que multiplique por 3.
- `aplicar` recibe un número y una función.
- Dentro de `aplicar`, llama a la función recibida con el número.
- El resultado de `aplicar(4, triplicar)` debe ser 12.

## Ejercicio 2: Filtrar y transformar notas

### Para pensar
- ¿Qué método selecciona elementos que cumplen una condición?
- ¿Qué método transforma cada elemento?
- ¿Qué condición define un aprobado?
- ¿Cómo se calcula el doble de cada nota?

### Pistas
- Usa `filter` para obtener las notas mayores o iguales que 5.
- Usa `map` para obtener el doble de cada nota.
- Ambos métodos devuelven un array nuevo.
- Muestra ambos resultados.

## Ejercicio 3: Buscar un producto

### Para pensar
- ¿Qué método busca el primer elemento que cumple una condición?
- ¿Qué devuelve si no encuentra nada?
- ¿Cómo se comprueba el resultado?

### Pistas
- Usa `find` sobre el array de productos.
- La condición es `producto.id === 2`.
- Si encuentra, muestra el nombre.
- Si no, muestra “Producto no encontrado”.

## Ejercicio 4: Valor de un inventario

### Para pensar
- ¿Qué método acumula un resultado?
- ¿Qué se acumula en cada producto?
- ¿Qué valor inicial necesita?

### Pistas
- Usa `reduce` sobre el array de productos.
- En cada paso, suma `precio * stock`.
- El valor inicial es 0.
- El resultado debe ser 52.

## Ejercicio 5: Copiar y ampliar un array con spread

### Para pensar
- ¿Qué es el operador spread?
- ¿Cómo se copia un array sin modificar el original?
- ¿Cómo se añade un elemento al final?

### Pistas
- Usa `[...notas]` para copiar.
- Añade el 9 después del spread.
- El original no debe cambiar.
- Muestra ambos arrays.

## Ejercicio 6: Filtrar catálogo con módulos

### Para pensar
- ¿Qué es un módulo?
- ¿Cómo se exporta e importa?
- ¿Qué métodos se usan para filtrar y transformar?

### Pistas
- `catalogo.js` exporta los productos.
- `filtrarCatalogo.js` exporta una función que usa `filter` y `map`.
- `ejercicio6.js` importa ambos y muestra el resultado.
- El resultado debe ser “Cuaderno, Libro”.
