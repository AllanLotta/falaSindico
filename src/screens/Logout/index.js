import React, {useContext} from 'react';
import {View, ImageBackground} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import {MenuContext} from '../../services/MenuContext';
import BG from '../../assets/bg.jpg';
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
      <ImageBackground source={BG} style={{width: '100%', height: '100%'}}>
        <Container>
          <Card>
            <Title>
              <TitleText>
                Deseja sair do prédio atual e digitar um novo código de
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
      </ImageBackground>
    </>
  );
}
