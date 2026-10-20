function buscarPersona(personas, nombreBuscado) {
  for (const persona of personas) {
    if (persona.nombre === nombreBuscado) {
      return persona;
    }
  }

  return null;
}

function ejercicio6() {
  const personas = [
    { nombre: "Ana", edad: 20 },
    { nombre: "Luis", edad: 16 }
  ];

  const ana = buscarPersona(personas, "Ana");
  const luis = buscarPersona(personas, "Luis");

  let mensaje;

  if (ana !== null) {
    mensaje = "Ana encontrada";
  } else {
    mensaje = "Ana no encontrada";
  }

  if (luis !== null) {
    mensaje += " — Luis encontrado";
  } else {
    mensaje += " — Luis no encontrado";
  }

  const resultado = document.querySelector("#resultado6");
  resultado.textContent = mensaje;
}
