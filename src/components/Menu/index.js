import React, {useContext} from 'react';
import {Text, SafeAreaView, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {MenuContext} from '../../services/MenuContext';

import {Container, Header, List, Item, TextItem} from './styles';

const MenuItens = [
  {text: 'Meu Condomínio', icon: 'md-grid'},
  {text: 'Notícias', icon: 'ios-paper'},
  {text: 'Fala Síndico Clube', icon: 'ios-briefcase'},
  {text: 'Classificados', icon: 'ios-clipboard'},
  {text: 'Arquivos', icon: 'ios-folder'},
  {text: 'Enviar mensagem', icon: 'ios-chatbubbles'},
  {text: 'Mudar de Prédio', icon: 'ios-log-out'},
];

export default function Menu() {
  const [menu, setMenu, activeRouter, setActiveRouter] = useContext(
    MenuContext
  );

  function closeMenu() {
    setMenu(false);
  }
  function setActive(RouterName) {
    setActiveRouter(RouterName);
    closeMenu();
  }
  return (
    <Container>
      <SafeAreaView>
        <Header>
          <TouchableOpacity onPress={() => closeMenu()}>
            <Icon name="ios-menu" size={30} color="white" />
          </TouchableOpacity>
        </Header>
        <List>
          {MenuItens.map(item => (
            <Item key={item.text} onPress={() => setActive(item.text)}>
              <Icon name={item.icon} size={28} color="white" />
              <TextItem>{item.text}</TextItem>
            </Item>
          ))}
        </List>
      </SafeAreaView>
    </Container>
  );
}
