import React from 'react';
import ReactDOM from 'react-dom';

import AppHeader from './components/app-header';
import SearchPanel from './components/search-panel';
import TodoList from './components/todo-list';
import ItemStatusFilter from './components/item-status-filter';

import './index.css';

const App = () => {

    const todoData = [
        { label: 'Drink Coffee', important: false, done: true, id: 1 },
        { label: 'Learn React', important: false, id: 2 },
        { label: 'Build Awesome React App', important: true, id: 3 },
        { label: 'Give to the world my Todo App', important: false, id: 4 }
    ];

    return (
        <div className="todo-app">            
            <AppHeader toDo={3} done={1} />
            <div className="top-panel  d-flex">
                <SearchPanel /> 
                <ItemStatusFilter />
            </div>  

            <TodoList todos={todoData} />
        </div>
    );
};

ReactDOM.render(<App />,
    document.getElementById('root'));
    