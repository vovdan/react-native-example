import styled from 'styled-components/native';

export const StyledTouchableOpacity = styled.TouchableOpacity`
  background-color: ${props => props.backgroundColor};
  padding: 10px
`
export const StyledContainer = styled.View`
  display: flex;
  flexDirection: row;
  background-color: ${props => props.backgroundColor ? props.backgroundColor : 'white'};
`