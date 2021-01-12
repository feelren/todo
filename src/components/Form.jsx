import React from "react";
import s from '../styles/dist/Form.module.css'

const Form = props => {
    let todoInput = React.createRef();

    let addTodo = () => {
        props.addTodo(todoInput.current.value)
    }

    return (
        <div className={s.wrapper}>
            <input type="text" placeholder='Что еще добавим..?' ref={todoInput} />
            <button onClick={addTodo}>Добавить в список</button>
        </div>
    )
};

export default Form;