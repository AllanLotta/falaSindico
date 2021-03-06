import React, {useContext, useState, useEffect, Component} from 'react';
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
import Drawer from 'react-native-drawer';
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';
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
import Msg from './screens/Msg';
import BG from './assets/bg.jpg';

const App = () => {
  const [myText, setMyText] = useState("I'm ready to get swiped!");
  const [gestureName, setGestureName] = useState('nonw');
  const [backgroundColor, setBackgroundColor] = useState('#fff');

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

  function onSwipe(gName) {
    console.log(gName);
    const {SWIPE_LEFT, SWIPE_RIGHT} = swipeDirections;
    setGestureName(gName);
    switch (gName) {
      case SWIPE_LEFT:
        setMenu(false);
        break;
      case SWIPE_RIGHT:
        setMenu(true);
        break;
      default:
        return null;
    }
  }

  const config = {
    velocityThreshold: 0.3,
    directionalOffsetThreshold: 80,
  };

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
      case 'Enviar Mensagem':
        return <Msg />;
      case 'Mudar de Prédio':
        return <Logout />;
      default:
        return <Main />;
    }
  }

  return (
    <GestureRecognizer
      onSwipe={e => onSwipe(e)}
      // onSwipeUp={() => onSwipeUp()}
      // onSwipeDown={() => onSwipeDown()}
      // onSwipeLeft={() => onSwipeLeft()}
      // onSwipeRight={() => onSwipeRight()}
      config={config}
      style={{
        flex: 1,
        backgroundColor,
      }}>
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
    </GestureRecognizer>
  );
};

//  const App = () => {
//    // const [isLoged, setIsLoged] = useState(false);
//    const [
//      menu,
//      setMenu,
//      activeRouter,
//      setActiveRouter,
//      isLoged,
//      setIsLoged,
//    ] = useContext(MenuContext);
//    const [data, setData] = useContext(DataContext)
//    useEffect(() => {
//      async function getStorage() {
//        const res = await AsyncStorage.getItem('fs-data');
//        setData(JSON.parse(res));
//        setIsLoged(!!res);
//      }
//      getStorage();
//      // AsyncStorage.multiRemove(['fs-data']);
//    }, [setIsLoged])
//    function renderScreen() {
//      switch (activeRouter) {
//        case 'Meu Condomínio':
//          return <Main />;
//        case 'Notícias':
//          return <News />;
//        case 'Fala Síndico Clube':
//          return <Club />;
//        case 'Classificados':
//          return <Classified />;
//        case 'Arquivos':
//          return <Archive />;
//        case 'Enviar Mensagem':
//          return <Msg />;
//        case 'Mudar de Prédio':
//          return <Logout />;
//        default:
//          return <Main />;
//      }
//    }
//    return (
//      <>
//        <StatusBar barStyle="light-content" />
//        <ImageBackground source={BG} style={{width: '100%', height: '100%'}}>
//          {isLoged ? (
//            <>
//              <SafeAreaView style={{backgroundColor: '#fafafa'}}>
//                <Header />
//                {renderScreen()}
//              </SafeAreaView>
//              {menu && <Menu />}
//            </>
//          ) : (
//            <SafeAreaView>
//              <Login />
//            </SafeAreaView>
//          )}
//        </ImageBackground>
//      </>
//    );
//  }
export default App;
