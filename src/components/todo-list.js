import React from 'react';

import TodoListItem from './todo-list-item';

const TodoList = () => {

    // const items = ['Learn React' , 'Build Awesome App'];
    //        <li>{ items[0] }</li>
    //        <li>{ items[1] }</li>}

    //         important={true} /></li>

    return (
        <ul>
            <li>
                <TodoListItem label="Drink coffee" />
            </li>
            <li>
                <TodoListItem 
                    label="Build React App" 
                    important />
            </li>
            <li>
                <TodoListItem label="give to the world my Todo App" />
            </li>
        </ul>
    );
};



export default TodoList;