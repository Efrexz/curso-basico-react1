import React from "react";
import { TodoItem } from "./components/TodoItem/TodoItem";
import { TodoCounter } from './components/TodoCounter/TodoCounter';
import { TodoInput } from './components/TodoInput/TodoInput';
import { TodoList } from './components/TodoList/TodoList';
import { CreateTodoButton } from "./components/CreateTodoButton/CreateTodoButton";


// const defaultTodos = [
//   {text: " Cortar tomate", completed: false},
//   {text: " Tomar Agua", completed: false},
//   {text: " gym", completed: true},
//   {text: " estudiar", completed: true},
// ];


//   localStorage.setItem("TodosList" , JSON.stringify(defaultTodos));

function App() {

  let parsedTodos;
  if(!localStorage.getItem("TodosList")){//si no hay nada en localstorage enviamos un array para que no se rompa la app
    parsedTodos = [];//enviamos array para que no se rompa la app
  }else{//convertimos el string en un array para poder iterar
    parsedTodos = JSON.parse(localStorage.getItem("TodosList"));
  }

  const [todos, setTodos] = React.useState([...parsedTodos]);
  const [searchValue, setSearchValue] = React.useState("");

  //cantidad de tareas pendientes y completadas
  const completedTodos = todos.filter(todo =>
    todo.completed).length;
  const totalTodos = todos.length;

    //filtrar por tareas (nos devuelve un array con las coincidencias )
  const searchedTodos = todos.filter(
    (todo) => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
        }
  );

  function saveTodos(newTodos){//funcion para actualizar localstorage cada vez que agreguemos o eliminemos una task
    const localStorageStringify = JSON.stringify(newTodos);
    localStorage.setItem("TodosList" , localStorageStringify);
    setTodos(newTodos)
  };

  const completeTodo = (task) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text === task
    );
    newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
    saveTodos(newTodos);
  }

  const deleteTodo = (task) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text === task
    );
    newTodos.splice(todoIndex,1);
    saveTodos(newTodos);
  }

  return (
    <>
      <TodoCounter
      total={totalTodos}
      completed={completedTodos}/>

      <TodoInput
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />

      <TodoList>
        {searchedTodos.map(todo => (
          //recorremos el array de searchedTodos que seria el array de las coincidencias y estas son las que renderizamos
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete = {() => completeTodo(todo.text)}
            onDelete = {() => deleteTodo(todo.text)}
            />
        ))}
      </TodoList>

      <CreateTodoButton/>
    </>
  );
}

export default App;


