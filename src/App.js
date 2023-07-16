import { TodoItem } from "./components/TodoItem";
import { TodoCount } from './components/TodoCount';
import { TodoInput } from './components/TodoInput';
import { TodoList } from './components/TodoList';
import './App.css';

function App() {
  return (
    <div className="App">

      <TodoCount/>
      <TodoInput/>

      <TodoList>
        <TodoItem/>
        <TodoItem/>
        <TodoItem/>
      </TodoList>

    </div>
  );
}



export default App;
