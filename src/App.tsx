import React, { Component } from 'react';
import { connect } from 'react-redux';
import { StyleSheet, View } from 'react-native';
import Page1 from './screens/Page1';
import Page2 from './screens/Page2';
import UserInf from './screens/UserInfo';
import Counter from './screens/Counter';
import { countSelector, isLoggedSelector, navScreenSelector } from './redux';
import LogInForm from './screens/LogInForm';
import LogOut from './screens/LogOut';
import { types } from './redux';
import UserInfButton from './screens/UserInfButton';

class App extends Component {

  render() {
    return (

      <View>
        {this.props.isLogged &&
          <View >
            <LogOut />
            <UserInfButton />
          </View>}
        {this.props.currentSreen === types.Login && <LogInForm style={styles.form} />}
        {this.props.isLogged && <Counter count={this.props.count} />}
        {this.props.currentSreen === types.Page1 && <Page1 />}
        {this.props.currentSreen === types.Page2 && <Page2 />}
        {this.props.currentSreen === types.UserInf && <UserInf />}
      </View>

    );
  }
}

function mapStateToProps(state) {
  return {
    count: countSelector(state),
    isLogged: isLoggedSelector(state),
    currentSreen: navScreenSelector(state)
  };
}

export default connect(mapStateToProps, null)(App);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    marginBottom: 16
  }
});
