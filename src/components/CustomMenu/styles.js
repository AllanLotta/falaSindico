import styled, {keyframes, css} from 'styled-components/native';
import {Dimensions} from 'react-native';

export const Container = styled.View`
  flex: 1;
  background: black;
  height: ${Dimensions.get('window').height};
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

export const Logo = styled.Image`
  width: 50;
  height: 30;
  background: black;
`;
