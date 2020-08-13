import React, { Component } from 'react';
import {
  Text,
  TouchableOpacity,
  StyleSheet
} from 'react-native';
import { connect } from 'react-redux';
import { View } from 'native-base';
import { currentUserSelector } from '../redux';

class UserInf extends Component {

  render() {
    return (
      <View style={styles.container}>
        <Text>{this.props.user.username}</Text>
        <Text>{this.props.user.secondName}</Text>
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: currentUserSelector(state)
  };
}

export default connect(mapStateToProps, null)(UserInf)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    color: 'black',
    margin: '40%'
  }
});