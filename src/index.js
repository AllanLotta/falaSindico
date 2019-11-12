import React, {useContext} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import Header from './components/Header';
import Menu from './components/Menu';
import {MenuContext} from './services/MenuContext';

const App = () => {
  const [menu, setMenu, activeRouter, setActiveRouter] = useContext(
    MenuContext
  );
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <Header />
      </SafeAreaView>
      {menu && <Menu />}
    </>
  );
};

export default App;
