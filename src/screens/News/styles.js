import styled from 'styled-components/native';
import Av from '../../assets/av.jpg';

export const Container = styled.View``;

export const Card = styled.View`
  border: 1px solid black;
  background-image: url(${Av});
`;

export const Info = styled.View`
  flex-direction: row;
`;

export const InforText = styled.Text``;
