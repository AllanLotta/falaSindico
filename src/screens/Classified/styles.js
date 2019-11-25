import styled from 'styled-components/native';
import {Dimensions} from 'react-native';

export const Container = styled.View`
  min-width: ${Dimensions.get('window').width * 0.8};
  margin-left: 10px;
  margin-right: 10px;
  margin-top: 20px;
  margin-bottom: 200px;
  background: #fafafa;
`;

export const Item = styled.FlatList`
  background: #fafafa;
`;

export const ItemText = styled.Text`
  font-size: 16px;
`;

export const ItemDescription = styled.Text`
  font-size: 14px;

  color: #515151;
`;

export const Category = styled.View`
  flex-direction: row;
  padding: 10px;
  align-items: center;
  background: #d4d4d4;
`;
