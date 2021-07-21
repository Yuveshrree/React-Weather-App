import React from 'react';

import '../index.css';
import weatherData from '../weather.json';

// const fahrenheit = Math.round((celsius * 1.8) + 32)
// const celsius = weatherDetails.temperature

class Weather extends React.Component {

    state = {
        selectedDay: null
    }


    // toggleComp = () => {
    //     this.setState({ active: !this.state.active })
    // }

    setSelectedDay = (selectedDay) => {
        this.setState({ selectedDay })
        console.log(selectedDay)
    }

    componentDidMount () {
        // const { day, weatherType, temperature } = weatherData.weekly[0]
        // this.setState({selectedDay: {
        //     day,
        //     weatherType,
        //     temperature
        // }})
        
        this.setState({selectedDay: weatherData.weather.weekly[0]})
    }


    render() {
        // let image_link = `https://ssl.gstatic.com/onebox/weather/64/${weatherData.weekly[3]}.png`
        return (
            <div className="outerComp">
                {/* Weather Component */}
                <div className="displayWeather">
                    <h1>{weatherData.weather.location}</h1>
                    {this.state.selectedDay && <> <h2>{this.state.selectedDay.day}</h2>
                    <h3>{this.state.selectedDay.weather}</h3>
                    <h3>{this.state.selectedDay.temperature}</h3> </>}
                    {/* Component is {this.state.active ? 'Active' : 'Inactive'} */}
                </div>
                {/* <button onClick={this.toggleComp}>Hi</button> */}

                <div className="cards-out">
                    {weatherData.weather.weekly.map((weatherDetails, index) => {
                        const { day, weather, weatherType, temperature } = weatherDetails
                        let fahrenheit = Math.round((temperature * 1.8) + 32)
                        let image_link = `https://ssl.gstatic.com/onebox/weather/64/${weatherType}.png`
                        return <div className="cards" onClick={
                            () => this.setSelectedDay(weatherDetails)
                        }>
                                <h1>{day}</h1>
                                <p>{weather}</p>
                                <h4>{temperature}&#8451; | {fahrenheit}&#8457; </h4>
                                <img src={image_link} alt=" " />
                            </div>
                    })}
                </div>

            </div>
        );
    }
};

export default Weather;