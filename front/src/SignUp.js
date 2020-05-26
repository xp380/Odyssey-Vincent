import React, { Component } from 'react'

export class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 'lol'
        };
        
    this.updateEmailField = this.updateEmailField.bind(this);
    }
    updateEmailField(event){
        this.setState({value: event.target.value});
    }

    render() {
        
        return (
            <div>
                <h1>emailRenseignéDansInput</h1><input type="email" name="email"/> 
            </div>
        );
    }
}
export default SignUp
