import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  componentWillMount() {
    firebase.initializeApp({
        apiKey: 'AIzaSyCI62fTxfQbLL0qZgC7Yrh-izPyCBn6Zxk',
        authDomain: 'react-native-auth-9e673.firebaseapp.com',
        databaseURL: 'https://react-native-auth-9e673.firebaseio.com',
        projectId: 'react-native-auth-9e673',
        storageBucket: 'react-native-auth-9e673.appspot.com',
        messagingSenderId: '734840071762'
      });
    }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        <LoginForm />
      </View>
    );
  } // end of Render
} // end of App

export default App;
