import React, {Component } from 'react';
import Location from './Location';
import WeatherData from './WeatherData';
import './styles.css';
import{
	SUN,
	WINDY,
} from './../../constants/weathers';

const location = "Buenos Aires,ar"
const api_key = "f99bbd9e4959b513e9bd0d7f7356b38d";
const url_base_weather = "http://api.openweathermap.org/data/2.5/weather";

const api_weather = `${url_base_weather}?q=${location}&appid=${api_key}`;

const data ={
	temperature: 5,
	weatherState: SUN,
	humidity:10,
	wind: '10m/s',
}

const data2 ={
	temperature: 10,
	weatherState: WINDY,
	humidity:22,
	wind: '20m/s',
}

class WeatherLocation extends Component {
	
	constructor(){
		super();
		this.state = {
			city: 'Cali',
			data: data, 
		};
	}

	handleUpdateClick =() => {
		fetch(api_weather).then( resolve => {
		
			return resolve.json();
		}).then(data => {
			console.log(data);
			debugger;
		});
		
		console.log("actualizado");
		this.setState({
			data: data2, 
		});
	}
		
	render(){
		const { city, data} = this.state;
		return(
	 	<div className="weatherLocationCont"> 
			<Location city = {city} />
			<WeatherData data={data}/>
			<button onClick={this.handleUpdateClick}>Actualizar</button>
		</div>);
 }
}
export default WeatherLocation;