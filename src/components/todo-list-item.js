import React from 'react';

import './todo-list-item.css';

// const TodoListItem = (props) => {
//     return  <span>{ props.label }</span>;
// }

//деструктуризация:
const TodoListItem = ({ label, important = false, done = false }) => {

    const styleItem = {
        color: important ? 'steelblue' : 'black',
        fontWeight: important ? 'bold' : 'normal',
        textDecoration: done ? 'line-through' : 'normal'
    };

    return  (
        <span className="todo-list-item">
            <span
                className="todo-list-item-label"
                style={styleItem}>
                { label }
            </span>        

            <button className="btn btn-outline-success btn-sm float-right"
                type="button">
                    <i className="fa fa-exclamation"></i>
            </button>

            <button className="btn btn-outline-danger btn-sm float-right"
                type="button">
                    <i className="fa fa-trash-o"></i>
            </button>
        </span>
    );
}


export default TodoListItem;