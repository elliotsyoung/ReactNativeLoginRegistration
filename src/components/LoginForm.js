import React, { Component } from 'react';
import { Text, Image } from 'react-native';
import axios from 'axios';
import { Button, Card, CardSection, Input } from './common';

class LoginForm extends Component {
  state = {
    email: '',
    password: '',
    username: '',
    passwordConfirm: '',
    errors: [],
    image_url: require('./../../img/loading_watermelon.gif')
   };

   onButtonPress() {
    // const { email, password, username, passwordConfirm } = this.state;
    this.setState({ image_url: require('./../../img/loading_watermelon.gif') });
     axios.get('http://192.168.1.159:5000/get_random_plant')
     .then(response => {
       console.log('success!', response);
       console.log(response.data.image_url);
       this.setState({ image_url: { uri: response.data.image_url } });
     })
     .catch(error => {
       console.log('error:', error.response.data);
       this.setState({ errors: error.response.data.errors });
     });
   } // end of onButtonPress

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
        <CardSection>
          <Image
            style={{
              height: 300,
              flex: 1,
              width: null
            }}
            source={this.state.image_url}
          />
        </CardSection>
      </Card>
    );
  } // end of Render
} // end of LoginForm

export default LoginForm;
