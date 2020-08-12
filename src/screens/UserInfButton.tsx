import React, { Component } from 'react';
import {
  Text,
  TouchableOpacity,
  StyleSheet
} from 'react-native';
import { logOut, goTo, types } from '../redux';
import { connect } from 'react-redux';
import { View } from 'native-base';

class UserInfBut extends Component {

  goToUserInf = () => {
    this.props.goTo()
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.button}
          onPress={this.goToUserInf}>
          <Text>User inf</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    goTo: () => dispatch(goTo(types.UserInf))
  }
}

export default connect(null, mapDispatchToProps)(UserInfBut)

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: "#00bfff",
    padding: 10
  }
});