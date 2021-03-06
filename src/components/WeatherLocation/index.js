import React, { Component } from 'react';
import {CircularProgress} from '@material-ui/core';
import PropTypes from 'prop-types';
import transformWeather from './../../services/transformWeather';
import { api_weather } from '../../constants/api_url';
import Location from './Location';
import WeatherData from './WeatherData';
import './styles.css';


class WeatherLocation extends Component {
    
    constructor(props){
        super(props);
        const { city } = props;
        this.state = {
            city: 'Ciudad de México',
            data: null,
        };
        console.log("constructor");
    }

    componentDidMount() {
        console.log("componentDidMount");
        this.handleUpdateClick();        
    }

    componentDidUpdate(prevProps, prevState) {
        console.log("componentDidUpdate");      
    }
        
    handleUpdateClick = () => {
        fetch(api_weather).then( resolve => {
            return resolve.json();
        }).then(data => {
            const newWeather = transformWeather(data);
            console.log(newWeather);
            // debugger;
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
                {data ? <WeatherData data={data}></WeatherData> : <CircularProgress size={50} />}
            </div>);
    }
    
};

WeatherLocation.propTypes = {
    city: PropTypes.string.isRequired,
}

export default WeatherLocation;