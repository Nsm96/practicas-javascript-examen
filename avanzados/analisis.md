# Análisis — Ejercicios avanzados

Antes de mirar una solución, intenta responder a las preguntas de cada  
ejercicio. Después, si lo necesitas, lee las pistas.

## Ejercicio 1: Crear un objeto persona

### Para pensar

- ¿Qué propiedades necesita el objeto?
- ¿Cómo se accede a cada propiedad?
- ¿Cómo se construye el mensaje final?

### Pistas

- Necesitarás un objeto llamado `persona`.
- El objeto tendrá `nombre`, `edad` y `ciudad`.
- Puedes acceder a las propiedades con punto.
- Tendrás que construir el mensaje y mostrarlo.

## Ejercicio 2: Recorrer un array de objetos

### Para pensar

- ¿Qué es un array de objetos?
- ¿Cómo puedes recorrerlo?
- ¿Cómo accedes a las propiedades de cada objeto?
- ¿Cómo construyes cada línea del resultado?

### Pistas

- El array contiene objetos.
- Cada objeto tiene `nombre` y `precio`.
- Puedes usar un bucle para recorrer el array.
- Dentro del bucle accederás a `nombre` y `precio`.
- Tendrás que mostrar cada producto.

## Ejercicio 3: Filtrar productos caros

### Para pensar

- ¿Qué condición define un producto caro?
- ¿Cómo puedes comprobar esa condición?
- ¿Qué necesitas mostrar?

### Pistas

- Necesitarás el array de productos.
- Recorre el array y comprueba si el precio es mayor que 50.
- Si cumple la condición, muestra el producto.
- Si no, no hagas nada.

## Ejercicio 4: Contar mayores de edad

### Para pensar

- ¿Qué datos tienes?
- ¿Qué condición define un mayor de edad?
- ¿Qué necesitas contar?
- ¿Qué estructura te permite recorrer el array?

### Pistas

- Necesitarás el array de personas.
- Necesitarás un contador.
- Recorre el array y comprueba si la edad es mayor o igual que 18.
- Si cumple, incrementa el contador.
- Al final tendrás que mostrar el contador.

## Ejercicio 5: Calcular el total de una compra

### Para pensar

- ¿Qué datos tienes?
- ¿Qué tienes que calcular para cada producto?
- ¿Cómo se obtiene el total?
- ¿Qué necesitas acumular?

### Pistas

- Cada producto tiene precio y cantidad.
- El subtotal de cada producto es precio por cantidad.
- Necesitarás una variable para acumular el total.
- Recorre el array y suma cada subtotal.
- Al final tendrás que mostrar el total.

## Ejercicio 6: Función que busca una persona

### Para pensar

- ¿Qué parámetros necesita la función?
- ¿Qué debe devolver si encuentra la persona?
- ¿Qué debe devolver si no la encuentra?
- ¿Cómo puedes recorrer el array?
- ¿Cómo puedes comprobar el nombre?

### Pistas

- La función se llama `buscarPersona`.
- Recibe un array y un nombre.
- Recorre el array y compara cada nombre con el buscado.
- Si lo encuentra, devuelve la persona.
- Si termina el bucle sin encontrarlo, devuelve `null`.
