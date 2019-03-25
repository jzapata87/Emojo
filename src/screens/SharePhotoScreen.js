import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import NavButton from '../components/NavButton'

const SharePhotoScreen = () => (
  <View >
    <Text> SharePhotoScreen</Text>

  </View>
)



export default createStackNavigator({
    Home: {
      screen: SharePhotoScreen,
      navigationOptions: ({navigation}) => ({
        title: 'Photo',
        headerRight: (
          <Button
            title='Share'
            color='#841584'
            //onPress={()=>navigation.navigate('Feed')}
          />
        ),
        headerLeft: (
          <NavButton
            currentRoute='Feed'
            title='Cancel'
          />
        ),
      })
    }
  }, {
    mode: 'card'
  });
