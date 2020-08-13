import React, { Component } from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Text, View, Button } from 'react-native';
import Page1 from './Page1';
import Page2 from './Page2';
import { addCount } from './actions';
import Counter from './Counter';
import { countSelector } from './selectors';

class App extends Component {
  state = {
    isFirstComponent: true
  }

  onPress = () => {
    this.setState({
      isFirstComponent: !this.state.isFirstComponent
    });
    this.props.reduxIncreaseCounter()
  }

  render() {
    return (

      <View>
        <Counter count={this.props.count}/>
        {this.state.isFirstComponent && <Page1 onPress={this.onPress.bind(this)} />}
        {!this.state.isFirstComponent && <Page2 onPress={this.onPress.bind(this)} />}
      </View>

    );
  }
}

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

function mapStateToProps(state) {
  return {
    count: countSelector(state)
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    reduxIncreaseCounter: () => dispatch(addCount()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);