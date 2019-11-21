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
export const DetailItemText = styled.Text`
  margin-top: 20px;
  font-size: 16px;
  font-weight: bold;
`;

export const DetailItemDescription = styled.Text`
  font-size: 14px;
  color: #515151;
`;

export const DetailView = styled.View`
  margin-top: 20px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
`;
export const DetailCard = styled.View`
  background: #fafafa;
  max-width: 50%;
`;

export const DetailCardAction = styled.View`
  padding-left: 5%;
  justify-content: space-between;
  align-items: center;
`;

export const BtnCall = styled.View`
  align-items: center;
  padding: 12px;
  background-color: green;
  border-radius: 8px;
  min-width: 80px;
  margin-bottom: 10px;
`;
export const BtnText = styled.Text`
  font-size: 14px;
  color: white;
`;
export const BtnSite = styled.View`
  align-items: center;
  padding: 12px;
  background-color: green;
  border-radius: 8px;
  min-width: 80px;
`;
