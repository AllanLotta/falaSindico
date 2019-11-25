import styled from 'styled-components/native';
import {Dimensions} from 'react-native';

export const Container = styled.View`
  min-width: ${Dimensions.get('window').width * 0.8};
  padding: 20px;
  margin-bottom: 200px;
  padding-top: 20px;
`;

export const Item = styled.FlatList`
  background: #fafafa;
  padding: 20px;
`;

export const ItemText = styled.Text`
  margin-top: 20px;
  font-size: 16px;
  font-weight: bold;
`;

export const ItemDescription = styled.Text`
  font-size: 14px;
  color: #515151;
`;
