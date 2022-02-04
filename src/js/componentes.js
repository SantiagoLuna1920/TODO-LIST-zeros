// import { todoList } from "..";
// import { todoList } from "..";
import { Todo } from "./class/class";
import { locaSet, todoList } from "..";
import "/src/css/componentes.css";

const inputTT = document.querySelector(".inputT");
export const listP = document.querySelector(".listP");

inputTT.addEventListener( "keyup", ( e ) => {
    
    if ( e.keyCode === 13 && e.target.value.length > 0 ) {
        const todo = new Todo( e.target.value );
        todoList.nuevoTodo( todo );
        // console.log(todoList);
        // console.log(listP);
        crearHTML( todo );
        inputTT.value  = "";
        // localStorage.setItem("todo", []);
        
        
        localStorage.setItem("todo", JSON.stringify( todoList.todo ) );
        
    }

} );


export const crearHTML = ( task ) => {

    const html = `<li id="${ task.id }">
    <div class="listContainer">
        <input id="${ task.id }" type="checkbox" class="${ ( task.completado ) ? "selected" : "" }"  ${ ( task.completado ) ? "checked" : "" }>
        <label class="${ ( task.completado ) ? "task" : "" }">${task.tarea}</label>
        <button class="destroy">Eliminar</button>
    </div>
</li>`

    const div = document.createElement("div");

    div.innerHTML = html;

    listP.append( div.firstElementChild );

    return div.firstElementChild;

}

listP.addEventListener( 'click', ( e ) =>{
    if ( e.target.localName === "button" ) {
        // console.log("Hola");
        const id = e.target.parentElement.parentElement;
        // console.log(id.getAttribute("id"));
        listP.removeChild( id );

        const local = JSON.parse( localStorage.getItem("todo") );
        console.log(local);
        const newLocal = local.filter( obj => obj.id != id.getAttribute("id") );

        todoList.todo = local.filter( obj => obj.id != id.getAttribute("id") );

        //copiar el codigo de siguiente abajo en la siguiente caracteristica
        localStorage.setItem( "todo", JSON.stringify(newLocal) );

        console.log( newLocal );

        

    } else if ( e.target.localName === "input") {
        console.log("input");
        if ( e.target.classList.contains("selected") ) {
            e.target.classList.remove("selected");
            e.target.parentElement.getElementsByTagName("label")[0].classList.remove("task");
            let getLocal = JSON.parse( localStorage.getItem("todo") );
            console.log(e.target.getAttribute("id"));
            for ( const i in getLocal ) {
                if ( getLocal[i].id == e.target.getAttribute("id") ) {
                    getLocal[i].completado = false;
                }
            }
            //pegar aqui
            // localStorage.setItem( "todo", JSON.stringify(newLocal) );
            localStorage.setItem("todo", JSON.stringify(getLocal));
            console.log(e.target);
        } else {
            // console.log("tengo selected");
            e.target.classList.add("selected");
            e.target.parentElement.getElementsByTagName("label")[0].classList.add("task");
            let getLocal = JSON.parse( localStorage.getItem("todo") );
            console.log(e.target.getAttribute("id"));
            for ( const i in getLocal ) {
                if ( getLocal[i].id == e.target.getAttribute("id") ) {
                    getLocal[i].completado = true;
                }
            }
            //pegar aqui
            // localStorage.setItem( "todo", JSON.stringify(newLocal) );
            localStorage.setItem("todo", JSON.stringify(getLocal));
        }
    }
});


