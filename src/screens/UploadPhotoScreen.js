import React, { Component } from 'react';
import { View, Text, Button, SafeAreaView } from 'react-native';
import { createStackNavigator } from 'react-navigation';

const UploadPhotoScreen = () => (
  <SafeAreaView >
    <Text> hi</Text>

  </SafeAreaView>
)

export default createStackNavigator({
    Home: {
      screen: UploadPhotoScreen,
      navigationOptions: ({navigation}) => ({
        headerTitle: (
          <Button
            title='Photo'
            color='#841584'
            //onPress={()=>navigation.navigate('Feed')}
          />
        ),
        headerRight: (
          <Button
            title='Next'
            color='#841584'
            //onPress={()=>navigation.navigate('Feed')}
          />
        ),
        headerLeft: (
          <Button
            onPress={()=>navigation.navigate('Feed')}
            title='Cancel'
            color='#841584'

          />
        ),
      })
    }
  }, {
    mode: 'card'
  });
