import { colours } from "../Components/colours.js"
import { createInterface } from "readline"

//#region SHOW MENU
export const showMenu = () => {

    return new Promise(resolve => {
        console.clear()
        console.log(colours.fg.green, '==============================')
        console.log('     SELECCIONE UNA OPCION')
        console.log('==============================\n', colours.reset)

        console.log('1- Crear tarea')
        console.log('2- Listar tareas')
        console.log('3- Listar tareas completadas')
        console.log('4- Listar tareas pendientes')
        console.log('5- Completar tarea(s)')
        console.log('6- Borrar tarea')
        console.log('0- Salir\n')

        const readline = createInterface({
            input: process.stdin,
            output: process.stdout
        })

        readline.question('Seleccione una opcion: ', (opt) => {
            readline.close()
            resolve(opt)
        })
    })


}
//#endregion

//#region PAUSE
export const pause = () => {
    return new Promise(resolve => {
        const readline = createInterface({
            input: process.stdin,
            output: process.stdout
        })
        readline.question(`${colours.fg.green}\nPresione ENTER para continuar\n${colours.reset}`, () => {
            readline.close()
            resolve()
        })
    })
}
//#endregion
