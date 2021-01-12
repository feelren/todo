import React from "react";
import s from '../styles/dist/TodoItemList.module.css'
import TodoItem from "./TodoItem";


const TodoItemList = props => {

    let todoList = props.todos.map(todo => {
        return (
            <TodoItem key={todo.id} id={todo.id} text={todo.text} completed={todo.completed} uncompleteTodo={props.uncompleteTodo} completeTodo={props.completeTodo} />
        )
    })

    return (
        <div className={s.wrapper}>
            {todoList}
            <button className={s.uncomplete_button} onClick={props.uncompleteAll}>Сделать все невыполненным!</button>
        </div>
    )
};

export default TodoItemList;