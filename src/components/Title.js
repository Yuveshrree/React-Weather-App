import React from 'react';

class Title extends React.Component {
    render() {
        return (
            <div>
                <h1>Current Weather</h1>
                {/* <form onSubmit= {this.props.getWeather}>
                    <input type="text" name="city" placeholder="Enter city" />
                    <button>Get Weather</button>
                </form> */}
            </div>
        );
    }
};

export default Title;
