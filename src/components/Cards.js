import React from 'react';

import '../index.css';
import weatherData from '../weather.json';

class Cards extends React.Component {

    state = {
        selectedDay: null
    }

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
        
        this.setState({selectedDay: weatherData.weekly[0]})
    }

    render() {
        return (
            <div>
                <div className="cards-out">
                    {weatherData.weekly.map((weatherDetails, index) => {
                        const { day, weather, weatherType, temperature } = weatherDetails
                        let fahrenheit = Math.round((temperature * 1.8) + 32)
                        let image_link = `https://ssl.gstatic.com/onebox/weather/64/${weatherType}.png`
                        return <div className="cards" onClick={
                            () => this.setSelectedDay(weatherDetails)
                        }>
                                <h1>{day}</h1>
                                <p>{weather}</p>
                                <h4>{temperature}&#8451; | {fahrenheit}&#8457; </h4>
                                <img src={image_link} />
                            </div>
                    })}
                </div>
            </div>
        );
    }
};

export default Cards;