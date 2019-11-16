import styled from 'styled-components/native';
import Av from '../../assets/av.jpg';

export const Container = styled.View`
  align-items: center;
`;

export const List = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
})`
  margin-top: 20px;
`;
