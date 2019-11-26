import React from 'react';
import {View, StyleSheet, ScrollView, SafeAreaView, Text} from 'react-native';
import {DrawerItems} from 'react-navigation-drawer';
import Icon from 'react-native-vector-icons/Ionicons';
import LogoIcon from '../../assets/logo2.png';
import {Container, Header, Logo} from './styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default function CustomMenu(props) {
  return (
    <ScrollView>
      <SafeAreaView
        style={styles.container}
        forceInset={{top: 'always', horizontal: 'never'}}>
        <Container>
          <Header>
            <Text />
            <Logo source={LogoIcon} />
            <Text />
          </Header>
          <DrawerItems
            drawerBackgroundColor="#232729"
            inactiveTintColor="white"
            iconContainerStyle={{opacity: 1}}
            activeLabelStyle={{color: 'white'}}
            labelStyle={{fontSize: 16, fontWeight: '400'}}
            itemStyle={{borderBottomColor: '#515151', borderBottomWidth: 1}}
            {...props}
          />
        </Container>
      </SafeAreaView>
    </ScrollView>
  );
}
