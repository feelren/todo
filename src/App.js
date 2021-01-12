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
	const [inputValue, setInputValue] = useState("");

	let addTodo = () => {
		if (inputValue) {
			setTodos([...todos, {id: todos.length, text: inputValue, completed: false}]);
			setInputValue("");
		}
	};

	let changeInputValue = (text) => {
		setInputValue(text);
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

	let uncompleteTodo = (id) => {
		setTodos(
			todos.map((todo) => {
				if (todo.id === id) {
					todo.completed = false;
				}
				return todo;
			})
		);
	};

	let uncompleteAll = () => {
		setTodos(
			todos.map((todo) => {
				todo.completed = false;
				return todo;
			})
		);
	};

	return (
		<div className={s.wrapper}>
			<Form inputValue={inputValue} changeInputValue={changeInputValue} addTodo={addTodo} />
			<TodoItemList todos={todos} completeTodo={completeTodo} uncompleteTodo={uncompleteTodo} uncompleteAll={uncompleteAll} />
		</div>
	);
}

export default App;
