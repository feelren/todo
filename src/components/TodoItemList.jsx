import React from "react";
import s from '../styles/dist/TodoItemList.module.css'
import TodoItem from "./TodoItem";


const TodoItemList = props => {

    let itemArray = [];

    props.todos.forEach(todo => {
        if (props.filter === 'all') {
            itemArray.push(
                <TodoItem key={todo.id} id={todo.id} text={todo.text} removeTodo={props.removeTodo} completed={todo.completed} toggleCompleting={props.toggleCompleting} />
            )
        } else if (props.filter === 'completed' && todo.completed) {
            itemArray.push(
                <TodoItem key={todo.id} id={todo.id} text={todo.text} removeTodo={props.removeTodo} completed={todo.completed} toggleCompleting={props.toggleCompleting} />
            )
        } else if (props.filter === 'uncompleted' && !todo.completed) {
            itemArray.push(
                <TodoItem key={todo.id} id={todo.id} text={todo.text} removeTodo={props.removeTodo} completed={todo.completed} toggleCompleting={props.toggleCompleting} />
            )
        }
    })

    return (
        <div className={s.wrapper}>
            {itemArray}
            <p>
                *Нажмите на элемент, чтобы выполнить/развыполнить :)
            </p>
        </div>
    )
};

export default TodoItemList;