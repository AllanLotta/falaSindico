import styled from 'styled-components/native';
import {Dimensions} from 'react-native';

export const Container = styled.View`
  margin-top: 20px;
  margin-bottom: 200px;
  margin-left: 10px;
  margin-right: 10px;
  padding: 10px;
  background: #fafafa;
  border-radius: 4px;
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
  font-size: 16px;
  font-weight: bold;
  max-width: ${`${Dimensions.get('window').width * 0.6}px`};
`;

export const CardItem = styled.View`
  flex-direction: row;
  padding: 10px;
  border-bottom-color: #cecece;
  border-bottom-width: 1px;
`;
export const ItemDescription = styled.Text`
  font-size: 14px;
  color: #515151;
  max-width: ${`${Dimensions.get('window').width * 0.6}px`};
`;
export const DetailItemText = styled.Text`
  /* margin-top: 20px; */
  font-size: 16px;
  font-weight: bold;
`;

export const DetailItemDescription = styled.Text`
  font-size: 14px;
  color: #515151;
`;

export const DetailView = styled.View`
  margin-top: 20px;
  margin-bottom: 200px;
  margin-left: 10px;
  margin-right: 10px;
  background: #fafafa;
  border-radius: 4px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  padding-top: 25px;
  padding-bottom: 25px;
`;
export const DetailCard = styled.View`
  padding: 5px;
  background: #fafafa;
  max-width: 50%;
`;

export const DetailCardAction = styled.View`
  padding: 5px;
  justify-content: space-between;
  align-items: center;
`;

export const BtnCall = styled.View`
  align-items: center;
  padding: 12px;
  background-color: #33cc5e;
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
  background-color: #357ff5;
  border-radius: 8px;
  min-width: 80px;
`;
