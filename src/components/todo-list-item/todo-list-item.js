import React, { Component } from 'react';

import './todo-list-item.css';


export default class TodoListItem extends Component {   
    
    state = { 
        done: false,
        important: false
    };
    onLabelClick = () => {
        this.setState((state) => {
            return {
                done: !state.done
            };
        });
    };

    onMarkImportant = () => {
        this.setState((state) => {
            return {
                important: !state.important
            };
        });
    };


    render() {
        const { label } = this.props;
        const { done, important } = this.state;
        let className = 'todo-list-item';
        if (done) {
            className += ' done';
        }
        if (important) {
            className += ' important';
        }
    
        return  (
            <div className={className}>
                    
                <span className="float-right">                
                    <button className="btn btn-outline-danger btn-sm"
                        type="button"
                        title="mark Done" 
                        onClick={ this.onLabelClick }
                    >
                        <i className="fa fa-trash-o"></i>
                    </button>
                    <button className="btn btn-outline-success btn-sm"
                        type="button"
                        title="mark Important"
                        onClick={ this.onMarkImportant }
                    >
                        <i className="fa fa-exclamation"></i>
                    </button>              
                </span>
    
                <span
                    className="todo-list-item-label"
                    title="mark done"                  
                    onClick={ this.onLabelClick  }
                >
                    { label }
                </span> 
    
    
            </div>
        );
    };
}
