import React, { Component } from 'react';
import './item-add-form.css';

export default class ItemAddForm extends Component {
    state = {
        label: ''
    };

    onLableChange = (e) => {
        this.setState({
            label: e.target.value
        });
    };

    onSubmit = (e) => {
        e.preventDefault();
        this.props.onItemAdded(this.state.label);
        this.setState({
            label: ''
        });
    };
    
    render () {
        const addItemText = 'type what needs to do'

        return (
            <form className="item-add-form  d-flex"
                onSubmit={ this.onSubmit }  
            >
                <input 
                    className="item-add-form-input  form-control"
                    placeholder={addItemText} 
                    type="text"
                    onChange={ this.onLableChange }
                    value={ this.state.label }
                />
                <button 
                    className="btn  btn-outline-secondary"                    
                    title="Delet done" 
                    // onClick={ () => this.props.onItemAdded('add item') }                    
                >Add&nbsp;item
                </button>
            </form>   
            
        );        
    };
};

