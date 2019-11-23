import React, {useContext, useEffect, useState} from 'react';
import {View, TextInput, Text, ImageBackground, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {DataContext} from '../../services/DataContext';
import Search from '../../components/Search';
import BG from '../../assets/bg.jpg';

import {Container, Item, ItemText, ItemDescription, Category} from './styles';

export default function Classified() {
  const [searchRes, setSearchRes] = useState([]);
  const [classf, setClassf] = useState([]);
  const [automoveis, setAutomoveis] = useState([]);
  const [imoveis, setImovei] = useState([]);
  const [outros, setOutros] = useState([]);
  const [allClass, setAllClass] = useState([]);
  const [data, setData] = useContext(DataContext);
  function getRes(res) {
    setSearchRes(res);
  }
  function checkCategory(cat) {
    switch (cat) {
      case '1':
        return 'Automóveis';
      case '2':
        return 'Imóveis';
      default:
        return 'outros';
    }
  }

  useEffect(() => {
    const res = [];
    const c = data.classificados;

    const aut = data.classificados[1];
    const imo = data.classificados[2];
    const out = data.classificados[3];

    const autI = [];
    const imoI = [];
    const outI = [];
    aut.forEach(element => {
      autI.push(element);
    });
    imo.forEach(element => {
      imoI.push(element);
    });
    outI.forEach(element => {
      outI.push(element);
    });
    const aux = aut.concat(imo);
    const full = aux.concat(out);
    console.log('FULL', full);
    setAllClass(full);
    setAutomoveis(autI);
    setImovei(imoI);
    setOutros(outI);

    // for (let i = 1; i <= data.classificados.length; i++) {
    //   for (let j = 0; j < data.classificados[i].length; j++) {
    //     if (i === 1) {
    //       aut.push(data.classificados[i][j]);
    //     }
    //     if (i === 2) {
    //       imo.push(data.classificados[i][j]);
    //     }
    //     if (i === 3) {
    //       out.push(data.classificados[i][j]);
    //     }
    //   }
    // }

    // const keys = Object.keys(c);
    // keys.map(k => {
    //   res.push(c[k][0]);
    // });
    // // const getAut = classf.filter(f => )
    // setClassf(res);
    console.log('aut', autI);
    console.log('imo', imoI);
    console.log('out', outI);
  }, [data]);
  return (
    <>
      <ImageBackground source={BG} style={{width: '100%', height: '100%'}}>
        <ScrollView>
          <Container>
            {/* <Search data={allClass} result={e => getRes(e)} /> */}
            {/* <Item
            data={searchRes || classf}
            keyExtractor={serv => serv.nome}
            renderItem={({item}) => (
              <>
                <Category>
                  <Text style={{color: '#515151', fontSize: 15}}>
                    {checkCategory(item.categoria)}
                  </Text>
                </Category>
                <View style={{padding: 10}}>
                  <ItemText>{item.nome}</ItemText>
                  <ItemDescription>{item.descricao}</ItemDescription>
                  <ItemDescription>
                    {item.telefone} | {item.email}
                  </ItemDescription>
                </View>
              </>
            )}
          /> */}
            {searchRes.length > 0 ? (
              <>
                {searchRes.map(item => (
                  <>
                    {item.nome ? (
                      <View key={item.nome}>
                        <Category>
                          <Text style={{color: '#515151', fontSize: 15}}>
                            {checkCategory(item.categoria)}
                          </Text>
                        </Category>
                        <View style={{padding: 10}}>
                          <ItemText>{item.nome}</ItemText>
                          <ItemDescription>{item.descricao}</ItemDescription>
                          <ItemDescription>
                            {item.telefone} | {item.email}
                          </ItemDescription>
                        </View>
                      </View>
                    ) : null}
                  </>
                ))}
              </>
            ) : (
              <>
                {automoveis.length > 0 && (
                  <Category>
                    <Text style={{color: '#515151', fontSize: 15}}>
                      Automóveis
                    </Text>
                  </Category>
                )}
                {automoveis.map(item => (
                  <View key={item.nome}>
                    <View style={{padding: 10}}>
                      <ItemText>{item.nome}</ItemText>
                      <ItemDescription>{item.descricao}</ItemDescription>
                      <ItemDescription>
                        {item.telefone} | {item.email}
                      </ItemDescription>
                    </View>
                  </View>
                ))}
                {imoveis.length > 0 && (
                  <Category>
                    <Text style={{color: '#515151', fontSize: 15}}>
                      Imóveis
                    </Text>
                  </Category>
                )}
                {imoveis.map(item => (
                  <View key={item.nome}>
                    <View style={{padding: 10}}>
                      <ItemText>{item.nome}</ItemText>
                      <ItemDescription>{item.descricao}</ItemDescription>
                      <ItemDescription>
                        {item.telefone} | {item.email}
                      </ItemDescription>
                    </View>
                  </View>
                ))}

                {outros.length > 0 && (
                  <Category>
                    <Text style={{color: '#515151', fontSize: 15}}>Outros</Text>
                  </Category>
                )}
                {outros.map(item => (
                  <View key={item.nome}>
                    <View style={{padding: 10}}>
                      <ItemText>{item.nome}</ItemText>
                      <ItemDescription>{item.descricao}</ItemDescription>
                      <ItemDescription>
                        {item.telefone} | {item.email}
                      </ItemDescription>
                    </View>
                  </View>
                ))}
              </>
            )}
            {/* {data.classificados.map(c => (
            <>
              <ItemText>{c[0].nome}</ItemText>
              <ItemDescription>{c[0].telefone}</ItemDescription>
            </>
          ))} */}
          </Container>
        </ScrollView>
      </ImageBackground>
    </>
  );
}
