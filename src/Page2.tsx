import React, { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Button } from 'react-native';

class Page2 extends Component {
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
          <Text>Press Here2</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'flex-end',
    height: '100%',
    justifyContent: 'flex-end',
  },
  button: {
    width: '40%',
    alignItems: "center",
    backgroundColor: "#00ff00",
    padding: 10
  }
});

export default Page2;