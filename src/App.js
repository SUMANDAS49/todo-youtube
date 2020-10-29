import React, {useState} from "react";
import Form from "../src/components/Form";
import TodoList from "../src/components/TodoList";
import './App.css';

function App() {
  // const [inputText, setInputText] = useState(""); 
  const [todos, setTodos] = useState([]);

   return (
    <div className="App">
      <header>Sarthak's ToDo List</header>

      <Form todos={todos} setTodos={setTodos} />
      
      <TodoList setTodos={setTodos} todos={todos}/>
    
    </div>
  );
}

export default App;
