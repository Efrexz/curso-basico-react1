import React from "react";
import { AppUI } from "./AppUI";
import { TodoProvider } from "../TodoContext/TodoContext";

function App() {
  //enviandolo como hijo podra tener acceso a todas las propiedades
  return (
    <TodoProvider >
      <AppUI />
    </TodoProvider>

  )

}

export default App;


