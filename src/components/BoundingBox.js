import React, { Component } from 'react';
import { View, Text, Button, Image } from 'react-native';

const BoundingBox = ({top, left, width, height}) => (
  <View style={{ top: top, left: left, borderWidth: 2, zIndex: 1, borderStyle: 'solid', position: 'absolute', width: width, height: height}}>
    <Image style={{flex: 1, width: width, height: height }} source={require('../assets/smile.png')} />

  </View>
)

export default BoundingBox;
