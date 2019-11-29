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

export default function Login({navigation}) {
  const [codigo, setCodigo] = useState('FS-teste');
  const [nome, setName] = useState('allan');
  const [email, setEmail] = useState('allan@gmail.com');
  const [error, setError] = useState(false);
  const [errorMsg, setErrorMsg] = useState(false);
  const [apartamento, setApt] = useState('11');
  const [loading, setLoading] = useState(false);
  const [
    menu,
    setMenu,
    activeRouter,
    setActiveRouter,
    isLoged,
    setIsLoged,
  ] = useContext(MenuContext);
  const [data, setData, cod, setCod] = useContext(DataContext);

  function isSindico(codUser) {
    console.log('Inside check ===');
    console.log('cod', codUser);

    const x = codUser.charAt(0);
    const y = codUser.charAt(1);
    console.log('x', x);
    console.log('y', y);

    if (x == 'f' && y == 's') {
      console.log('Resultado do check', true);
      return true;
    }
    if (x == 'F' && y == 'S') {
      console.log('Resultado do check', true);
      return true;
    }
    if (x == 'f' && y == 'S') {
      console.log('Resultado do check', true);
      return true;
    }
    if (x == 'F' && y == 's') {
      console.log('Resultado do check', true);
      return true;
    }
    console.log('Resultado do check', false);
    return false;
  }
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
    console.log(dataF);

    try {
      const res = await api.post('appValidarPredio', dataF);
      if (res.data === '0') {
        if (codigo && nome && email && apartamento) {
          setErrorMsg(true);
        }
        console.log('Error');
        setLoading(false);
        return res;
      }
      setData(res.data);
      const checkIsSindico = isSindico(codigo);
      if (checkIsSindico) {
        await AsyncStorage.setItem('fs-isSindico', 'sindico');
      } else {
        // await AsyncStorage.setItem('fs-isSindico', false);
      }
      await AsyncStorage.setItem('fs-cod', JSON.stringify(codigo)); // save cod to get data in others access
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
                        setCodigo(e.toLocaleLowerCase());
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

// Login.navigationOptions = {
//   headerShown: false,
// };
