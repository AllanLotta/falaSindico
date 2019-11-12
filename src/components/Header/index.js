import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import {Container, ScreenName} from './styles';

export default function Header() {
  return (
    <Container>
      <TouchableOpacity>
        <Icon name="ios-menu" size={25} color="white" />
      </TouchableOpacity>
      <ScreenName>Nome da Tela</ScreenName>
      <Text />
    </Container>
  );
}
