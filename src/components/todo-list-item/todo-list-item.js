import React, { Component } from 'react';

import './todo-list-item.css';

// чтобы хранить состояние компонента - заменим функцию на класс:

// export default class TodoListItem extends React.Component {
export default class TodoListItem extends Component {    

    render() {
        const { label, important = false, done = false } = this.props;

        const styleItem = {
            color: important ? 'steelblue' : 'black',
            fontWeight: important ? 'bold' : 'normal',
            textDecoration: done ? 'line-through' : 'normal'
        };
    
        return  (
            <div className="todo-list-item">
                    
                <span className="float-right">                
                    <button className="btn btn-outline-danger btn-sm"
                        type="button">
                        <i className="fa fa-trash-o"></i>
                    </button>
                    <button className="btn btn-outline-success btn-sm"
                        type="button">
                        <i className="fa fa-exclamation"></i>
                    </button>              
                </span>
    
                <span
                    className="todo-list-item-label"
                    style={styleItem}
                    onClick={ ()=> console.log(`click on : ${label}`) }
                >
                    { label }
                </span> 
    
    
            </div>
        );
    };
}

// const TodoListItem = ({ label, important = false, done = false }) => {

//     const styleItem = {
//         color: important ? 'steelblue' : 'black',
//         fontWeight: important ? 'bold' : 'normal',
//         textDecoration: done ? 'line-through' : 'normal'
//     };

//     return  (
//         <div className="todo-list-item">
            
//             <span className="float-right">                
//                 <button className="btn btn-outline-danger btn-sm"
//                     type="button">
//                     <i className="fa fa-trash-o"></i>
//                 </button>
//                 <button className="btn btn-outline-success btn-sm"
//                     type="button">
//                     <i className="fa fa-exclamation"></i>
//                 </button>              
//             </span>

//             <span
//                 className="todo-list-item-label"
//                 style={styleItem}>
//                 { label }
//             </span> 


//         </div>
//     );
// }

// export default TodoListItem;