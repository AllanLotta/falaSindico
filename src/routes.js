import React from 'react';
import {View, Text} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {createStackNavigator} from 'react-navigation-stack';

import Icon from 'react-native-vector-icons/Ionicons';
import Main from './screens/Main';
import News from './screens/News';
import Logout from './screens/Logout';
import Club from './screens/Club';
import Classified from './screens/Classified';
import Archive from './screens/Archive';
import Msg from './screens/Msg';
import CustomMenu from './components/CustomMenu';

function renderICon(iconName) {
  return <Icon name={iconName} size={30} color="white" />;
}

const Routes = createAppContainer(
  createDrawerNavigator(
    {
      Main: {
        screen: Main,
        params: {
          screenName: 'Meu condomínio',
        },
        navigationOptions: {
          title: 'Meu condomínio',
          drawerIcon: renderICon('md-grid'),
        },
      },
      News: {
        screen: News,
        params: {
          screenName: 'Notícias',
        },
        navigationOptions: {
          title: 'Notícias',
          drawerIcon: renderICon('ios-paper'),
        },
      },
      Club: {
        screen: Club,
        params: {
          screenName: 'Fala Síndico Clube',
        },
        navigationOptions: {
          title: 'Fala Síndico club',
          drawerIcon: renderICon('ios-briefcase'),
        },
      },
      Classified: {
        screen: Classified,
        params: {
          screenName: 'Classficados',
        },
        navigationOptions: {
          title: 'Classificados',
          drawerIcon: renderICon('ios-clipboard'),
        },
      },
      Archive: {
        screen: Archive,
        params: {
          screenName: 'Arquivos',
        },
        navigationOptions: {
          title: 'Arquivos',
          drawerIcon: renderICon('ios-folder'),
        },
      },
      Msg: {
        screen: Msg,
        params: {
          screenName: 'Enviar Mensagem',
        },
        navigationOptions: {
          title: 'Enviar mensagem',
          drawerIcon: renderICon('ios-chatbubbles'),
        },
      },
      Logout: {
        screen: Logout,
        params: {
          screenName: 'Mudar de Prédio',
        },
        navigationOptions: {
          title: 'Mudar de Prédio',
          drawerIcon: renderICon('ios-log-out'),
        },
      },
    },
    {
      drawerType: 'back',
      initialRouteName: 'Main',
      contentComponent: CustomMenu,
      // drawerBackgroundColor: 'black',
      // contentOptions: {
      //   activeTintColor: '#e91e63',
      //   inactiveTintColor: '#fafafa',
      //   inactiveBackgroundColor: 'black',
      //   iconContainerStyle: {
      //     opacity: 1,
      //   },
      //   itemStyle: {
      //     background: 'blue',
      //   },
      // },
    }
  )
);

export default Routes;
