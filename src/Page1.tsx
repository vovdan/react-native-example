import React, { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Button } from 'react-native';

class Page1 extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.button}
          onPress={this.props.onPress}
        >
          <Text>Press Here1</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%'
  },
  button: {
    backgroundColor: "#ff00ff",
    padding: 10
  }
});


export default Page1;