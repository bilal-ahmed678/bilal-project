import React, { Component } from 'react';
import Slider from '../Header/Slider'
import Cards from '../Header/cards'




class Main extends Component {
    render() {
        return (
            <React.Fragment>
                <Slider />
                < Cards />
            </React.Fragment>
        );
    }
}

export default Main;