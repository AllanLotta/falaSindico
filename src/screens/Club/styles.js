import styled from 'styled-components/native';

export const Container = styled.View`
  padding: 20px;
  padding-top: 20px;
`;

export const Search = styled.View`
  flex-direction: row;
  align-items: center;
  border-bottom-width: 1px;
  border-bottom-color: #cecece;
`;
export const InputSearch = styled.TextInput`
  margin-left: 5px;
`;

export const Item = styled.FlatList`
  margin-top: 10px;
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
