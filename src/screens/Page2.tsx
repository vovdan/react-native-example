import React, { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { types } from '../redux';
import { addCount, goTo } from '../redux';
import { connect } from 'react-redux';

class Page2 extends Component {

  onPress = (page) => {
    this.props.reduxIncreaseCounter();
    this.props.goTo(page);
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => this.onPress(types.Page1)}
        >
          <Text>Press Here2</Text>
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

export default connect(null, mapDispatchToProps)(Page2);

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'flex-end',
    height: '90%',
    justifyContent: 'flex-end',
  },
  button: {
    width: '40%',
    alignItems: "center",
    backgroundColor: "#00ff00",
    padding: 10
  }
});