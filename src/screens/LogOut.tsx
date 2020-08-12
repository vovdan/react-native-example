import React, { Component } from 'react';
import {
  Text,
  TouchableOpacity,
  StyleSheet
} from 'react-native';
import { logOut, goTo, types } from '../redux';
import { connect } from 'react-redux';

class LogOut extends Component {

  logOut = () => {
    this.props.logout()
  }

  render() {
    return (
      <TouchableOpacity
        style={styles.button}
        onPress={this.logOut}>
        <Text>Log Out</Text>
      </TouchableOpacity>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(logOut()),
  }
}

export default connect(null, mapDispatchToProps)(LogOut)

const styles = StyleSheet.create({
  button: {
    width: '20%',
    alignItems: "center",
    backgroundColor: "#00bfff",
    padding: 10,
    marginRight: 0,
    marginLeft: 'auto'
  }
});