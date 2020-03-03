import React from 'react';

import TodoListItem from './todo-list-item';

const TodoList = () => {

    // const items = ['Learn React' , 'Build Awesome App'];
    //        <li>{ items[0] }</li>
    //        <li>{ items[1] }</li>}

    
    return (
        <ul>
            <li>
                <TodoListItem />
            </li>
            <li>
                <TodoListItem />
            </li>
            <li>
                <TodoListItem />
            </li>
        </ul>
    );
};



export default TodoList;