import React from "react";
import s from '../styles/dist/Form.module.css'

const Form = props => {
    return (
        <div className={s.wrapper}>
            <input type="text" placeholder='Что еще добавим..?' />
            <button>Добавить в список</button>
        </div>
    )
};

export default Form;