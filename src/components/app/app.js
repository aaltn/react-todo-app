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
        ],
        searchLine: '',
        filter: 'all' // active, done, all
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

    onSearchChange = (searchLine) => {
        this.setState({ searchLine });
    };

    onFilterChange = (filter) => {
        this.setState({ filter });
    };

    search(items, searchLine) {
        if (searchLine.length === 0) {
            return items;
        }

        return items.filter((item) => {           
            return item.label.toLowerCase().indexOf(searchLine.toLowerCase()) > -1;
        });
    };

    filterList(items, filter) {

        switch(filter) {
            case 'all': 
                return items;
            case 'done':
                return items.filter((item) => item.done);
            case 'active':
                return items.filter((item) => !item.done);
            default:
                return items;
        }
    }

    render() {

        const { todoData, searchLine, filter } = this.state;

        const visebleItems = this.filterList(
            this.search(todoData, searchLine), filter);

        const doneCount = this.state.todoData.filter((el) => el.done).length;
        const todoCount = this.state.todoData.length - doneCount;

        return (
            <div className="todo-app">            
                <AppHeader toDo={todoCount} done={doneCount} />
                <div className="top-panel  d-flex">
                    <SearchPanel 
                        onSearchChange={this.onSearchChange}
                    /> 
                    <ItemStatusFilter 
                        filter={filter}
                        onFilterChange={this.onFilterChange}
                    />
                </div>  
    
                <TodoList 
                    // todos={todoData}
                    todos={visebleItems}
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
