import React from 'react';
import {Text, SafeAreaView, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import FaIcon from 'react-native-vector-icons/FontAwesome';

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
  return (
    <Container>
      <SafeAreaView>
        <Header>
          <TouchableOpacity>
            <Icon name="ios-menu" size={30} color="white" />
          </TouchableOpacity>
        </Header>
        <List>
          {MenuItens.map(item => (
            <Item>
              <Icon name={item.icon} size={28} color="white" />
              <TextItem>{item.text}</TextItem>
            </Item>
          ))}
        </List>
      </SafeAreaView>
    </Container>
  );
}
