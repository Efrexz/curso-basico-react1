import React from "react";
import "./TodoInput.css";

function TodoInput({searchValue, setSearchValue}) {

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