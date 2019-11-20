import React, {useContext, useEffect, useState} from 'react';
import {View, TextInput, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {DataContext} from '../../services/DataContext';

import {Container, SearchCard, InputSearch} from './styles';

export default function Search({data, element, result}) {
  const [text, setText] = useState('');
  useEffect(() => {
    console.log(data);
    console.log(text);
  }, [text]);

  function onHandle(e) {
    setText(e);
    const res = data.filter(t => t.nome === 'e');
    console.log(res);
    // result();
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
