import React, { Component } from 'react';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import TodoList from '../todo-list';
import ItemStatusFilter from '../item-status-filter';
import ItemAddForm from '../item-add-form';

import './app.css';

export default class App extends Component {

    maxId=100;

    state = {
        todoData: [
            this.createTodoItem('Drink Coffee'),
            this.createTodoItem('Learn React'),
            this.createTodoItem('Build Awesome React App'),
            this.createTodoItem('Give to the world my \'Todo\u00A0App\'')
        ]
    };

    createTodoItem(label) {
        return {
            label,
            important: false,
            done: false,
            id: this.maxId++
        };
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

    addItem = (text) => {
        //
        console.log('text:', text);
        // generate id
        const newItem = this.createTodoItem(text);
        // add element in array
        this.setState(({todoData}) => {

            const newArray = [...todoData, newItem];

            return {
                todoData: newArray
            };
        });
    }

    onToggleImportant = (id) => {
        this.setState(({ todoData }) => {
            const idx = todoData.findIndex((el) => el.id === id);

            // 1. update objekt
            const oldItem = todoData[idx];
            const newItem = { ...oldItem, important: !oldItem.important };

            // 2. construct new array
            const newArray = [
                ...todoData.slice(0, idx),
                newItem,
                ...todoData.slice(idx + 1)
            ];

            return {
                todoData: newArray 
            }
        });
        
    };

    onToggleDone = (id) => {
        this.setState(({ todoData }) => {
            const idx = todoData.findIndex((el) => el.id === id);

            // 1. update objekt
            const oldItem = todoData[idx];
            const newItem = { ...oldItem, done: !oldItem.done };

            // 2. construct new array
            const newArray = [
                ...todoData.slice(0, idx),
                newItem,
                ...todoData.slice(idx + 1)
            ];

            return {
                todoData: newArray 
            }
        });
    };

    render() {

        const doneCount = this.state.todoData.filter((el) => el.done).length;
        const todoCount = this.state.todoData.length - doneCount;

        return (
            <div className="todo-app">            
                <AppHeader toDo={todoCount} done={doneCount} />
                <div className="top-panel  d-flex">
                    <SearchPanel /> 
                    <ItemStatusFilter />
                </div>  
    
                <TodoList 
                    todos={this.state.todoData}
                    onDeleted={ this.deleteItem }
                    onToggleImportant={ this.onToggleImportant }
                    onToggleDone={ this.onToggleDone }
                />
                <ItemAddForm
                    onItemAdded={ this.addItem }                
                />
            </div>
        );

    };
    
};
