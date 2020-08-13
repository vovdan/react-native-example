import React, { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { types } from '../redux';
import { addCount, goTo } from '../redux';
import { connect } from 'react-redux';
import { StyledTouchableOpacity, StyledContainer } from '../styles';

class Page1 extends Component {

  onPress = (page) => {
    this.props.reduxIncreaseCounter();
    this.props.goTo(page);
  }

  render() {
    return (
      
        <StyledContainer>
          <StyledTouchableOpacity
            backgroundColor='#ff00ff'
            onPress={() => this.onPress(types.Page2)}
          >
            <Text>Press Here1</Text>
          </StyledTouchableOpacity>
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

export default connect(null, mapDispatchToProps)(Page1);