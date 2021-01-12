import React from "react";
import s from '../styles/dist/Form.module.css'

const Form = props => {

    let input = React.createRef();

    let changeInputValue = () => {
        let text = input.current.value;
        props.changeInputValue(text);
    }

    return (
        <div className={s.wrapper}>
            <input type="text" placeholder='Что еще добавим..?' ref={input} value={props.inputValue} onChange={changeInputValue} />
            <button onClick={props.addTodo}>Добавить в список</button>
        </div>
    )
};

export default Form;