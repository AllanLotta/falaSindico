import React, {useEffect, useContext} from 'react';
import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  ImageBackground,
  Dimensions,
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import {DataContext} from '../../services/DataContext';
import Ap from '../../assets/predio1.png';
import BG from '../../assets/bg.jpg';
import api from '../../services/api';

import {
  Container,
  Card,
  Content,
  Title,
  TitleText,
  ItemList,
  Item,
  ItemHeader,
  ItemTitle,
  ItemDate,
  ItemDescription,
  Logo,
} from './styles';

export default function Main() {
  const [data, setData, cod, setCod] = useContext(DataContext);
  useEffect(() => {
    async function getData() {
      const codigo = JSON.parse(await AsyncStorage.getItem('fs-cod'));
      const sendData = {
        codigo,
      };
      try {
        console.log('cod', sendData);
        const res = await api.post('appValidarPredio', sendData);
        console.log('RES', res);
        setData(res.data);
      } catch (err) {
        return err;
      }
    }
    getData();
    console.log(data);
  }, []);

  return (
    <>
      <ImageBackground source={BG} style={{width: '100%', height: '100%'}}>
        <ScrollView>
          <Container>
            <Content>
              <Card>
                {data && (
                  <>
                    <Title>
                      <Logo
                        source={{
                          uri: data.imagem,
                          width: Dimensions.get('window').width * 0.4,
                          height: Dimensions.get('window').width * 0.4,
                        }}
                        resizeMode="contain"
                      />
                      <TitleText>{data.nome}</TitleText>
                      <Text />
                    </Title>
                    <ItemList
                      data={data.mensagens}
                      keyExtractor={msg => msg.id}
                      renderItem={({item}) => (
                        <Item>
                          <ItemHeader>
                            <ItemTitle>{item.titulo}</ItemTitle>
                            <ItemDate>{item.data}</ItemDate>
                          </ItemHeader>
                          <ItemDescription>{item.mensagem}</ItemDescription>
                        </Item>
                      )}
                    />
                  </>
                )}
              </Card>
            </Content>
          </Container>
        </ScrollView>
      </ImageBackground>
    </>
  );
}
