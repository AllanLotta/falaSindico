import React, {useState, useContext} from 'react';
import {
  View,
  TextInput,
  Text,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import Icon from 'react-native-vector-icons/Ionicons';
import {MenuContext} from '../../services/MenuContext';

import {
  Container,
  Header,
  Title,
  TitleText,
  Content,
  Card,
  Action,
  ActionButton,
  ActionText,
  InputText,
  Logo,
} from './styles';
import Logo1 from '../../assets/logo2.png';
import api from '../../services/api';

export default function Login() {
  const [codigo, setCod] = useState('cel01');
  const [nome, setName] = useState('Allan');
  const [email, setEmail] = useState('allan@gmail.com');
  const [apartamento, setApt] = useState('07');
  const [
    menu,
    setMenu,
    activeRouter,
    setActiveRouter,
    isLoged,
    setIsLoged,
  ] = useContext(MenuContext);
  async function send() {
    console.log('Open send');
    const data = {
      codigo,
      nome,
      email,
      apartamento,
    };
    console.log(data);

    try {
      const res = await api.post('appValidarPredio', data);
      AsyncStorage.setItem('fs-data', JSON.stringify(res.data));
      setActiveRouter('Meu Condomínio');
      setIsLoged(true);
      console.log(res);
    } catch (error) {
      return error;
    }
  }
  return (
    <>
      <Container>
        <SafeAreaView>
          <Header>
            <Logo source={Logo1} />
          </Header>
          <Title>
            <TitleText>Cadastro de Morador</TitleText>
          </Title>
          <Content>
            <ScrollView>
              <Card>
                <InputText
                  placeholder="Código do Prédio"
                  onChangeText={e => setCod(e)}
                />
                <InputText placeholder="Nome" onChangeText={e => setName(e)} />
                <InputText
                  placeholder="Email"
                  onChangeText={e => setEmail(e)}
                />
                <InputText
                  placeholder="Apartamento"
                  onChangeText={e => setApt(e)}
                />
                <Action>
                  <ActionButton onPress={() => send()}>
                    <ActionText>Efetuar Cadastro</ActionText>
                  </ActionButton>
                </Action>
              </Card>
            </ScrollView>
          </Content>
        </SafeAreaView>
      </Container>
    </>
  );
}
