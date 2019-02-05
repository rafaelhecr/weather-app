import React, { Component } from 'react';
import Location from './Location';
import WeatherData from './WeatherData';
import './styles.css';

import {Y,
    SUN,
    WINDY, 
} from './../../constants/weathers';

const data = {
    temperature: 5,
    weatherState: SUN,
    humidity: 10,
    wind: '10 m/s',
}

const data2 = {
    temperature: 21,
    weatherState: WINDY,
    humidity: 6,
    wind: '20 m/s',
}

class WeatherLocation extends Component {
    
    constructor(){
        super();
        this.state = {
            city: 'Ciudad de México',
            data: data,
        }
    }

    handleUpdateClick = () => {
        console.log("actualizado!!");
        this.setState({
            city: 'Guadalajara',
            data: data2,
        });
    }

    render(){
        const {city, data} = this.state;

        return(
            <div className="weatherLocationCont">
                <Location city={city}></Location>
                <WeatherData data={data}></WeatherData>
                <button onClick={this.handleUpdateClick}>Actulizar</button>
            </div>);
    }
    
};

export default WeatherLocation;