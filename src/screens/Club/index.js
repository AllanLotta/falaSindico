import React, {useContext, useEffect, useState} from 'react';
import {View, TextInput, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {DataContext} from '../../services/DataContext';
import Search from '../../components/Search';

import {
  Container,
  InputSearch,
  Item,
  ItemText,
  ItemDescription,
} from './styles';

export default function Club() {
  const [text, setText] = useState();
  const [data, setData] = useContext(DataContext);
  function getRes(res) {
    console.log(res);
  }
  return (
    <Container>
      <Search data={data.servicos} result={e => getRes(e)} />
      <Item
        data={data.servicos}
        keyExtractor={serv => serv.nome}
        renderItem={({item}) => (
          <>
            <ItemText>{item.nome}</ItemText>
            <ItemDescription>{item.telefone}</ItemDescription>
          </>
        )}
      />
    </Container>
  );
}
