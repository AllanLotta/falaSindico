import React, {useContext, useEffect, useState} from 'react';
import {
  View,
  TextInput,
  Text,
  TouchableOpacity,
  Linking,
  Platform,
  Alert,
  Image,
  Dimensions,
  ImageBackground,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {DataContext} from '../../services/DataContext';
import {DetailContext} from '../../services/DetailContext';
import Search from '../../components/Search';
import BG from '../../assets/bg.jpg';
import Header from '../../components/Header';

import {
  Container,
  InputSearch,
  Item,
  ItemText,
  ItemDescription,
  DetailView,
  DetailCard,
  DetailCardAction,
  BtnCall,
  BtnSite,
  BtnText,
  DetailItemDescription,
  DetailItemText,
  CardItem,
} from './styles';

export default function Club({navigation}) {
  const [searchRes, setSearchRes] = useState();
  const [detailData, setDetailData] = useState();
  const [data, setData] = useContext(DataContext);
  const [detail, setDetail] = useContext(DetailContext);

  useEffect(() => {
    if (!detail) {
      setSearchRes(null);
    }
  }, [detail]);

  function getRes(res) {
    setSearchRes(res);
  }
  function openDetail(d) {
    setDetailData(d);
    setDetail(true);
  }

  function callNumber() {
    console.log('callNumber ----> ', detailData.telefone);
    let phoneNumber = detailData.telefone;
    if (Platform.OS !== 'android') {
      phoneNumber = `telprompt:${detailData.telefone}`;
    } else {
      phoneNumber = `tel:${detailData.telefone}`;
    }
    Linking.canOpenURL(phoneNumber)
      .then(supported => {
        if (!supported) {
          Alert.alert('Phone number is not available');
        } else {
          return Linking.openURL(phoneNumber);
        }
      })
      .catch(err => console.log(err));
  }
  function goToSite() {
    Linking.canOpenURL(detailData.site).then(supported => {
      Linking.openURL(`http://${detailData.site}`);
    });
  }
  return (
    <>
      <Header navigation={navigation} />
      <ImageBackground source={BG} style={{width: '100%', height: '100%'}}>
        <Container>
          {!detail ? (
            <ScrollView>
              <Search data={data.servicos} result={e => getRes(e)} />
              <Item
                data={searchRes || data.servicos}
                keyExtractor={serv => serv.nome}
                renderItem={({item}) => (
                  <>
                    <TouchableOpacity
                      onPress={() => openDetail(item)}
                      style={{marginBottom: 20}}>
                      <CardItem>
                        <Image
                          source={{
                            uri: item.imagem,
                            width: Dimensions.get('window').width * 0.2,
                            height: Dimensions.get('window').width * 0.2,
                          }}
                          resizeMode="contain"
                        />
                        <View style={{marginLeft: 20}}>
                          <ItemText>{item.nome}</ItemText>
                          <ItemDescription>{item.telefone}</ItemDescription>
                          <ItemDescription>{item.site}</ItemDescription>
                        </View>
                      </CardItem>
                    </TouchableOpacity>
                  </>
                )}
              />
            </ScrollView>
          ) : (
            <>
              {detailData ? (
                <DetailView>
                  <Image
                    source={{
                      uri: detailData.imagem,
                      width: Dimensions.get('window').width * 0.2,
                      height: Dimensions.get('window').width * 0.2,
                    }}
                    resizeMode="contain"
                  />
                  <DetailCard>
                    <DetailItemText>{detailData.nome}</DetailItemText>
                    <DetailItemDescription>
                      {detailData.telefone}
                    </DetailItemDescription>
                    <ItemDescription>{detailData.site}</ItemDescription>
                  </DetailCard>
                  <DetailCardAction>
                    <BtnCall>
                      <TouchableOpacity onPress={() => callNumber()}>
                        <BtnText>Ligar</BtnText>
                      </TouchableOpacity>
                    </BtnCall>
                    {detailData.site ? (
                      <BtnSite>
                        <TouchableOpacity onPress={() => goToSite()}>
                          <BtnText>Site</BtnText>
                        </TouchableOpacity>
                      </BtnSite>
                    ) : (
                      <Text />
                    )}
                  </DetailCardAction>
                </DetailView>
              ) : (
                setDetail(false)
              )}
            </>
          )}
        </Container>
      </ImageBackground>
    </>
  );
}
