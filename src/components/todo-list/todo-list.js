import React from 'react';

import TodoListItem from '../todo-list-item';
import './todo-list.css';

const TodoList = ({ todos }) => {

    // const elements = todos.map((item) => {
    //     return (
    //         <li>
    //             <TodoListItem 
    //                 label={item.label}
    //                 important={item.important}
    //             />
    //         </li>
    //     );
    // });

    //или тоже самое используя Spread-оператор для объекта чтобы передать 
    // каждое свойство объекта внутрь компонета:
    // const elements = todos.map((item) => {
    //     return (
    //         <li key={item.id}>
    //             <TodoListItem { ...item } />
    //         </li>
    //     );
    // });    

    const elements = todos.map((item) => {

        //каждому JSX элементу в массиве нужно уникальное свойство key
        //исключим передачу свойства id в элемент TodoListItem используя рест-параметр 
        const { id, ...itemProps } = item;

        return (
            <li key={id}  className="list-group-item">
                <TodoListItem { ...itemProps } />
            </li>
        );
    });    


    return (
        <ul  className="list-group  todo-list">
            { elements }
        </ul>
    );
};



export default TodoList;