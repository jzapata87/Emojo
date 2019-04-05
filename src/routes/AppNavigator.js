import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import { createBottomTabNavigator, createStackNavigator } from 'react-navigation';
import PhotoCommentNavigator from './PhotoCommentNavigator';
import PhotoFeedNavigator from './PhotoFeedNavigator';
import ProfileScreenNavigator from './ProfileScreenNavigator';
import {LoginScreen} from '../screens';



export default createBottomTabNavigator({
  Feed: PhotoFeedNavigator,
  Upload: {
    screen: PhotoCommentNavigator,
    navigationOptions: {
      tabBarVisible: false,

    }
  },
  Profile: ProfileScreenNavigator,

});

export const AuthStack = createStackNavigator({SignIn: LoginScreen})
