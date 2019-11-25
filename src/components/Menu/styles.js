import styled, {keyframes, css} from 'styled-components/native';
import {Dimensions} from 'react-native';

export const Container = styled.View`
  flex: 1;
  background: black;
  min-width: ${Dimensions.get('window').width * 0.7};
  height: 100%;
  z-index: 99;
`;
export const ScreenName = styled.Text`
  color: #fafafa;
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  background: black;
  padding: 12px;
  align-items: center;
`;

export const List = styled.FlatList`
  /* border: 1px solid yellow; */
`;
export const Item = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: flex-start;

  border-bottom-width: 1px;
  border-bottom-color: #fafafa;
  align-items: center;
  padding: 10px;
  padding-left: 13.3px;
`;
export const TextItem = styled.Text`
  margin-left: 20px;
  color: white;
`;

export const Logo = styled.Image`
  width: 50;
  height: 30;
  background: black;
`;
