import React, {useContext} from 'react';
import {View} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import {MenuContext} from '../../services/MenuContext';
import {
  Container,
  Card,
  Title,
  TitleText,
  Action,
  ActionBtn,
  ActionText,
} from './styles';

export default function Logout() {
  const [
    menu,
    setMenu,
    activeRouter,
    setActiveRouter,
    isLoged,
    setIsLoged,
  ] = useContext(MenuContext);
  function logout() {
    console.log('Saindo!');
    AsyncStorage.setItem('fs-data', '');
    setIsLoged(false);
  }
  return (
    <>
      <Container>
        <Card>
          <Title>
            <TitleText>
              Deseja mudar do prédio atual e digitar um novo código de
              condomínio?
            </TitleText>
          </Title>
          <Action>
            <ActionBtn onPress={() => logout()}>
              <ActionText>Mudar de Prédio</ActionText>
            </ActionBtn>
          </Action>
        </Card>
      </Container>
    </>
  );
}
