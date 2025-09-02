import React from 'react';
import './Form.css';

class Form extends React.Component {
    state =
        {
            firstName: "",
            lastName: "",
            email: ""
        }
    update = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }

    render() {
        const { firstName, lastName, email } = this.state;
        return (
            <div>
                <form>
                    <h3>Форма регистрации</h3>
                    <div><input value={firstName}   name="firstName" onChange={this.update} placeholder="Имя" /></div>
                    <div><input value={lastName}    name="lastName"  onChange={this.update} placeholder="Фамилия" /></div>
                    <div><input value={email}       name="email"     onChange={this.update} placeholder="email" /></div>
                    <hr />
                    <div>{firstName}</div>
                    <div>{lastName}</div>
                    <div>{email}</div>
                </form>
            </div>
        )
    }
}

export default Form;