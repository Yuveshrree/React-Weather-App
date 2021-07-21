import React from 'react';

import Title from './components/Title';
import Weather from './components/Weather';
import axios from 'axios';
// import Cards from './components/Cards';

// const API_KEY = "886705b4c1182eb1c69f28eb8c520e20";

class App extends React.Component {
  // getWeather = async (e) => {
  //   e.preventDefault();
  //   const city = e.target.elements.city.value;
  //   const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
  //   const data = await api_call.json();
  //   console.log(data);
  // }

  state = {
    loading: null,
    day: undefined,
    weather: undefined,
    weatherType: undefined,
    temperature: undefined,
    location: undefined
  }

  getWeather = async () => {
    try {
      this.setState({loading: true})
      const api_call = await axios.get('http://localhost:3000/weather');
      console.log(api_call);
      this.setState({
        day: api_call.weather.weekly[0].day,
        weather: api_call.weather.weekly[0].weather,
        weatherType: api_call.weather.weekly[0].weatherType,
        temperature: api_call.weather.weekly[0].temperature,
        location: api_call.weather.location,
        loading: false})
    } catch(e) {
      console.log(e);
    }
  }

  render() {
    return (
      <div>
        Current Weather: {this.state.location} {this.state.loading && '(Loading..)'}
        {!this.state.location && !this.state.loading && <button onClick={this.getWeather}>Get Weather</button>}
        <Title 
        getWeather= {this.getWeather}
        temperature={ this.state.temperature }
         />
        <Weather />
        {/* <Cards /> */}
      </div>
    );
  }
};

export default App;