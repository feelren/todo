import React from "react";
import s from '../styles/dist/TodoItem.module.css'


const TodoItem = props => {
    let isCompleted = () => {
        if (props.completed === true) return s.completed;
    }

    let completeTodo = () => {
        props.completeTodo(props.id);
    }

    let uncompleteTodo = () => {
        props.uncompleteTodo(props.id)
    }


    return (
        <div className={s.wrapper}>
            <div className={isCompleted()}>{props.text}</div>
            {
                props.completed ? <button className={s.lightgreen} onClick={uncompleteTodo}>Выполнено!</button> : <button className={s.lightred} onClick={completeTodo}>Выполнить</button>
            }
        </div>
    )
};

export default TodoItem;