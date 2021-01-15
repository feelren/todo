import React from "react";
import s from '../styles/dist/TodoItem.module.css'


const TodoItem = props => {
    let isCompleted = () => {
        if (props.completed === true) return s.completed;
    }

    let toggleCompleting = (id) => {
        props.toggleCompleting(id)
    }

    let removeTodo = () => {
        props.removeTodo(props.id)

    }


    return (
        <div className={s.wrapper} onClick={() => (toggleCompleting(props.id))}>
            <div className={isCompleted() + ' ' + s.name}>{props.text}</div>
            <div className={s.right}>
                {props.completed ? <button className={s.lightgreen + ' ' + s.status} >выполнено</button> : <button className={s.lightred + ' ' + s.status} >не выполнено</button>}
                <div className={s.deleteButton} onClick={removeTodo}>&#10006;</div>
            </div>
        </div >
    )
};

export default TodoItem;