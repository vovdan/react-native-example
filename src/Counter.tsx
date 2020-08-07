import React, { Component } from 'react';
import { Container, Content, Text, Card, Header, Body, Button, Title, CardItem } from 'native-base';
import { addCount } from './actions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class Counter extends Component {
  render() {
    console.log(this.props.count);
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