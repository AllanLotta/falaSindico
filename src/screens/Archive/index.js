import React, {useContext, useEffect, useState} from 'react';
import {View, TextInput, Text, ImageBackground} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {DataContext} from '../../services/DataContext';
import Search from '../../components/Search';
import BG from '../../assets/bg.jpg';

import {Container, Item, ItemText, ItemDescription} from './styles';

export default function Archive() {
  const [searchRes, setSearchRes] = useState();
  const [data, setData] = useContext(DataContext);
  function getRes(res) {
    setSearchRes(res);
  }
  return (
    <ImageBackground source={BG} style={{width: '100%', height: '100%'}}>
      <Container>
        <Search data={data.artigos} result={e => getRes(e)} />
        <Item
          data={searchRes || data.artigos}
          keyExtractor={serv => serv.nome}
          renderItem={({item}) => (
            <>
              <ItemText>{item.nome}</ItemText>
              {/* <ItemDescription>{item.telefone}</ItemDescription> */}
            </>
          )}
        />
      </Container>
    </ImageBackground>
  );
}
