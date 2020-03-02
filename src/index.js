import React from 'react';
import ReactDOM from 'react-dom';

const TodoList = () => {

    const items = ['Learn React' , 'Build Awesome App'];
    return (
        <ul>
            <li>{ items[0] }</li>
            <li>{ items[1] }</li>
        </ul>
    );
};

const AppHeader = () => {
    return <h1>My Todo List</h1>;
};

const SearchPanel = () => {

    const searchText = 'Type here to search'
    const searchPanelStyle = {
        fontSize: '20px',
        fontStyle: 'italic'     
    };

    return <input 
        style={searchPanelStyle}
        placeholder={searchText}
        disabled={false}
        type="text" />;
};

const App = () => {

    const isLoggedIn = true;
    const loginBox = <span>Log in please: </span>;
    const welcomeBox = <span>Welcome Back!</span>;

    return (
        <div>            
            { isLoggedIn ? welcomeBox : loginBox }
            <AppHeader />
            <SearchPanel />        
            <TodoList />
        </div>
    );
};

ReactDOM.render(<App />,
    document.getElementById('root'));