import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation';
import SharePhotoNavigator from './SharePhotoNavigator';
import PhotoFeedNavigator from './PhotoFeedNavigator';
import ProfileScreenNavigator from './ProfileScreenNavigator';

export default createBottomTabNavigator({
  Feed: PhotoFeedNavigator,
  Upload: {
    screen: SharePhotoNavigator,
    navigationOptions: {
      tabBarVisible: false,
    }
  },
  Profile: ProfileScreenNavigator,

});
