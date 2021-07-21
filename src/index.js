import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Title from './components/Title';
import Weather from './components/Weather';
import axios from 'axios';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

class MyComponent extends React.Component {
  
    state = {
      loading: null,
      weather: {}
    }
  
    getWeather = async () => {
      try {
        this.setState({loading: true})
        const api_call = await axios.get('http://localhost:3000/weather');
        console.log(api_call);
        this.setState({weather: api_call.data, loading: false})
      } catch(e) {
        console.log(e);
      }
    }
  
    render() {
      return (
        <div>
          Current Weather: {this.state.weather.location} {this.state.loading && '(Loading..)'}
          {!this.state.weather.location && !this.state.loading && <button onClick={this.getWeather}>Get Weather</button>}
        </div>
      );
    }
  }

  ReactDOM.render(<div>
    <MyComponent />
    <Title />
    <Weather />
  </div>, document.getElementById('root'));
