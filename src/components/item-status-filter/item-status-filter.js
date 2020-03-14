import React, { Component } from 'react';
import './item-status-filter.css';

export default class ItemStatusFilter extends Component {

    buttons = [
        { name: 'all', label: 'All'},
        { name: 'active', label: 'Active'},
        { name: 'done', label: 'Done'}
    ];
//создадим для каждого элемента массива JSX-элемент при помощи .map
    render() {

        const { filter, onFilterChange } = this.props;
        
        const buttons = this.buttons.map(({name, label}) => {
            const isActive = filter === name;
            const clazz = (isActive) ? 'btn-info' : 'btn-outline-secondary';
            return (
                <button className={`btn ${clazz}`}
                    type="button"
                    key={name}
                    onClick={() => onFilterChange(name)}
                >
                    {label}
                </button>
            );
        });



        return (
            <div className="btn-group">
                {buttons}
            </div>
        );
    };
}

// const ItemStatusFilter = () => {
//     return (
//         <div className="btn-group">
//             <button className="btn  btn-info"
//                 type="button">All</button>
//             <button className="btn  btn-outline-secondary"
//                 type="button">Active</button>
//             <button className="btn  btn-outline-secondary"
//                 type="button">Done</button>
//         </div>
//     );
// };

// export default ItemStatusFilter;