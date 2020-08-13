import React, { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { types } from '../redux';
import { addCount, goTo } from '../redux';
import { connect } from 'react-redux';
import { StyledContainer } from '../styles';

class Page2 extends Component {

  onPress = (page) => {
    this.props.reduxIncreaseCounter();
    this.props.goTo(page);
  }

  render() {
    return (
      <StyledContainer style={{ justifyContent: 'flex-end' }}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => this.onPress(types.Page1)}
        >
          <Text>Press Here2</Text>
        </TouchableOpacity>
      </StyledContainer>
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
  button: {
    display: 'flex',
    width: '40%',
    alignItems: "center",
    backgroundColor: "#00ff00",
    padding: 10
  }
});