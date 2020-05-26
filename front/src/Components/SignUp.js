import React, { Component } from 'react'

export class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            name: "",
            lastname: ""
        };
        
    this.updateEmailField = this.updateEmailField.bind(this);
    }
    updateEmailField = e =>{
        this.setState({
            topic: e.target.value
        })
    }
    
    handleSubmit = (event) => {
        console.log(this.state)
        event.preventDefault();
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                <h1>{JSON.stringify(this.state)}</h1>
                <input 
                type={this.state.email} 
                name="email"
                onChange={this.updateEmailField}
                
                />
                <input
                id="password"
                type={this.state.email}
                onChange={this.updateEmailField} 
                />
                <input
                id="name"
                type={this.state.name}
                onChange={this.updateEmailField}
                />
                
                <input
			 		id="lastname"
			 		type={this.state.lastname}
					onChange={this.updateEmailField}
				/>
                <input onChange={this.handleSubmit} type="submit" value="Soumettre"/>
                </form>
            </div>
        );
    }
}
export default SignUp