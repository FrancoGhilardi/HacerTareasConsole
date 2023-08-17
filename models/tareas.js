import { colours } from "../Components/colours.js";
import { Tarea } from "./tarea.js";

export class Tareas {
  _listado = {};

  get listadoArray() {
    const listado = [];
    Object.keys(this._listado).forEach((keys) =>
      listado.push(this._listado[keys])
    );
    return listado;
  }

  constructor() {
    this._listado = {};
  }

  //#region CREAR TAREA
  crearTarea(description = "") {
    const tareas = new Tarea(description);
    this._listado[tareas.id] = tareas;
  }
  //#endregion

  //#region METODO CARGAR TAREAS AL ARRAY
  cargarTareasFromArray(tareas = []) {
    tareas.forEach((tarea) => (this._listado[tarea.id] = tarea));
  }
  //#endregion

  //#region MOSTRAR LISTADO COMPLETO DE TAREAS
  listadoCompleto() {
    this.listadoArray.forEach((tarea, i) => {
      const index = i + 1;
      const { description, completadoEn } = tarea;
      const state = completadoEn ? "Complete" : "Pending";
      console.log(`${index}. ${description} :: ${state}`);
    });
  }
  //#endregion

  //#region MOSTRAR LISTADO DE TAREAS PENDIENTES Y COMPLETADAS
  listarPendientesCompletadas(complete = true) {
    let contador = 0;
    this.listadoArray.forEach((tarea) => {
      const { description, completadoEn } = tarea;
      const state = completadoEn ? completadoEn : "Pending";
      if (complete) {
        if (completadoEn) {
          contador += 1;
          console.log(
            `${colours.fg.yellow}${contador}. ${description} :: ${state}`
          );
        }
      } else {
        if (!completadoEn) {
          contador += 1;
          console.log(
            `${colours.fg.red}${contador}. ${description} :: ${state}`
          );
        }
      }
    });
  }
  //#endregion

  //#region BORRAR TAREA
  borrarTarea(id = "") {
    if (this._listado[id]) {
      delete this._listado[id];
      console.log(`${colours.fg.blue}Tarea borrada correctamente!`);
    } else {
      console.log(
        `${colours.fg.red}Hubo un error al borrar la tarea. Intente nuevamente!`
      );
    }
  }
  //#endregion

  //#region TOGGLE COMPLETE
  toogleComplete(ids = []) {
    ids.forEach((id) => {
      const tarea = this._listado[id];
      if (!tarea.completadoEn) {
        tarea.completadoEn = new Date().toISOString();
      }
    });

    this.listadoArray.forEach((task) => {
      if (!ids.includes(task.id)) {
        this._listado[task.id].completadoEn = null;
      }
    });
  }
  //#endregion
}
