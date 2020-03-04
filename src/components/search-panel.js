import React from 'react';

import './search-panel.css';

const SearchPanel = () => {

    const searchText = 'type here to search'
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

    return <input className="form-control  search-input"
        placeholder={searchText} 
        type="text" />;    
};

export default SearchPanel;