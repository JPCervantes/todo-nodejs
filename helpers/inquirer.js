const inquirer = require("inquirer");
require("colors");

const questions = [
  {
    type: "list",
    name: "option",
    message: "¿Qué desea hacer?",
    choices: [
      { value: "1", name: "1. Crear tarea" },
      { value: "2", name: "2. Listar tareas" },
      { value: "3", name: "3. Listar tareas completadas" },
      { value: "4", name: "4. Listar tareas pendientes" },
      { value: "5", name: "5. Completar tarea" },
      { value: "6", name: "6. Borrar tarea" },
      { value: "0", name: "0. Salir" },
    ],
  },
];

const inquirerMenu = async () => {
  console.clear();

  console.log("================================".yellow);
  console.log("==== Seleccione una opción =====".yellow);
  console.log("================================\n".yellow);

  const { option } = await inquirer.prompt(questions);

  return option;
};

const pauseConfig = [
  {
    type: "input",
    name: "pause",
    message: "Presiona cualquier tecla para continuar\n".yellow,
    choices: [
      { value: "1", name: "1. Crear tarea" },
      { value: "2", name: "2. Listar tareas" },
      { value: "3", name: "3. Listar tareas completadas" },
      { value: "4", name: "4. Listar tareas pendientes" },
      { value: "5", name: "5. Completar tarea" },
      { value: "6", name: "6. Borrar tarea" },
      { value: "0", name: "0. Salir" },
    ],
  },
];

const pause = async () => {
  const { pause } = await inquirer.prompt(pauseConfig);

  return pause;
};

module.exports = {
  inquirerMenu,
  pause,
};
