import React, {useContext, useEffect} from 'react';
import {Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {MenuContext} from '../../services/MenuContext';
import {DetailContext} from '../../services/DetailContext';

import {Container, ScreenName, Logo} from './styles';

export default function Header() {
  const [menu, setMenu, activeRouter, setActiveRouter] = useContext(
    MenuContext
  );
  const [detail, setDetail] = useContext(DetailContext);

  useEffect(() => {
    if (activeRouter !== 'Fala Síndico Clube') {
      setDetail(false);
    }
  }, [activeRouter]);
  function openMenu() {
    setMenu(true);
  }
  return (
    <Container>
      {!detail ? (
        <TouchableOpacity onPress={() => openMenu()}>
          <Icon name="ios-menu" size={25} color="white" />
        </TouchableOpacity>
      ) : (
        <Text />
      )}
      <ScreenName>{activeRouter}</ScreenName>
      {detail ? (
        <TouchableOpacity onPress={() => setDetail(false)}>
          <Icon name="ios-arrow-back" size={25} color="white" />
        </TouchableOpacity>
      ) : (
        <Text />
      )}
    </Container>
  );
}
