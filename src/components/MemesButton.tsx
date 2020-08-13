import React, { Component } from 'react';
import {
  Text
} from 'react-native';
import { logOut, goTo, types, navScreenSelector } from '../redux';
import { connect } from 'react-redux';
import { View } from 'native-base';
import { StyledContainer, StyledTouchableOpacity } from '../styles';
import { memes } from '../redux/toolkit';

const memsUrl = [
  { memUrl: require('../memes/Aragorn.jpg'), id: 1 },
  { memUrl: require('../memes/Pacan.jpg'), id: 2 },
  { memUrl: require('../memes/Bellisimo.jpg'), id: 3 }
];

class MemesBut extends Component {

  goToUserInf = () => {
    this.props.currentSreen === types.Memes ? this.props.goTo(types.Page1) : (this.props.goTo(types.Memes) && this.props.takeMems())
  }

  render() {
    return (
      <StyledContainer >
        <StyledTouchableOpacity
          backgroundColor='#00bfff'
          onPress={this.goToUserInf}>
          {this.props.currentSreen === types.Memes ? <Text>Page1</Text> : <Text>Memes</Text>}
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
    goTo: (screenName) => dispatch(goTo(screenName)),
    takeMems: () => dispatch(memes.actions.loadMems(memsUrl))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MemesBut)