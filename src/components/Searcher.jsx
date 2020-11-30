import React from 'react';

const Searcher = props => {

    const handleChange = (e) => {
        props.changeSearchTerm(e.target.value)
    }

    return (
        <nav>
          <div className="searcher-container">
            <div className="searcher">
                
            <input 
                placeholder="Search Name, Hometown, or Season"
                type="text" 
                value={props.searchTerm} 
                onChange={handleChange}
            />

            </div>
          </div>
        </nav>
    );
};
  
export default Searcher;