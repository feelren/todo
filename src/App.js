import s from "./styles/dist/App.module.css";
import React, {useState} from "react";
import Form from "./components/Form";
import TodoItemList from "./components/TodoItemList";
import Filter from "./components/Filter";

function App() {
	const [todos, setTodos] = useState([
		{id: 0, text: "Погрызть морковку", completed: false},
		{id: 1, text: "Пожарить бумагу", completed: true},
		{id: 2, text: "Выгулять тапочки", completed: false},
		{id: 3, text: "Лечь спать", completed: false},
	]);

	const [filter, setFilter] = useState("all");

	const [inputValue, setInputValue] = useState("");

	let toggleFilter = (e) => {
		setFilter(e.target.value);
	};

	let addTodo = () => {
		if (inputValue) {
			setTodos([...todos, {id: Date.now(), text: inputValue, completed: false}]);
			setInputValue("");
		}
	};

	let changeInputValue = (text) => {
		setInputValue(text);
	};

	let toggleCompleting = (id) => {
		setTodos(
			todos.map((todo) => {
				if (todo.id === id) {
					todo.completed = !todo.completed;
				}
				return todo;
			})
		);
	};

	let removeTodo = (id) => {
		let index = todos.findIndex((todo) => todo.id === id);
		setTodos(todos.splice(index, 1));
	};

	return (
		<div className={s.wrapper}>
			<Form inputValue={inputValue} changeInputValue={changeInputValue} addTodo={addTodo} />
			<div className={s.row}>
				<Filter filter={filter} toggleFilter={toggleFilter} />
				<TodoItemList todos={todos} filter={filter} toggleCompleting={toggleCompleting} removeTodo={removeTodo} />
			</div>
		</div>
	);
}

export default App;
