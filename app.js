import {
  inquirerMenu,
  listadoDeleteTask,
  pause,
  readInput,
  confirm,
  showListCheckList,
} from "./helpers/inquirer.js";
import { readDatabase, saveDatabase } from "./helpers/saveFile.js";
import { Tareas } from "./models/tareas.js";

console.clear();

const main = async () => {
  let opt = "";
  const tareas = new Tareas();

  const tareasDb = readDatabase();

  if (tareasDb) {
    tareas.cargarTareasFromArray(tareasDb);
  }

  do {
    opt = await inquirerMenu();

    switch (opt) {
      case "1":
        const desc = await readInput("Test Description:");
        tareas.crearTarea(desc);
        break;
      case "2":
        tareas.listadoCompleto();
        break;
      case "3":
        tareas.listarPendientesCompletadas(true);
        break;
      case "4":
        tareas.listarPendientesCompletadas(false);
        break;
      case "5":
        const ids = await showListCheckList(tareas.listadoArray);
        tareas.toogleComplete(ids);
        break;
      case "6":
        const id = await listadoDeleteTask(tareas.listadoArray);
        if (id !== "0") {
          const ok = await confirm("¿Esta seguro que desea borrar?");
          if (ok) tareas.borrarTarea(id);
        }
        break;
    }

    saveDatabase(tareas.listadoArray);

    await pause();
  } while (opt !== "0");
};

main();
