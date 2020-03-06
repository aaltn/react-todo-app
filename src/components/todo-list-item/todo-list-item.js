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
        <div className="todo-list-item">
            

            <span className="float-right">                
                <button className="btn btn-outline-danger btn-sm"
                    type="button">
                    <i className="fa fa-trash-o"></i>
                </button>
                <button className="btn btn-outline-success btn-sm"
                    type="button">
                    <i className="fa fa-exclamation"></i>
                </button>              
            </span>

            <span
                className="todo-list-item-label"
                style={styleItem}>
                { label }
            </span> 


        </div>
    );
}


export default TodoListItem;