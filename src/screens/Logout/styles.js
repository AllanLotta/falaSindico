import styled from 'styled-components/native';
import {Dimensions} from 'react-native';

export const Container = styled.View`
  min-width: ${Dimensions.get('window').width * 0.8};
  margin-top: 20px;
  margin-left: 10px;
  margin-right: 10px;
  background: #fafafa;
  border-radius: 4px;
`;

export const Card = styled.View`
  padding: 20px;
  background: #fafafa;
`;
export const Title = styled.View`
  border-bottom-width: 1px;
  border-bottom-color: #cecece;
  padding-bottom: 20px;
`;

export const TitleText = styled.Text`
  color: #555;
  font-size: 16px;
`;

export const Action = styled.View`
  margin-top: 10px;
  flex-direction: row;
  justify-content: center;
  /* border-bottom-width: 1px;
  border-bottom-color: #cecece;
  padding-bottom: 20px; */
`;

export const ActionBtn = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: center;
  border-radius: 8px;
  background: red;
  width: 100%;
  padding: 10px;
`;

export const ActionText = styled.Text`
  font-size: 18px;
  color: white;
`;
