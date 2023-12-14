const Chance = require("chance");
const chance = new Chance();

const randomEmail = chance.email();
const randomAge = chance.age();
const randomName = chance.name();

// console.log("Nombre " , randomName);
// console.log("Edad ", randomAge);
// console.log("Email ", randomEmail);

// -----------------------------
const readlineSync = require("readline-sync");

const { mostrarListaEstudiantes } = require("./app2");

const registrarEstudiantes = () => {
  const cantidadEstudiantes = readlineSync.question(
    "Ingrese cantidad de estudiantes: "
  );
  const estudiantes = [];

  for (let i = 0; i < cantidadEstudiantes; i++) {
    const nombre = readlineSync.question("Ingrese Nombre: ");
    const edad = readlineSync.question("Ingrese edad: ");

    const estudiante = {
      nombre,
      edad,
    };
    estudiantes.push(estudiante);
  }
  mostrarListaEstudiantes(estudiantes);
};

registrarEstudiantes();
