import React, {useState} from 'react';
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
                  onChangeText={e => setCod(e.target.value)}
                />
                <InputText
                  placeholder="Nome"
                  onChangeText={e => setName(e.target.value)}
                />
                <InputText
                  placeholder="Email"
                  onChangeText={e => setEmail(e.target.value)}
                />
                <InputText
                  placeholder="Apartamento"
                  onChangeText={e => setApt(e.target.value)}
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
