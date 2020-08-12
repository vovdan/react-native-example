import React, { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { types } from '../redux';
import { addCount, goTo } from '../redux';
import { connect } from 'react-redux';

class Page1 extends Component {

  onPress = (page) => {
    this.props.reduxIncreaseCounter();
    this.props.goTo(page);
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => this.onPress(types.Page2)}
        >
          <Text>Press Here1</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    reduxIncreaseCounter: () => dispatch(addCount()),
    goTo: (screenName) => dispatch(goTo(screenName))
  };
};

export default connect(null, mapDispatchToProps)(Page1);

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