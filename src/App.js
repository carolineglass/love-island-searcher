import React, { Fragment } from 'react';
import './App.css';
import IslandPage from './components/IslandPage'
import Header from './components/Header'

class App extends React.Component {

  render() { 
    return ( 
      <div>
        <Header />
        <IslandPage />
      </div>
     );
  }
}

export default App;
