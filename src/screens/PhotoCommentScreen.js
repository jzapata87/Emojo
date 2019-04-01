import React, { Component } from 'react';
import { View, Text, Button, Image } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import { connect } from 'react-redux'
import NavButton from '../components/NavButton'

const PhotoCommentScreen = ({newUri}) => (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }} >
    <Text> PhotoCommentScreen</Text>
    <Image
      source={{ uri: newUri}}
      style={{ width: 300, height: 300 }}
    />

  </View>
)

const mapStateToProps = state => {
  return {
    newUri: state.photo.newUri
  }
}

//export default connect(mapStateToProps,null)(PhotoCommentScreen);

export default createStackNavigator({
    Comments: {
      screen: connect(mapStateToProps,null)(PhotoCommentScreen),
      navigationOptions: ({navigation}) => ({
        title: "Share Photo",
        headerRight: (
          <Button
            title='Share'
            color='#841584'
            //onPress={()=>navigation.navigate('Feed')}
          />
        ),
        headerLeft: (
          <NavButton
            currentRoute='Feed'
            title='Cancel'

          />
        ),
      })
    }
  }, {
    mode: 'card'
  });
