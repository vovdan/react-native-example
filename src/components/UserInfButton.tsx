import React, { Component } from 'react';
import {
  Text
} from 'react-native';
import { logOut, goTo, types, navScreenSelector } from '../redux';
import { connect } from 'react-redux';
import { View } from 'native-base';
import { StyledContainer, StyledTouchableOpacity } from '../styles';

class UserInfBut extends Component {

  goToUserInf = () => {
    this.props.currentSreen === types.UserInf ? this.props.goTo(types.Page1) : this.props.goTo(types.UserInf)
  }

  render() {
    return (
      <StyledContainer >
        <StyledTouchableOpacity
          backgroundColor='#00bfff'
          onPress={this.goToUserInf}>
          {this.props.currentSreen === types.UserInf ? <Text>Counter</Text> : <Text> User inf</Text>}
        </StyledTouchableOpacity>
      </StyledContainer >
    );
  }
}

function mapStateToProps(state) {
  return {
    currentSreen: navScreenSelector(state)
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    goTo: (screenName) => dispatch(goTo(screenName))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserInfBut)