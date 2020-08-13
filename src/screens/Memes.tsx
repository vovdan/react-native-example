import React, { Component } from 'react';
import {
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView
} from 'react-native';
import { connect } from 'react-redux';
import { View } from 'native-base';
import { currentUserSelector } from '../redux';
import { memes } from '../redux/toolkit';
import { memesUrlSelector } from '../redux';

class Memes extends Component {
  render() {
    return (
      <View >
        {this.props.memes.map(mem => <Image source={mem.memUrl} style={{ width: 300, height: 200, margin: 10 }} key={mem.id} />)}
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    memes: memesUrlSelector(state)
  };
}

export default connect(mapStateToProps, null)(Memes)