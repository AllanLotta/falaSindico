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
  const [data, setData] = useContext(DataContext);
  useEffect(() => {
    console.log('Data', data);
  }, [data]);

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
