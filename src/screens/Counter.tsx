import React, { Component } from 'react';
import { Container, Content, Text, Card, Header, Body, Button, Title, CardItem, View } from 'native-base';

class Counter extends Component {
  render() {
    return (
      <View>
        <Header>
          <Body>
            <Title>Redux Counter  {this.props.count}</Title>
          </Body>
        </Header>
      </View>
    );
  }
}

export default Counter;