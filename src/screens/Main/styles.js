import styled from 'styled-components/native';

export const Container = styled.View``;

export const Content = styled.View`
  height: 100%;
  background: #969696;
`;
export const Card = styled.View`
  background: #fafafa;
  height: 100%;
`;

export const Title = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-bottom-color: #cecece;
  border-bottom-width: 1px;
  padding: 20px;
`;

export const TitleText = styled.Text`
  font-size: 20px;
  font-weight: bold;
`;

// Item, ItemHeader, ItemTitle, ItemDate, ItemDescription
export const ItemList = styled.View`
  margin-bottom: 200px;
`;
export const Item = styled.View`
  padding: 20px;
  border-bottom-color: #cecece;
  border-bottom-width: 1px;
`;

export const ItemHeader = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const ItemTitle = styled.Text`
  font-size: 18px;
  color: #3a3a3a;
`;
export const ItemDate = styled.Text`
  font-size: 12px;
  color: #387ff5;
`;

export const ItemDescription = styled.Text`
  margin-top: 20px;
  font-size: 14px;
  color: #515151;
`;
