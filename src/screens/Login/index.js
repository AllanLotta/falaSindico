import React, {useState} from 'react';
import {
  View,
  TextInput,
  Text,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
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

export default function Login() {
  const [cod, setCod] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [apt, setApt] = useState('');

  function send() {
    const data = {
      cod,
      name,
      email,
      apt,
    };
    console.log(data);
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
