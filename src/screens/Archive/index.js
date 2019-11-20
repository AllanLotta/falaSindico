import React, {useContext, useEffect, useState} from 'react';
import {View, TextInput, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {DataContext} from '../../services/DataContext';
import Search from '../../components/Search';

import {Container, Item, ItemText, ItemDescription} from './styles';

export default function Archive() {
  const [searchRes, setSearchRes] = useState();
  const [data, setData] = useContext(DataContext);
  function getRes(res) {
    setSearchRes(res);
  }
  return (
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
  );
}
