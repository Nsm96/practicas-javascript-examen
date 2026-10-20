function ejercicio4() {
  const personas = [
    { nombre: "Ana", edad: 20 },
    { nombre: "Luis", edad: 16 },
    { nombre: "Marta", edad: 25 }
  ];

  let mayores = 0;

  for (const persona of personas) {
    if (persona.edad >= 18) {
      mayores++;
    }
  }

  const resultado = document.querySelector("#resultado4");
  resultado.textContent = "Mayores de edad: " + mayores;
}
