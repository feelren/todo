import React from "react";
import s from '../styles/dist/Filter.module.css'

const Filter = props => {

    return (
        <div className={s.wrapper}>
            <label><input type="radio" name='filter' value='all' onChange={props.toggleFilter} checked={props.filter === 'all' ? true : false} />Показать всё</label>
            <label><input type="radio" name='filter' value='completed' onChange={props.toggleFilter} checked={props.filter === 'completed' ? true : false} />Только выполненное</label>
            <label><input type="radio" name='filter' value='uncompleted' onChange={props.toggleFilter} checked={props.filter === 'uncompleted' ? true : false} />Только невыполненное</label>
        </div>

    )
};

export default Filter;