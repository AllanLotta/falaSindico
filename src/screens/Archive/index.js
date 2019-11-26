import React, {useContext, useEffect, useState} from 'react';
import {
  View,
  TextInput,
  Text,
  ImageBackground,
  FlatList,
  Image,
  Dimensions,
  Linking,
  Alert,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {DataContext} from '../../services/DataContext';
import Search from '../../components/Search';
import BG from '../../assets/bg.jpg';
import PDF from '../../assets/pdf.png';
import PPT from '../../assets/ppt.png';
import DOC from '../../assets/doc.png';
import TXT from '../../assets/txt.png';
import XLS from '../../assets/xls.png';
import Header from '../../components/Header';

import {Container, Item, ItemText, ItemDescription} from './styles';

export default function Archive({navigation}) {
  const [searchRes, setSearchRes] = useState();
  const [data, setData] = useContext(DataContext);
  function getRes(res) {
    setSearchRes(res);
  }

  function checkType(Type) {
    switch (Type) {
      case 'pdf':
        return PDF;
      case 'ppt':
        return PPT;
      case 'doc':
        return DOC;
      case 'txt':
        return TXT;
      case 'xls':
        return XLS;
      default:
        return PDF;
    }
  }

  function OpenFile(File) {
    Linking.canOpenURL(File).then(supported => {
      if (supported) {
        Linking.openURL(File);
      } else {
        Alert.alert('Site is not available');
      }
    });
  }

  return (
    <>
      <Header navigation={navigation} />
      <ImageBackground source={BG} style={{width: '100%', height: '100%'}}>
        <ScrollView>
          <Container>
            <Search data={data.arquivos} result={e => getRes(e)} />
            <Item
              data={searchRes || data.arquivos}
              keyExtractor={serv => serv.nome}
              renderItem={({item}) => (
                <>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                    }}>
                    <View>
                      <ItemText>{item.nome}</ItemText>
                      <ItemDescription>{item.data}</ItemDescription>
                    </View>
                    <TouchableOpacity onPress={() => OpenFile(item.link)}>
                      <Image
                        source={checkType()}
                        resizeMode="contain"
                        style={{
                          width: Dimensions.get('window').width * 0.1,
                          height: Dimensions.get('window').width * 0.1,
                        }}
                      />
                    </TouchableOpacity>
                  </View>
                </>
              )}
            />
          </Container>
        </ScrollView>
      </ImageBackground>
    </>
  );
}
