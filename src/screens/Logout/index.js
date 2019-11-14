import React from 'react';
import {View} from 'react-native';

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
            <ActionBtn>
              <ActionText>Mudar de Prédio</ActionText>
            </ActionBtn>
          </Action>
        </Card>
      </Container>
    </>
  );
}
