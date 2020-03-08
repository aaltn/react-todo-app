import React, { Component } from 'react';

import './todo-list-item.css';


export default class TodoListItem extends Component {   
    
    // constructor() {
    //     super();
    //     this.state = {
    //         done: false;
    // };
    //     this.onLabelClick = () => {
    //         console.log(`click on : ${ this.props.label }`);
    //     };
    // }
    state = { 
        done: false,
        important: false
    };
    onLabelClick = () => {
        // console.log(`click on : ${ this.props.label }`);
        this.setState({
            done: true
        });
    };

    onMarkImportant = () => {
        this.setState({
            important: true
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
                        onClick={ this.onMarkImportant }
                    >
                        <i className="fa fa-trash-o"></i>
                    </button>
                    <button className="btn btn-outline-success btn-sm"
                        type="button"
                        onClick={ this.onMarkImportant }
                    >
                        <i className="fa fa-exclamation"></i>
                    </button>              
                </span>
    
                <span
                    className="todo-list-item-label"                    
                    onClick={ this.onLabelClick  }
                >
                    { label }
                </span> 
    
    
            </div>
        );
    };
}
