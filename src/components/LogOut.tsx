import React, { Component } from 'react';
import {
  Text,
  TouchableOpacity,
  StyleSheet
} from 'react-native';
import { logOut, goTo, types } from '../redux';
import { connect } from 'react-redux';
import { StyledContainer, StyledTouchableOpacity } from '../styles';

class LogOut extends Component {

  logOut = () => {
    this.props.logout()
  }

  render() {
    return (
      <StyledContainer>
        <StyledTouchableOpacity
          //style={styles.button}
          backgroundColor='#00bfff'
          onPress={this.logOut}>
          <Text>Log Out</Text>
        </StyledTouchableOpacity>
      </StyledContainer>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(logOut()),
  }
}

export default connect(null, mapDispatchToProps)(LogOut)