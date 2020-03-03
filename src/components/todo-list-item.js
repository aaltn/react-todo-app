import React from 'react';

// const TodoListItem = (props) => {
//     return  <span>{ props.label }</span>;
// }

//деструктуризация:
const TodoListItem = ({ label, important = false }) => {

    const styleItem = {
        color: important ? 'tomato' : 'black'
    };

    return  <span style={styleItem}>{ label }</span>;
}


export default TodoListItem;