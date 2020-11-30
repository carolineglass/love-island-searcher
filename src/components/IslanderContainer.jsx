
import React from 'react';
import Islander from './Islander'

const IslanderContainer = (props) => {

  return (
    <div className="container">
        {props.islanders.map((islander) => {
            return <Islander key={islander.id} islander={islander}/>
        })}
    </div>
  );
  
};

export default IslanderContainer;


