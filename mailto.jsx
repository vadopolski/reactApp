import React from 'react';

function InputSubmit() {
    return (
        <label>
            <input type="Submit" name="name"/>
        </label>
    )
}

function InputText(props) {
    return (
        <label>
            {props.value}
            <input type="text" name="name"/>
        </label>
    )
}

class MailTo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
    }

    render() {
        return (
            <div onSubmit={this.handleSubmit}>
                <InputText value="Куда"/>
                <InputText value="Кому"/>
                <InputText value="Тема"/>
                <InputText value="Текст Письма"/>
                <InputSubmit/>
            </div>
        );
    }
}

export default MailTo;