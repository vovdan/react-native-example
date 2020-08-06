import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import Page1 from './Page1';
import Page2 from './Page2';

class App extends Component {
  state = {
    isFirstComponent: true
  }

  onPress = () => {
    this.setState({
      isFirstComponent: !this.state.isFirstComponent
    });
    console.log('clicked1', this.state.isFirstComponent);
  }

  render() {
    return (
      <View>
        {this.state.isFirstComponent ? <Page1 onPress={this.onPress.bind(this)} /> : null}
        {!this.state.isFirstComponent ? <Page2 onPress={this.onPress.bind(this)} /> : null}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    marginBottom: 16
  }
});

export default App;