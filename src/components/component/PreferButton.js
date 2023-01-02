import React, { Component } from 'react';
import '../styles/buttonpref.css';

class ButtonPrefer extends Component {

    constructor() {
        super();
        this.state = {
          liked: false
        };
        this.handleClick = this.handleClick.bind(this);
      } 
      
      handleClick() {
        this.setState({
          liked: !this.state.liked
        });
      }
      
      render() {
       
        const label = this.state.liked ? 'Nascondi Preferiti' : 'Mostra Preferiti'
        return (
          
            <button className="button-pref" onClick={this.handleClick}>
              {label}</button>
          
         
        );
      }
    }


export default ButtonPrefer;
    
