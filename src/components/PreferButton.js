import React, { Component } from 'react';
import '../components/styles/buttonpref.css';

class LikeButton extends Component {

    state = {
        liked: false,
    };

    render() {
        const { liked } = this.state;
        return (
            
                <button className='button-pref' onClick={() => this.setState({ liked: !liked })}>
                {'Preferiti'}
            </button>
            
        );
    }

}


export default LikeButton;
    
