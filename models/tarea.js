import { v4 } from "uuid"

export class Tarea {
    id = ''
    description = ''
    completadoEn = null

    constructor(description) {
        this.id = v4()
        this.description = description
    }
}