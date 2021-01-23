import React from 'react';
import { Actions, Scene } from 'react-native-router-flux';

// Scenes
import TabItem from '@components/TabItem';
import HomePage from '@containers/Home/HomePage';
import Orders from '@containers/Orders/Orders';
import Favorites from '@containers/Favorites/Favorites';
import MyCart from '@containers/MyCart/MyCart';
/* Routes ==================================================================== */

export default Actions.create(
  <Scene key={'root'} tabs={true} showLabel={false} tabBarStyle={{ height: 70 }}>
    <Scene
      hideNavBar
      key={'Home'}
      title={'Home'}
      component={HomePage}
      icon={TabItem('home')}
    />
    <Scene
      key={'Orders'}
      title={'Orders'}
      component={Orders}
      icon={TabItem('box')}
    />
    <Scene
      key={'Favorites'}
      title={'Favorites'}
      component={Favorites}
      icon={TabItem('heart')}
    />
    <Scene
      key={'MyCart'}
      title={'My Cart'}
      component={MyCart}
      icon={TabItem('shopping-cart')}
    />

  </Scene>,
);