import { useContext } from "react";
import { TodoContext } from "../TodoContext/TodoContext";
import "./CreateTodoButton.css";


function CreateTodoButton() {
    const {setOpenModal, openModal} = useContext(TodoContext)
    return <button className="CreateTodoButton"
    onClick = {() => setOpenModal(!openModal)}
    >+</button>;
}

export { CreateTodoButton };
