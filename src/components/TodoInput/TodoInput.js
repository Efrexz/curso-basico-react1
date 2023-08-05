import React from "react";
import "./TodoInput.css";
import { TodoContext } from "../TodoContext/TodoContext";

function TodoInput() {
    const {searchValue, setSearchValue} = React.useContext(TodoContext)

    return <input
    placeholder="Cortar cebolla"
    className="TodoSearch"
    value = {searchValue}
    onChange={(event) => {
        setSearchValue(event.target.value);
    }}
    />;
}
export { TodoInput };
