import React, { Component } from 'react';
import { View, Text, Button, Image, FlatList } from 'react-native';
import { connect } from 'react-redux'
import { Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

const ProfileScreen = ({avatar, name, list}) => (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text> {name} </Text>
    <Image
      source={{ uri: avatar}}
      style={{ width: 75, height: 75, marginVertical: 5 }}
      resizeMode="contain"
    />
    <FlatList
      data={list}
      renderItem={({item}) => <Image
        source={{ uri: item.uri}}
        style={{ width: width, height: width, marginBottom: 20 }}
      />}
      keyExtractor={(item, index) => item.uri}
    />
  </View>
)


const mapStateToProps = state => {
  return {
    avatar: state.user.userInfo.user.avatar,
    name: state.user.userInfo.user.name,
    list: state.user.data.Photos
  }
}

export default connect(mapStateToProps, null)(ProfileScreen);
