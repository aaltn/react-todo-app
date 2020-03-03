import React from 'react';

import TodoListItem from './todo-list-item';

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
    const elements = todos.map((item) => {
        return (
            <li>
                <TodoListItem { ...item } />
            </li>
        );
    });    


    return (
        <ul>
            { elements }
        </ul>
    );
};



export default TodoList;