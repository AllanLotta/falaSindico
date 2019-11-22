import React, {useContext, useState, useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  ImageBackground,
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import Header from './components/Header';
import Menu from './components/Menu';
import {MenuContext} from './services/MenuContext';
import {DataContext} from './services/DataContext';
import Login from './screens/Login';
import Main from './screens/Main';
import News from './screens/News';
import Logout from './screens/Logout';
import Club from './screens/Club';
import Classified from './screens/Classified';
import Archive from './screens/Archive';
import BG from './assets/bg.jpg';

const App = () => {
  // const [isLoged, setIsLoged] = useState(false);
  const [
    menu,
    setMenu,
    activeRouter,
    setActiveRouter,
    isLoged,
    setIsLoged,
  ] = useContext(MenuContext);
  const [data, setData] = useContext(DataContext);

  useEffect(() => {
    async function getStorage() {
      const res = await AsyncStorage.getItem('fs-data');
      setData(JSON.parse(res));
      setIsLoged(!!res);
    }
    getStorage();
    // AsyncStorage.multiRemove(['fs-data']);
  }, [setIsLoged]);

  function renderScreen() {
    switch (activeRouter) {
      case 'Meu Condomínio':
        return <Main />;
      case 'Notícias':
        return <News />;
      case 'Fala Síndico Clube':
        return <Club />;
      case 'Classificados':
        return <Classified />;
      case 'Arquivos':
        return <Archive />;
      case 'Mudar de Prédio':
        return <Logout />;
      default:
        return <Main />;
    }
  }
  return (
    <>
      <StatusBar barStyle="light-content" />
      <ImageBackground source={BG} style={{width: '100%', height: '100%'}}>
        {isLoged ? (
          <>
            <SafeAreaView style={{backgroundColor: '#fafafa'}}>
              <Header />
              {renderScreen()}
            </SafeAreaView>
            {menu && <Menu />}
          </>
        ) : (
          <SafeAreaView>
            <Login />
          </SafeAreaView>
        )}
      </ImageBackground>
    </>
  );
};

export default App;
