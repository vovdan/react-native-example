import React, { Component } from 'react';
import { connect } from 'react-redux';
import { StyleSheet, View, ScrollView, Text } from 'react-native';
import Page1 from './screens/Page1';
import Page2 from './screens/Page2';
import UserInf from './screens/UserInfo';
import Counter from './screens/Counter';
import { countSelector, isLoggedSelector, navScreenSelector } from './redux';
import LogInForm from './screens/LogInForm';
import LogOut from './components/LogOut';
import { types } from './redux';
import UserInfButton from './components/UserInfButton';
import MemesButton from './components/MemesButton';
import Memes from './screens/Memes';

class App extends Component {

  render() {
    return (

      <View style={{ flex: 1 }}>

        {this.props.currentSreen === types.Login && <LogInForm style={styles.form} />}
        {this.props.isLogged && <Counter count={this.props.count} />}
        <ScrollView >
          {this.props.currentSreen === types.Page1 && <Page1 />}
          {this.props.currentSreen === types.Page2 && <Page2 />}
          {this.props.currentSreen === types.UserInf && <UserInf />}
          {this.props.currentSreen === types.Memes && <Memes />}
        </ScrollView>
        {this.props.isLogged &&
          <View
            style={styles.container}
          >
            <LogOut />
            <UserInfButton />
            <MemesButton />
          </View>}
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
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly'
  }
});
