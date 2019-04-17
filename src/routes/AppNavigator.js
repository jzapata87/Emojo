import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import { createBottomTabNavigator, createStackNavigator } from 'react-navigation';
import PhotoCommentNavigator from './PhotoCommentNavigator';
import PhotoFeedNavigator from './PhotoFeedNavigator';
import ProfileScreenNavigator from './ProfileScreenNavigator';
import {LoginScreen, TabBarComponent} from '../screens';



export default createBottomTabNavigator(
  {
  Feed: PhotoFeedNavigator,
  Upload: {
    screen: PhotoCommentNavigator,
    navigationOptions: {
      tabBarVisible: false,

    }
  },
  Profile: ProfileScreenNavigator,

},
{
    tabBarComponent: TabBarComponent,
}

);

export const AuthStack = createStackNavigator({SignIn: LoginScreen})
