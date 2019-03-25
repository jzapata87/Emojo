import { createStackNavigator } from 'react-navigation';
import { View, Text, Button } from 'react-native';
import React, { Component } from 'react';

import {
  PhotoFeedScreen
} from '../screens'

export default createStackNavigator({
  Feed: {
    screen: PhotoFeedScreen,
    navigationOptions: ({navigation}) => ({
      title: 'Emojo',
      headerRight: (
        <Button
          title='DM'
          color='#841584'
          //onPress={()=>navigation.navigate('SharePhoto')}
        />
      )
    })
  }
}, {
  mode: 'card'
});
