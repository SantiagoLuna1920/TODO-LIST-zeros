//Importamos nuestros estilos globales para poder darle apariencia a la web desde esta misma
import { TodoList } from "./js/class/class.list";
import "./js/componentes";
import { crearHTML, listP } from "./js/componentes";
import "/src/styles.css";

export const todoList = new TodoList();

// todoList.todo.forEach( obj => crearHTML(obj) );

export let locaSet = JSON.parse(localStorage.getItem("todo"));

localStorage.setItem("todo", JSON.stringify( locaSet ));

console.log( locaSet );

locaSet.forEach( crearHTML )