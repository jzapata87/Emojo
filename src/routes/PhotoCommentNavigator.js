import { createStackNavigator } from 'react-navigation';
import { View, Text, Button } from 'react-native';
import React, { Component } from 'react';
import SharePhotoNavigator from './SharePhotoNavigator';

import {
  UploadPhotoScreen,
  PhotoCommentScreen, } from '../screens'

export default createStackNavigator({
  SelectImage: {
    screen: SharePhotoNavigator,
  },
  AddComments: {
    screen: PhotoCommentScreen,
  }
}, {
  mode: 'modal',
  headerMode: 'none'
});
