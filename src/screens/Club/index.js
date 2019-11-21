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
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {DataContext} from '../../services/DataContext';
import {DetailContext} from '../../services/DetailContext';
import Search from '../../components/Search';

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
} from './styles';

export default function Club() {
  const [searchRes, setSearchRes] = useState();
  const [detailData, setDetailData] = useState();
  const [data, setData] = useContext(DataContext);
  const [detail, setDetail] = useContext(DetailContext);
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
      if (supported) {
        Linking.openURL(detailData.site);
      } else {
        Alert.alert('Site is not available');
      }
    });
  }
  return (
    <>
      {!detail ? (
        <Container>
          <Search data={data.servicos} result={e => getRes(e)} />
          <Item
            data={searchRes || data.servicos}
            keyExtractor={serv => serv.nome}
            renderItem={({item}) => (
              <>
                <TouchableOpacity onPress={() => openDetail(item)}>
                  <ItemText>{item.nome}</ItemText>
                  <ItemDescription>{item.telefone}</ItemDescription>
                </TouchableOpacity>
              </>
            )}
          />
        </Container>
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
                <ItemDescription>{detailData.email}</ItemDescription>
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
    </>
  );
}
