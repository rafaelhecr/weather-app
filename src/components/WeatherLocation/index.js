import React, { Component } from 'react';
import Location from './Location';
import WeatherData from './WeatherData';
import './styles.css';
import {
    SUN,
    WINDY, 
} from './../../constants/weathers';

const location = "Mexico City,mx";
const api_key = "977c7398831d8f4f85665097c45dd25e";
const url_base_weather = "http://api.openweathermap.org/data/2.5/weather";

const api_weather = `${url_base_weather}?q=${location}&appid=${api_key}`;

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

    getData = weather_data => {
        const { humidity, temp } = weather_data.main;
        const { speed } = weather_data.wind;
        
    }
    handleUpdateClick = () => {
        fetch(api_weather).then( resolve => {
            return resolve.json();
        }).then(data => {
            console.log(data);
            debugger;
        });

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