import React, { Component } from 'react';
import {
  View,
  TextInput,
  Text,
  TouchableOpacity,
  StyleSheet
} from 'react-native';
import { loginRequest } from '../redux';
import { connect } from 'react-redux';

class LogInForm extends Component<{}> {
  state = {
    username: '',
    password: '',
  }

  signIn = () => {
    const { username, password } = this.state;
    this.props.login(username, password)
  }

  onChangeText = (key, value) => {
    this.setState({
      [key]: value
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          placeholder="User Name"
          value={this.state.username}
          style={styles.input}
          type='username'
          onChangeText={value => {
            this.setState({
              username: value
            })
          }}

        />
        <TextInput
          placeholder="Password"
          type='password'
          value={this.state.password}
          secureTextEntry
          style={styles.input}
          onChangeText={value => {
            this.setState({
              password: value
            })
          }}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={this.signIn}
        >
          <Text>Log in</Text>
        </TouchableOpacity>
      </View >
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    login: (username, password) => dispatch(loginRequest(username, password))
  }
}


export default connect(null, mapDispatchToProps)(LogInForm)

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    borderBottomWidth: 1,
    width: 255,
    marginBottom: 45,
    paddingLeft: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    width: '70%',
    alignItems: "center",
    backgroundColor: "#00bfff",
    padding: 10
  }
});