import React, {useContext} from 'react';
import {View, Text, FlatList, Image} from 'react-native';
import {DataContext} from '../../services/DataContext';

import {Container, List} from './styles';

export default function News() {
  const [data, setData] = useContext(DataContext);
  return (
    <>
      <Container>
        <List
          data={data.noticias}
          keyExtractor={news => news.id}
          renderItem={({item}) => (
            <Image
              style={{marginTop: 20}}
              source={{uri: item.imagem, width: 250, height: 100}}
            />
          )}
        />
      </Container>
    </>
  );
}
