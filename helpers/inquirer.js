import inquirer from "inquirer";
import { colours } from "../Components/colours.js";

//#region PREGUNTAS MENU
const preguntas = [
  {
    type: "list",
    name: "option",
    message: "¿Qué desea hacer?",
    choices: [
      { value: "1", name: "1- Crear tarea" },
      { value: "2", name: "2- Listar tareas" },
      { value: "3", name: "3- Listar tareas completadas" },
      { value: "4", name: "4- Listar tareas pendientes" },
      { value: "5", name: "5- Completar tarea(s)" },
      { value: "6", name: "6- Borrar tarea" },
      { value: "0", name: "0- Salir" },
    ],
  },
];
//#endregion

//#region MENU
export const inquirerMenu = async () => {
  console.clear();
  console.log(colours.fg.green, "==============================");
  console.log("     SELECCIONE UNA OPCION");
  console.log("==============================\n", colours.reset);

  const { option } = await inquirer.prompt(preguntas);
  return option;
};
//#endregion

//#region PREGUNTAS PAUSA
const question = [
  {
    type: "input",
    name: "enter",
    message: `${colours.fg.green}Presione ENTER para continuar${colours.reset}`,
  },
];
//#endregion

//#region PAUSE
export const pause = async () => await inquirer.prompt(question);
//#endregion

//#region READ INPUT
export const readInput = async (message) => {
  const question = [{ type: "input", name: "desc", message }];

  const { desc } = await inquirer.prompt(question);

  return desc;
};
//#endregion

//#region LISTADO PARA BORRAR TAREAS
export const listadoDeleteTask = async (tareas = []) => {
  const choicesDelete = tareas.map((task, i) => {
    const index = i + 1;
    return {
      value: task.id,
      name: `${index}. ${task.description}`,
    };
  });

  choicesDelete.unshift({
    value: "0",
    name: "0. Cancelar",
  });

  const questionDelete = [
    { type: "list", name: "id", message: "Borrar", choices: choicesDelete },
  ];

  const { id } = await inquirer.prompt(questionDelete);

  return id;
};
//#endregion

//#region CONFIRMAR
export const confirm = async (message) => {
  const question = [{ type: "confirm", name: "ok", message }];

  const { ok } = await inquirer.prompt(question);

  return ok;
};
//#endregion

//#region MOSTRAR LISTADO CHECKLIST
export const showListCheckList = async (tareas = []) => {
  const choicesDelete = tareas.map((task, i) => {
    const index = i + 1;
    return {
      value: task.id,
      name: `${index}. ${task.description}`,
      checked: task.completadoEn ? true : false,
    };
  });

  const questionDelete = [
    {
      type: "checkbox",
      name: "ids",
      message: "Seleccione",
      choices: choicesDelete,
    },
  ];

  const { ids } = await inquirer.prompt(questionDelete);

  return ids;
};
//#endregion
