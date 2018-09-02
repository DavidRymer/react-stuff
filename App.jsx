import React from 'react';
import FilterableProductTable from "../src/FilterableProductTable";


class App extends FilterableProductTable {
  render() {
    return (
      <React.Fragment>
        <h1>Filterable Product Table</h1>
            <hr /> <FilterableProductTable /> 
            
      </React.Fragment>
    );
  }
}

export default App;
