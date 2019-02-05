import React, { Component } from 'react';
import transformWeather from './../../services/transformWeather';
import { api_weather } from '../../constants/api_url';
import Location from './Location';
import WeatherData from './WeatherData';
import './styles.css';
import {
    SUN, 
} from './../../constants/weathers';

const data = {
    temperature: 5,
    weatherState: SUN,
    humidity: 10,
    wind: '10 m/s',
}

class WeatherLocation extends Component {
    
    constructor(){
        super();
        this.state = {
            city: 'Ciudad de México',
            data: data,
        };
        console.log("constructor");
    }

    componentDidMount() {
        console.log("componentDidMount");        
    }

    componentDidUpdate(prevProps, prevState) {
        console.log("componentDidUpdate");      
    }
    
    
    componentWillMount() {
        console.log("UNSAFE componentWillMount");        
    }

    componentWillUpdate() {
        console.log("UNSAFE componentWillUpdate");
    }
    
    handleUpdateClick = () => {
        fetch(api_weather).then( resolve => {
            return resolve.json();
        }).then(data => {
            const newWeather = transformWeather(data);
            console.log(newWeather);
            debugger;
            this.setState({
                data: newWeather,
            })
        });
    }

    render(){
        console.log("render");

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