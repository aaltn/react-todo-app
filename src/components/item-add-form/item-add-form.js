import React, { Component } from 'react';
import './item-add-form.css';

export default class ItemAddForm extends Component {

    render () {
        const addItemText = 'type to todo'

        return (
            <div className="item-add-form  d-flex">
                <input 
                    className="item-add-form-input  form-control"
                    placeholder={addItemText} 
                    type="text" 
                />
                <button className="btn  btn-outline-secondary"
                        type="button"
                        title="Delet done" 
                        onClick={ () => this.props.onItemAdded('add item') }
                >
                            Add Item
                </button>
            </div>   
            
        );        
    };
};
