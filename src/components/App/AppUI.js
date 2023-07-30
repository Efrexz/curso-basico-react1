import { TodoItem } from "../TodoItem/TodoItem";
import { TodoCounter } from '../TodoCounter/TodoCounter';
import { TodoInput } from '../TodoInput/TodoInput';
import { TodoList } from '../TodoList/TodoList';
import { CreateTodoButton } from "../CreateTodoButton/CreateTodoButton";

function AppUI ({
    totalTodos,
    completedTodos,
    searchValue,
    setSearchValue,
    searchedTodos,
    completeTodo,
    deleteTodo,
}) {
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

export { AppUI };