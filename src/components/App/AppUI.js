import { TodoItem } from "../TodoItem/TodoItem";
import { TodoCounter } from '../TodoCounter/TodoCounter';
import { TodoInput } from '../TodoInput/TodoInput';
import { TodoList } from '../TodoList/TodoList';
import { TodosLoading } from '../TodosLoading/TodosLoading';
import { TodosError } from '../TodosError/TodosError';
import { EmptyTodos } from '../EmptyTodos/EmptyTodos';
import { CreateTodoButton } from "../CreateTodoButton/CreateTodoButton";
import { TodoContext } from "../TodoContext/TodoContext";




function AppUI () {
    return (
        <>
            <TodoCounter />
            <TodoInput />

            <TodoContext.Consumer>
                {({
                    loading,
                    error,
                    searchedTodos,
                    completeTodo,
                    deleteTodo,
                }) => (
                    <TodoList>
                    {loading ? (<>
                        <TodosLoading/>
                        <TodosLoading/>
                        <TodosLoading/>
                        <TodosLoading/>
                    </>)
                    : null}

                    {error ?  <TodosError/> : null}
                    {(!loading && searchedTodos.length === 0)? <EmptyTodos/> : null}

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
                )}
            </TodoContext.Consumer>

            <CreateTodoButton/>
        </>
    );
}

export { AppUI };