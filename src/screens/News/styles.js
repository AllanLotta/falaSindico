import styled from 'styled-components/native';

export const Container = styled.View`
  margin-top: 20px;
  margin-left: 10px;
  margin-bottom: 200px;
  margin-right: 10px;
  background: #fafafa;
  padding: 5px;
  border-radius: 4px;
  align-items: center;
  justify-content: center;
`;

export const List = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
})``;
