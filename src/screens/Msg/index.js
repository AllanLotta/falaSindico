import React, {useState, useContext, useEffect} from 'react';
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
import Header from '../../components/Header';

import {
  Container,
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
import api from '../../services/api';

export default function Msg({navigation}) {
  const [titulo, setTitulo] = useState('');
  const [senha, setSenha] = useState('');
  const [mensagem, setMensagem] = useState('');
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState(false);
  const [isSindico, setIsSindico] = useState(false);
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

  useEffect(() => {
    async function getLocal() {
      const res = await AsyncStorage.getItem('fs-isSindico');
      console.log('============', res);
      if (res.length > 3) {
        console.log('È sindico');
        setIsSindico(true);
      } else {
        setIsSindico(false);
      }
    }
    getLocal();
  });

  async function send() {
    const msg = {
      id: data.id,
      titulo,
      senha,
      mensagem,
    };
    console.log(msg);
    setError(true);
    setLoading(true);

    try {
      const res = await api.post('appEnviarMensagemSindico', msg);
      if (res.data === 0) {
        if (titulo && senha && mensagem) {
          setErrorMsg(true);
          setTimeout(() => {
            setErrorMsg(false);
          }, 5000);
        }
        setLoading(false);
        return res;
      }

      setSuccess(true);
      setTimeout(() => {
        setSuccess(false);
      }, 5000);

      // reset values
      setTitulo('');
      setSenha('');
      setMensagem('');
      setError(false);

      setLoading(false);
      console.log(res);
    } catch (err) {
      setLoading(false);
      return err;
    }

    // post(baseUrl + "appEnviarMensagemSindico", mensagem) // titulo, senha, mensagem
  }
  return (
    <>
      <Header navigation={navigation} />
      <ImageBackground source={BG} style={{width: '100%', height: '100%'}}>
        <Container>
          <SafeAreaView>
            <KeyboardAwareScrollView
              scrollEnabled
              enableAutomaticScroll
              enableOnAndroid
              extraScrollHeight={50}>
              <Content>
                <ScrollView>
                  {isSindico ? (
                    <Card>
                      <InputText
                        placeholder="Título"
                        value={titulo}
                        maxLength={50}
                        onChangeText={e => {
                          setTitulo(e);
                          setErrorMsg(false);
                        }}
                        style={
                          error
                            ? titulo
                              ? null
                              : {borderBottomColor: 'red'}
                            : null
                        }
                      />
                      <InputText
                        placeholder="Senha do painel"
                        secureTextEntry
                        value={senha}
                        onChangeText={e => {
                          setSenha(e);
                        }}
                        style={
                          error
                            ? senha
                              ? null
                              : {borderBottomColor: 'red'}
                            : null
                        }
                      />
                      <InputText
                        placeholder="Mensagem"
                        value={mensagem}
                        maxLength={120}
                        onChangeText={e => {
                          setMensagem(e);
                        }}
                        style={
                          error
                            ? mensagem
                              ? null
                              : {borderBottomColor: 'red'}
                            : null
                        }
                      />
                      <Action>
                        <ActionButton onPress={() => send()}>
                          <ActionText>
                            {loading ? 'Carregando...' : 'Enviar Mensagem'}
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
                          Verifique sua senha e tente novamente
                        </Text>
                      ) : null}
                      {success ? (
                        <Text
                          style={{
                            color: 'green',
                            textAlign: 'center',
                            marginBottom: 10,
                          }}>
                          Mensagem enviada com sucesso!
                        </Text>
                      ) : null}
                    </Card>
                  ) : (
                    <Card>
                      <Text style={{textAlign: 'center', color: 'red'}}>
                        Apenas síndicos podem enviar mensagens
                      </Text>
                    </Card>
                  )}
                </ScrollView>
              </Content>
            </KeyboardAwareScrollView>
          </SafeAreaView>
        </Container>
      </ImageBackground>
    </>
  );
}
