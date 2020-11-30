import React from 'react';
import IslanderContainer from './IslanderContainer'
import Searcher from './Searcher'
import Filter from './Filter'

class IslandPage extends React.Component {

    state = {
        islanders: [],
        searchTerm: ""
        }

    changeSearchTerm = (valueFromSearchBar) => {
        this.setState({
            searchTerm: valueFromSearchBar
        })
    }
      
    componentDidMount() {
        fetch("http://localhost:3000/contestants")
        .then(resp => resp.json())
        .then(data => {
          this.setState({
            islanders: data
          })
        })
    }

    filterBySearchTermArray = () => {
        let arrayOfSearchedIslanders = this.state.islanders
        arrayOfSearchedIslanders = this.state.islanders.filter((islander) => {
            return (
                islander.name.toLowerCase().includes(this.state.searchTerm.toLowerCase())
                    ||
                islander.hometown.toLowerCase().includes(this.state.searchTerm.toLowerCase())
                    ||
                islander.season.toString().includes(this.state.searchTerm)
            )
        })
        return arrayOfSearchedIslanders
    }
   
    render() { 
        return ( 
        <main>
            <div className="search-filter-container">
            <Searcher
                searchTerm={this.state.searchTerm} 
                changeSearchTerm={this.changeSearchTerm}/>
            </div>
            <IslanderContainer islanders={this.filterBySearchTermArray()}/>
        </main>
         );
    }
}

export default IslandPage;
