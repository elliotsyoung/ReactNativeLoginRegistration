import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner, CardSection } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  state = {
    loggedIn: null
  };

  componentWillMount() {
    firebase.initializeApp({
        apiKey: 'AIzaSyCI62fTxfQbLL0qZgC7Yrh-izPyCBn6Zxk',
        authDomain: 'react-native-auth-9e673.firebaseapp.com',
        databaseURL: 'https://react-native-auth-9e673.firebaseio.com',
        projectId: 'react-native-auth-9e673',
        storageBucket: 'react-native-auth-9e673.appspot.com',
        messagingSenderId: '734840071762'
      });

      firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          console.log(user);
          this.setState({ loggedIn: true });
        } else {
          console.log('PROBLEM!', user);
          this.setState({ loggedIn: false });
        }
      });
    }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return (
          <CardSection>
            <Button onPress={() => firebase.auth().signOut()}>
              Log Out
            </Button>
          </CardSection>
        );
      case false:
        return <LoginForm />;
      default:
        return (
          <CardSection>
            <Spinner size="large" />
          </CardSection>
        );
    }
  }

  render() {
    return (
      <View>
        <Header>Authentication</Header>
          {this.renderContent()}
      </View>
    );
  } // end of Render
} // end of App

export default App;
