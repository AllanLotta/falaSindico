import styled from 'styled-components/native';

export const Container = styled.View``;

export const Card = styled.View`
  padding: 20px;
`;
export const Title = styled.View`
  border-bottom-width: 1px;
  border-bottom-color: #cecece;
  padding-bottom: 20px;
`;

export const TitleText = styled.Text`
  color: #555;
`;

export const Action = styled.View`
  margin-top: 20px;
  flex-direction: row;
  justify-content: center;
  border-bottom-width: 1px;
  border-bottom-color: #cecece;
  padding-bottom: 20px;
`;

export const ActionBtn = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: center;
  border-radius: 8px;
  background: red;
  width: 60%;
  padding: 10px;
`;

export const ActionText = styled.Text`
  font-size: 18px;
  color: white;
`;
