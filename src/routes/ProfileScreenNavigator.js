import { createStackNavigator } from 'react-navigation';
import { View, Text, Button } from 'react-native';
import React, { Component } from 'react';
import { ProfileScreen } from '../screens'

export default createStackNavigator({
    Profile: {
      screen: ProfileScreen,
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
