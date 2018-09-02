import React from 'react';

class SearchBar extends React.Component {
    render() {
        return (
            <form>
                Search ...<input type = "text" name = "search">
                    <p> Only show products in stock <input type = "checkbox"></p>
            
            
            </form>
       
        );
    }}

export default SearchBar;