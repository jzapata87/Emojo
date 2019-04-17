import React, { Component } from 'react';
import { View, Text, Button, ActivityIndicator, FlatList, Image } from 'react-native';
import { connect } from 'react-redux'
import { Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

// we need photos of all users except the current user
// /feed/id(userid)

const PhotoFeedScreen = ({isFetched, feed}) => {

  if (!isFetched) {

    return <ActivityIndicator/>;
  }

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <FlatList
          data={feed}
          renderItem={({item}) => <View><Text>{item.User.name}</Text><Image
            source={{ uri: item.uri}}
            style={{ width: width, height: width, marginBottom: 20 }}
          /></View>}
          keyExtractor={(item, index) => item.uri}
        />
      </View>

  );
}

const mapStateToProps = state => {
  return {
    feed: state.user.feed,
    isFetched: state.user.isFetched
  }
}

export default connect(mapStateToProps, null)(PhotoFeedScreen);
