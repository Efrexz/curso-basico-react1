import "./CreateTodoButton.css";

function CreateTodoButton() {
    return <button className="CreateTodoButton"
    onClick={(event) =>{
        console.log("click en boton");
        console.log(event);
        console.log(event.target);
        }
    }
    >+</button>;
}

export { CreateTodoButton };
