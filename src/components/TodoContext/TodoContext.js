import React from "react";
import { useLocalStorage } from "./useLocalStorage";

const TodoContext = React.createContext();

function TodoProvider({children}) {//aqui encapsulamos la logica que queremos compartir entre varios de nuestros componentes
    const {
        item: todos,//asi podemos cambiar el nombre
        saveItem: saveTodos,
        error,
        loading
        } = useLocalStorage("TodosList", []);

    const [searchValue, setSearchValue] = React.useState("");
    const [openModal, setOpenModal] = React.useState(false);

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
        <TodoContext.Provider value={{
            loading,
            error,
            totalTodos,
            completedTodos,
            searchValue,
            setSearchValue,
            searchedTodos,
            completeTodo,
            deleteTodo,
            openModal,
            setOpenModal,
        }}>
            {children}
        </TodoContext.Provider>
    )
}

export { TodoContext, TodoProvider };