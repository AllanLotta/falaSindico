import styled from 'styled-components/native';

export const Container = styled.View``;
export const Header = styled.View`
  flex-direction: row;
  justify-content: center;
  background: #387ff5;
  padding: 12px;
  align-items: center;
`;

export const Title = styled.View`
  flex-direction: row;
  justify-content: center;
  background: black;
  padding: 10px;
`;

export const TitleText = styled.Text`
  font-size: 20px;
  color: white;
`;

export const Logo = styled.Image`
  width: 50;
  height: 30;
`;

export const Content = styled.View`
  height: 100%;
  background: #fafafa;
  padding: 30px;
`;

export const Card = styled.View`
  border: 2px solid #f1f1f1;
  border-radius: 8px;
  background: #fafafa;
  padding: 10px;
`;

export const InputText = styled.TextInput`
  border-bottom-color: #cecece;
  border-bottom-width: 1px;
`;
export const Action = styled.View`
  flex-direction: row;
  justify-content: center;
  margin-top: 30px;
  margin-bottom: 20px;
`;
export const ActionButton = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: center;
  width: 60%;
  background: blue;
  border-radius: 8px;
  padding: 15px;
`;

export const ActionText = styled.Text`
  color: white;
`;
