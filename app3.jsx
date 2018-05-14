import React from 'react';

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {date: new Date().toLocaleTimeString()};
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState({date: new Date().toLocaleTimeString()});
    }

    render() {
        return <div>
            <div><h2>Time is {this.state.date}</h2></div>
            <div>
                <button type="button" onClick={this.handleClick}> Refresh</button>
            </div>
        </div>;
    }
}

class App_3 extends React.Component {

    render() {
        var date = new Date().toLocaleTimeString();
        return <Clock value={date}/>;
    }
}

export default App_3;