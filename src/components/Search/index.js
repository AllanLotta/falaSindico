import React, {useContext, useEffect, useState} from 'react';
import {View, TextInput, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import SearchInput, {createFilter} from 'react-native-search-filter';
import {DataContext} from '../../services/DataContext';

import {Container, SearchCard, InputSearch} from './styles';

export default function Search({data, element, result}) {
  const [text, setText] = useState('');
  const [res, setRes] = useState([]);
  const [keys, setKeys] = useState([]);
  useEffect(() => {
    const key = element ? [element] : ['nome'];
    setKeys(key);
  }, [element]);

  function onHandle(e) {
    setText(e);
    setRes(data.filter(createFilter(e, keys)));

    // const res = data.filter(t => t.nome === 'e');
    // console.log('res', res);
    if (e.length === 0) {
      // console.log('Retornando a data original', data);
      return result(data);
    }
    if (res.length > 0) {
      // console.log('Retornando o res', res);
      return result(res);
    }
  }
  return (
    <Container>
      <SearchCard>
        <Icon name="ios-search" size={20} color="grey" />
        <InputSearch
          placeholder="Procurar Serviço"
          onChangeText={e => onHandle(e)}
        />
      </SearchCard>
    </Container>
  );
}
