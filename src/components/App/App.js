import React from "react";
import { AppUI } from "./AppUI";
import { useLocalStorage } from "./useLocalStorage";


// const defaultTodos = [
//   {text: " Cortar tomate", completed: false},
//   {text: " Tomar Agua", completed: false},
//   {text: " gym", completed: true},
//   {text: " estudiar", completed: true},
// ];


//   localStorage.setItem("TodosList" , JSON.stringify(defaultTodos));

function App() {

  const {
    item: todos,//asi podemos cambiar el nombre
    saveItem: saveTodos,
    error,
    loading
  } = useLocalStorage("TodosList", []);

  const [searchValue, setSearchValue] = React.useState("");

  //cantidad de tareas pendientes y completadas del titulo
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
    <AppUI
      loading = {loading}
      error = {error}
      totalTodos = {totalTodos}
      completedTodos = { completedTodos}
      searchValue = { searchValue}
      setSearchValue = {setSearchValue}
      searchedTodos = {searchedTodos}
      completeTodo = {completeTodo}
      deleteTodo = {deleteTodo}
    />
  )

}

export default App;


