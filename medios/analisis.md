# Análisis — Ejercicios medios

Antes de mirar una solución, intenta responder a las preguntas de cada  
ejercicio. Después, si lo necesitas, lee las pistas.

## Ejercicio 1: Contar aprobados y suspensos

### Para pensar

- ¿Qué datos tienes?
- ¿Qué condición define un aprobado?
- ¿Qué necesitas contar?
- ¿Qué estructura te permite recorrer el array?

### Pistas

- Necesitarás el array de notas.
- Necesitarás dos contadores: uno para aprobados y otro para suspensos.
- Puedes usar un bucle para recorrer las notas.
- Dentro del bucle comprobarás si la nota es mayor o igual que 5.
- Al final tendrás que mostrar ambos contadores.

## Ejercicio 2: Encontrar el mayor

### Para pensar

- ¿Qué datos tienes?
- ¿Cómo puedes saber si un número es mayor que otro?
- ¿Qué valor puedes usar como punto de partida?
- ¿Qué estructura te permite recorrer el array?

### Pistas

- Necesitarás el array de números.
- Necesitarás una variable para guardar el mayor encontrado.
- Puedes empezar con el primer número del array.
- Recorre el array y compara cada número con el mayor actual.
- Si encuentras uno mayor, actualiza la variable.
- Al final tendrás que mostrar el mayor.

## Ejercicio 3: Calcular la media

### Para pensar

- ¿Qué datos tienes?
- ¿Qué tienes que calcular primero?
- ¿Cómo se obtiene una media?
- ¿Qué estructura te permite recorrer el array?

### Pistas

- Necesitarás el array de notas.
- Necesitarás una variable para acumular la suma.
- Recorre el array y suma cada nota.
- Después divide la suma entre el número de notas.
- Al final tendrás que mostrar la media.

## Ejercicio 4: Sumar una matriz

### Para pensar

- ¿Qué es una matriz?
- ¿Cómo puedes recorrer sus filas?
- ¿Cómo puedes recorrer los valores dentro de cada fila?
- ¿Qué necesitas acumular?

### Pistas

- La matriz es un array de arrays.
- Necesitarás un bucle para recorrer las filas.
- Dentro de ese bucle necesitarás otro bucle para recorrer los valores.
- Necesitarás una variable para acumular la suma total.
- Al final tendrás que mostrar la suma.

## Ejercicio 5: Reparto con resto

### Para pensar

- ¿Qué cantidad tienes que repartir?
- ¿Entre cuántas personas?
- ¿Qué operación te da la parte entera?
- ¿Qué operación te da lo que sobra?

### Pistas

- Necesitarás dos variables: total y personas.
- La división entera se puede obtener con `Math.floor()`.
- El resto se obtiene con el operador `%`.
- Tendrás que mostrar cuánto recibe cada persona y cuánto sobra.

## Ejercicio 6: Función de precio final

### Para pensar

- ¿Qué parámetros necesita la función?
- ¿Cuál es el parámetro opcional?
- ¿Qué valor por defecto tiene?
- ¿Cómo se calcula el precio final?
- ¿Qué debe devolver la función?

### Pistas

- La función se llama `precioFinal`.
- Recibe un precio y un porcentaje de descuento opcional.
- El porcentaje por defecto es 10.
- El descuento se calcula multiplicando el precio por el porcentaje  
  y dividiendo entre 100.
- El precio final es el precio menos el descuento.
- La función debe devolver el precio final.
