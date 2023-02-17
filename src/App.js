import { useState } from "react";
import styles from "./App.module.css";

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  const addTodo = e => {
    setTodos([...todos, input]);
    setInput('');
  }

  return (
    <div className="App">
      <h1>Hello World</h1>
      <input value={input} onChange={e => setInput(e.target.value)} type="text" />
      <button onClick={addTodo}>Add todo</button>

      <h2>List of Todos</h2>
      {todos.map((todo) => (
        <p>{todo}</p>
      ))}
    </div>
  );
}

export default App;
