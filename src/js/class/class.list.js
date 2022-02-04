import { crearHTML } from "../componentes";


export class TodoList {

    constructor () {
        // this.todo = [];
        this.cargarLocalSotrage();
        // for ( const i in this.todo ) {
            
        //     crearHTML( this.todo[i] );
        // }
    }

    nuevoTodo ( todo ) {
        this.todo.push( todo );
        // localStorage.setItem("todo", JSON.stringify( this.todo));
    }

    // eliminarTodo ( id ) {
    //     this.todo = this.todo.filter( obj => obj.id != id );
    // }
 
    cargarLocalSotrage() {
        ( localStorage.getItem("todo") ) ? this.todo = JSON.parse(localStorage.getItem("todo")) : this.todo = [];
    }

};