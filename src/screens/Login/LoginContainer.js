import React from 'react';
import LoginView from './LoginView';

export default class LoginContainer extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: ''
        };
    }

    onEmailChange = (email)=>{
        this.setState({email});
    }
    
    onPasswordChange = (password)=>{
        this.setState({password});
    }

    onSubmit = ()=>{
        this.props.navigation.navigate('Home');
    }

    render(){
        return (
            <LoginView
                onEmailChange={this.onEmailChange}
                onPasswordChange={this.onPasswordChange}
                onSubmit={this.onSubmit}
                email={this.state.email}
                password={this.state.password}
            />
        )
    }
 } 