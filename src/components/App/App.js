import React from "react";
import { useLocalStorage } from "./useLocalStorage";
import { TodoItem } from "../TodoItem/TodoItem";
import { TodoCounter } from '../TodoCounter/TodoCounter';
import { TodoInput } from '../TodoInput/TodoInput';
import { TodoList } from '../TodoList/TodoList';
import { CreateTodoButton } from "../CreateTodoButton/CreateTodoButton";


// const defaultTodos = [
//   {text: " Cortar tomate", completed: false},
//   {text: " Tomar Agua", completed: false},
//   {text: " gym", completed: true},
//   {text: " estudiar", completed: true},
// ];


//   localStorage.setItem("TodosList" , JSON.stringify(defaultTodos));

function App() {
  const [todos, saveTodos] = useLocalStorage("TodosList", [])
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


