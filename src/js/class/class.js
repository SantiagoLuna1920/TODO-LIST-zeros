//crearemos nuestras clases para crear nuestro proyecto


export class Todo {

    constructor ( tarea ) {
        this.tarea = tarea;
        this.id = new Date().getTime();
        this.completado = false;
    }

}



