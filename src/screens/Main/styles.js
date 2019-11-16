import styled from 'styled-components/native';

export const Container = styled.View``;

export const Content = styled.View`
  background: #fafafa;
`;
export const Card = styled.View`
  background: #fafafa;
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
  max-width: 70%;
  overflow: hidden;
  align-items: center;
  font-size: 15px;
  font-weight: bold;
`;

// Item, ItemHeader, ItemTitle, ItemDate, ItemDescription
export const ItemList = styled.FlatList`
  height: 75%;
`;
export const Item = styled.View`
  padding: 20px;
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

export const Logo = styled.Image`
  margin-left: 15px;
  width: 40;
  height: 70;
`;
