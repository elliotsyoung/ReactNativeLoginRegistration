import React, { Component } from 'react';
import { Text } from 'react-native';
import axios from 'axios';
import { Button, Card, CardSection, Input } from './common';

class LoginForm extends Component {
  state = {
    email: '',
    password: '',
    username: '',
    passwordConfirm: '',
    errors: []
   };

   onButtonPress() {
     const { email, password, username, passwordConfirm } = this.state;
     axios.post('http://192.168.1.159:5000/register',
     {
       username: username,
       email: email,
       password: password,
       passwordConfirm: passwordConfirm
     })
     .then(response => {
       console.log('success!', response);
     })
     .catch(error => {
       console.log('error:', error.response.data);
       this.setState({ errors: error.response.data.errors });
     });
   } //end of onButtonPress

   renderErrors() {
     return this.state.errors.map(error =>
       <CardSection key={error}>
         <Text>{error}</Text>
       </CardSection>
     );
   }

  render() {
    return (
      <Card>
        <CardSection>
          <Input
            placeholder="Username"
            label="Username"
            value={this.state.username}
            onChangeText={username => this.setState({ username })}
          />
        </CardSection>
        <CardSection>
          <Input
            placeholder=" ex. user@gmail.com"
            label="Email"
            value={this.state.text}
            onChangeText={email => this.setState({ email })}
          />
        </CardSection>
        <CardSection>
          <Input
            secureTextEntry
            placeholder="password"
            label="Password"
            value={this.state.password}
            onChangeText={password => this.setState({ password })}
          />
        </CardSection>
        <CardSection>
          <Input
            secureTextEntry
            placeholder="Confirm Password"
            label="Confirm Password"
            value={this.state.passwordConfirm}
            onChangeText={passwordConfirm => this.setState({ passwordConfirm })}
          />
        </CardSection>
        {this.renderErrors()}
        <CardSection>
          <Button onPress={this.onButtonPress.bind(this)}>
            Log in
          </Button>
        </CardSection>
      </Card>
    );
  } // end of Render
} // end of LoginForm

export default LoginForm;
