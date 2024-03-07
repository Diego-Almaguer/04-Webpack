import './style.css';
import { Todo } from './js/classes/todo.class';
import { TodoList } from './js/classes/todo-list.class';

const tarea=new  Todo('Aprender javascript');

const todoList=new TodoList();
todoList.nuevoTodo(tarea);

console.log(todoList);