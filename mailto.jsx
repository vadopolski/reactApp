import React from 'react';

function InputSubmit() {
    return (
        <div>
            <label>&nbsp;</label>
            <div>
                <input type="Submit" name="name"/>
            </div>
        </div>
    )
}

function InputText(props) {
    return (
        <div>
            <label for={props.name}>{props.value}</label>
            <div>
                <input type="text" name={props.name} id={props.name}/>
            </div>
        </div>
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
                <h2>Письмо посетителя сайта.</h2>
                <InputText value="Куда" name="where"/>
                <InputText value="Тема" name="subject"/>
                <InputText value="Тема" name="body"/>
                <h2>Координаты для связи.</h2>
                <InputText value="Фамилия, имя, отчество " name="city"/>
                <InputText value="Город " name="phone"/>
                <InputText value="Телефон с кодом города " name="email"/>
                <InputSubmit/>
            </div>
        );
    }
}

export default MailTo;