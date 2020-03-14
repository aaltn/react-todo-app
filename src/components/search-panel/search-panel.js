import React, { Component } from 'react';
import './search-panel.css';

export default class SearchPanel extends Component {

    state = {
        searchLine: ''
    }

    onSearchChange = (e) => {
        const searchLine = e.target.value;
        this.setState({ searchLine });
        this.props.onSearchChange(searchLine);
    };

    render () {
        const searchText = 'type to search';
        //пример подключения инлайн-стилей:
        // const styleSearchPanel = {
        //     fontSize: '20px',
        //     fontStyle: 'italic'     
        // };
        // return <input 
        //     style={styleSearchPanel}
        //     placeholder={searchText}
        //     disabled={false}
        //     type="text" />;
        return (
            <input className="form-control  search-input"
                placeholder={searchText} 
                type="text" 
                value={this.state.searchLine}
                onChange={this.onSearchChange}    
            /> 
        );

    } 
}