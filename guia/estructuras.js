function mostrar(id, texto) {
  const elemento = document.querySelector(id);
  elemento.textContent = texto;
}

function ejemploVariables() {
  const precio = 40;
  let total = 0;

  total = precio * 2;

  mostrar("#resultadoVariables", "Total: " + total + " €");
}

function ejemploIf() {
  const nota = 8;

  let mensaje;

  if (nota >= 9) {
    mensaje = "Sobresaliente";
  } else if (nota >= 7) {
    mensaje = "Notable";
  } else if (nota >= 5) {
    mensaje = "Aprobado";
  } else {
    mensaje = "Suspenso";
  }

  mostrar("#resultadoIf", mensaje);
}

function ejemploTernario() {
  const importe = 120;

  const descuento = importe >= 100 ? 10 : 0;

  mostrar("#resultadoTernario", "Descuento: " + descuento + " %");
}

function ejemploFor() {
  let lineas = [];

  for (let i = 1; i <= 5; i++) {
    lineas.push(i);
  }

  mostrar("#resultadoFor", lineas.join(", "));
}

function ejemploFuncion() {
  function calcularTotal(precio, unidades) {
    return precio * unidades;
  }

  const total = calcularTotal(4, 3);

  mostrar("#resultadoFuncion", "Total: " + total + " €");
}

function ejemploFlecha() {
  const doble = (numero) => numero * 2;

  mostrar("#resultadoFlecha", "El doble de 4 es " + doble(4));
}

function ejemploCallback() {
  function aplicar(numero, operacion) {
    return operacion(numero);
  }

  const triplicar = (numero) => numero * 3;

  mostrar("#resultadoCallback", "Resultado: " + aplicar(4, triplicar));
}

function ejemploArray() {
  const precios = [4, 6, 8];

  mostrar(
    "#resultadoArray",
    "Primer precio: " + precios[0] +
    " — Último precio: " + precios[precios.length - 1]
  );
}

function ejemploObjeto() {
  const producto = {
    nombre: "Cuaderno",
    precio: 4
  };

  mostrar(
    "#resultadoObjeto",
    producto.nombre + " — " + producto.precio + " €"
  );
}

function ejemploFilter() {
  const notas = [4, 7, 9, 3];

  const aprobados = notas.filter((nota) => nota >= 5);

  mostrar("#resultadoFilter", "Aprobados: " + aprobados.join(", "));
}

function ejemploMap() {
  const precios = [10, 20, 30];

  const dobles = precios.map((precio) => precio * 2);

  mostrar("#resultadoMap", "Dobles: " + dobles.join(", "));
}

function ejemploFind() {
  const productos = [
    { id: 1, nombre: "Libro" },
    { id: 2, nombre: "Lápiz" }
  ];

  const encontrado = productos.find((producto) => producto.id === 2);

  mostrar("#resultadoFind", "Producto encontrado: " + encontrado.nombre);
}

function ejemploReduce() {
  const notas = [6, 8, 4, 10];

  const suma = notas.reduce((acumulado, nota) => acumulado + nota, 0);

  mostrar("#resultadoReduce", "Suma total: " + suma);
}

function ejemploSpread() {
  const notas = [5, 8, 6];

  const masNotas = [...notas, 9];

  mostrar(
    "#resultadoSpread",
    "Original: " + notas.join(", ") +
    " — Nuevo: " + masNotas.join(", ")
  );
}

function ejemploDom() {
  mostrar("#resultadoDom", "Este texto se ha escrito desde JavaScript");
}
