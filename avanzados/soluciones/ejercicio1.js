function ejercicio1() {
  const persona = {
    nombre: "Ana",
    edad: 30,
    ciudad: "Madrid"
  };

  const mensaje =
    persona.nombre + " tiene " + persona.edad +
    " años y vive en " + persona.ciudad;

  const resultado = document.querySelector("#resultado1");
  resultado.textContent = mensaje;
}
