import React, { Component } from 'react';
import { View, Text, Button, Image } from 'react-native';

const BoundingBox = ({dim}) => (
  <View style={{ top: dim.top, left: dim.left, borderWidth: 2, zIndex: 1, borderStyle: 'solid', position: 'absolute', width: dim.width, height: dim.height}}>
    <Image style={{flex: 1, width: dim.width, height: dim.height }} source={require('../assets/smile.png')} />
  </View>
)

export default BoundingBox;
