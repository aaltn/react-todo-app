import React from 'react';

const SearchPanel = () => {

    const searchText = 'Type here to search'
    const styleSearchPanel = {
        fontSize: '20px',
        fontStyle: 'italic'     
    };

    return <input 
        style={styleSearchPanel}
        placeholder={searchText}
        disabled={false}
        type="text" />;
};

export default SearchPanel;