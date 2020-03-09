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
        console.log(id);
    }

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

    }
    
};
