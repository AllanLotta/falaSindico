import React, {useState, useContext} from 'react';
import {
  View,
  TextInput,
  Text,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import Icon from 'react-native-vector-icons/Ionicons';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {MenuContext} from '../../services/MenuContext';
import {DataContext} from '../../services/DataContext';
import BG from '../../assets/bg.jpg';

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
  const [codigo, setCod] = useState('');
  const [nome, setName] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState(false);
  const [errorMsg, setErrorMsg] = useState(false);
  const [apartamento, setApt] = useState('');
  const [loading, setLoading] = useState(false);
  const [
    menu,
    setMenu,
    activeRouter,
    setActiveRouter,
    isLoged,
    setIsLoged,
  ] = useContext(MenuContext);
  const [data, setData, dataForm, setDataForm] = useContext(DataContext);
  async function send() {
    setError(true);
    setLoading(true);
    console.log('Open send');
    const dataF = {
      codigo,
      nome,
      email,
      apartamento,
    };
    console.log(data);

    try {
      const res = await api.post('appValidarPredio', dataF);
      if (res.data === '0') {
        if (codigo && nome && email && apartamento) {
          setErrorMsg(true);
        }
        console.log('Error');
        setDataForm(dataF);
        setLoading(false);
        return res;
      }
      setData(res.data);
      await AsyncStorage.setItem('fs-data', JSON.stringify(res.data));

      setLoading(false);
      setActiveRouter('Meu Condomínio');
      setIsLoged(true);
      console.log(res);
    } catch (err) {
      setLoading(false);
      return err;
    }
  }
  return (
    <>
      <ImageBackground source={BG} style={{width: '100%', height: '100%'}}>
        <Container>
          <SafeAreaView>
            <KeyboardAwareScrollView
              scrollEnabled
              enableAutomaticScroll
              enableOnAndroid
              extraScrollHeight={50}>
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
                      onChangeText={e => {
                        setCod(e.toLocaleLowerCase());
                        setErrorMsg(false);
                      }}
                      style={
                        error
                          ? codigo
                            ? null
                            : {borderBottomColor: 'red'}
                          : null
                      }
                    />
                    <InputText
                      placeholder="Nome"
                      onChangeText={e => {
                        setName(e);
                      }}
                      style={
                        error
                          ? nome
                            ? null
                            : {borderBottomColor: 'red'}
                          : null
                      }
                    />
                    <InputText
                      placeholder="Email"
                      onChangeText={e => {
                        setEmail(e);
                      }}
                      style={
                        error
                          ? email
                            ? null
                            : {borderBottomColor: 'red'}
                          : null
                      }
                    />
                    <InputText
                      placeholder="Apartamento"
                      onChangeText={e => {
                        setApt(e);
                      }}
                      style={
                        error
                          ? apartamento
                            ? null
                            : {borderBottomColor: 'red'}
                          : null
                      }
                    />
                    <Action>
                      <ActionButton onPress={() => send()}>
                        <ActionText>
                          {loading ? 'Carregando...' : 'Efetuar Cadastro'}
                        </ActionText>
                      </ActionButton>
                    </Action>
                    {errorMsg ? (
                      <Text
                        style={{
                          color: 'red',
                          textAlign: 'center',
                          marginBottom: 10,
                        }}>
                        Código inválido
                      </Text>
                    ) : null}
                  </Card>
                </ScrollView>
              </Content>
            </KeyboardAwareScrollView>
          </SafeAreaView>
        </Container>
      </ImageBackground>
    </>
  );
}
