import { createStackNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation';
import { View, Text, Button } from 'react-native';
import React, { Component } from 'react';

import {
  UploadPhotoScreen,
  SharePhotoScreen,
  PhotoCommentScreen,
  CameraScreen
} from '../screens'

export default createBottomTabNavigator({
  ChoosePhoto: {
    screen: UploadPhotoScreen
  },
  TakePhoto: {
    screen: CameraScreen,
  }
}, {
  mode: 'card',
});
