import React from 'react';

class Islander extends React.Component {

    state = {
        toggleCard: false,
    }

    handleClick = (e) => {
        this.setState((prevState) => {
            return {
                toggleCard: !prevState.toggleCard,
            }
        })
    }
    
    render() { 
        //destructure the props.islander! 
        return ( 
            <div className="contestant-card" onClick={this.handleClick}>
        
            {this.state.toggleCard ? 
            <div className="back">
            <><h4><span>Age:</span> {this.props.islander.age}</h4>
            <h4><span>Season:</span> {this.props.islander.season}</h4>
            <h4><span>Hometown:</span> {this.props.islander.hometown}</h4>
            <h4><span>Occupation:</span> {this.props.islander.occupation}</h4>
            <h4><span>Status:</span> {this.props.islander.status}</h4></>
            </div>
            :
            <><h1 className="islander-name">{this.props.islander.name}</h1>
            <img src={this.props.islander.img_url} alt={this.props.islander.name} className="islander-img" /></>
            }

            </div>
         );
    }
}
 
export default Islander;


   
  