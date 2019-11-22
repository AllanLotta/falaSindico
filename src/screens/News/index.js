import React, {useContext} from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  Dimensions,
  ImageBackground,
  ScrollView,
} from 'react-native';
import {DataContext} from '../../services/DataContext';
import BG from '../../assets/bg.jpg';

import {Container, List} from './styles';

export default function News() {
  const [data, setData] = useContext(DataContext);
  return (
    <>
      <ImageBackground source={BG} style={{width: '100%', height: '100%'}}>
        <ScrollView>
          <Container>
            <List
              data={data.noticias}
              keyExtractor={news => news.id}
              renderItem={({item}) => (
                <Image
                  style={{marginTop: 0}}
                  source={{
                    uri: item.imagem,
                    width: Dimensions.get('window').width * 1,
                    height: Dimensions.get('window').height * 0.25,
                  }}
                  resizeMode="contain"
                />
              )}
            />
          </Container>
        </ScrollView>
      </ImageBackground>
    </>
  );
}
