import React, { Component } from 'react';
import { Container, Content, Text, Card, Header, Body, Button, Title, CardItem } from 'native-base';

class Counter extends Component {
  render() {
    return (
      <Container>
        <Header>
          <Body>
            <Title>Redux Counter  {this.props.count}</Title>
          </Body>
        </Header>
      </Container>
    );
  }
}

export default Counter;