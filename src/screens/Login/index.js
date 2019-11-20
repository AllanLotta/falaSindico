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
  const [codigo, setCod] = useState('cel04');
  const [nome, setName] = useState('Allan');
  const [email, setEmail] = useState('allan@gmail.com');
  const [apartamento, setApt] = useState('07');
  const [loading, setLoading] = useState(false);
  const [
    menu,
    setMenu,
    activeRouter,
    setActiveRouter,
    isLoged,
    setIsLoged,
  ] = useContext(MenuContext);
  async function send() {
    setLoading(true);
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
      setLoading(false);
      setIsLoged(true);
      console.log(res);
    } catch (error) {
      setLoading(false);
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
                    <ActionText>
                      {loading ? 'Carregando...' : 'Efetuar Cadastro'}
                    </ActionText>
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
