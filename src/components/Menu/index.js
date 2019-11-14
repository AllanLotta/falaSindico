import React, {useContext, useEffect} from 'react';
import {Text, SafeAreaView, TouchableOpacity, FlatList} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {MenuContext} from '../../services/MenuContext';
import LogoIcon from '../../assets/logo2.png';
import {Container, Header, List, Item, TextItem, Logo} from './styles';

const MenuItens = [
  {id: '01', text: 'Meu Condomínio', icon: 'md-grid'},
  {id: '02', text: 'Notícias', icon: 'ios-paper'},
  {id: '03', text: 'Fala Síndico Clube', icon: 'ios-briefcase'},
  {id: '04', text: 'Classificados', icon: 'ios-clipboard'},
  {id: '05', text: 'Arquivos', icon: 'ios-folder'},
  {id: '06', text: 'Enviar mensagem', icon: 'ios-chatbubbles'},
  {id: '07', text: 'Mudar de Prédio', icon: 'ios-log-out'},
];

export default function Menu() {
  const [menu, setMenu, activeRouter, setActiveRouter] = useContext(
    MenuContext
  );

  // useEffect(() => {
  //   setActiveRouter(MenuItens[0].text);
  // });

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
          <Logo source={LogoIcon} />
          <Text />
        </Header>
        <List
          data={MenuItens}
          keyExtractor={itemK => itemK.id}
          renderItem={({item}) => (
            <Item onPress={() => setActive(item.text)}>
              <Icon name={item.icon} size={28} color="white" />
              <TextItem>{item.text}</TextItem>
            </Item>
          )}
        />
        {/* {MenuItens.map(item => (
            <Item key={item.text} onPress={() => setActive(item.text)}>
              <Icon name={item.icon} size={28} color="white" />
              <TextItem>{item.text}</TextItem>
            </Item>
          ))} */}
      </SafeAreaView>
    </Container>
  );
}
