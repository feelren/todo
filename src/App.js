import s from "./styles/dist/App.module.css";
import React, {useState} from "react";
import Form from "./components/Form";
import TodoItemList from "./components/TodoItemList";

function App() {
      const [todos, setTodos] = useState([
            {id: 0, text: "Погрызть морковку, стоя на голове", completed: false},
            {id: 1, text: "Пожарить бумагу", completed: true},
            {id: 2, text: "Выгулять тапочки", completed: false},
            {id: 3, text: "Лечь спать", completed: false},
      ]);

      let addTodo = (text) => {
            setTodos([...todos, {id: todos.length, text: text, completed: false}]);
      };

      let consoleState = () => {
            console.log(todos);
      };

      let completeTodo = (id) => {
            setTodos(
                  todos.map((todo) => {
                        if (todo.id === id) {
                              todo.completed = true;
                        }
                        return todo;
                  })
            );
      };

      return (
            <div className={s.wrapper}>
                  <Form addTodo={addTodo} />
                  <button onClick={consoleState}>console state!</button>
                  <TodoItemList todos={todos} completeTodo={completeTodo} />
            </div>
      );
}

export default App;
