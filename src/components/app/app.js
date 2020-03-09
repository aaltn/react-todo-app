import React, { Component } from 'react';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import TodoList from '../todo-list';
import ItemStatusFilter from '../item-status-filter';

import './app.css';

export default class App extends Component {

    state = {
        todoData: [
            { label: 'Drink Coffee', important: false, id: 1 },
            { label: 'Learn React', important: false, id: 2 },
            { label: 'Build Awesome React App', important: false, id: 3 },
            { label: 'Give to the world my \'Todo\u00A0App\'', important: true, id: 4 }
        ]
    };

    deleteItem = (id) => {
        this.setState(({ todoData }) => {
            const idx = todoData.findIndex((el) => el.id === id);
            //todoData.splice(idx, 1); - нельзя изменять существующий State

            // [a, b, c, d, e]
            // [a, b,    d, e]
            const before = todoData.slice(0, idx);
            const after = todoData.slice(idx + 1);

            const newArray = [...before, ...after];


            return {
                todoData: newArray
            };
        });
    };

    render() {
        return (
            <div className="todo-app">            
                <AppHeader toDo={3} done={1} />
                <div className="top-panel  d-flex">
                    <SearchPanel /> 
                    <ItemStatusFilter />
                </div>  
    
                <TodoList 
                    todos={this.state.todoData}
                    onDeleted={ this.deleteItem }
                />
            </div>
        );

    };
    
};
