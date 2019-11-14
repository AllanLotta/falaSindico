import React, {useContext} from 'react';
import {Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {MenuContext} from '../../services/MenuContext';

import {Container, ScreenName, Logo} from './styles';

export default function Header() {
  const [menu, setMenu, activeRouter, setActiveRouter] = useContext(
    MenuContext
  );

  function openMenu() {
    setMenu(true);
  }
  return (
    <Container>
      <TouchableOpacity onPress={() => openMenu()}>
        <Icon name="ios-menu" size={25} color="white" />
      </TouchableOpacity>
      <ScreenName>{activeRouter}</ScreenName>
      <Text />
    </Container>
  );
}
