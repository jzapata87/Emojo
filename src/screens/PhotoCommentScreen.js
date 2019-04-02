import React, { Component } from 'react';
import { View, Text, Button, Image, TextInput } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import { connect } from 'react-redux'
import NavButton from '../components/NavButton'
import { handleChangeText } from '../redux/actions'

const PhotoCommentScreen = ({newUri, handleChangeText, comment}) => (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }} >

    <Image
      source={{ uri: newUri}}
      style={{ width: 300, height: 300 }}
    />
    <TextInput
        //{...this.props} // Inherit any props passed to it; e.g., multiline, numberOfLines below
        editable = {true}
        placeholder={"Enter some comments!"}
        onChangeText={handleChangeText}
        value={comment}
      />

  </View>
)

const mapStateToProps = state => {
  return {
    newUri: state.photo.newUri,
    comment: state.photo.comment
  }
}

const mapDispatchToProps = {
  handleChangeText
};

//export default connect(mapStateToProps,null)(PhotoCommentScreen);

export default createStackNavigator({
    Comments: {
      screen: connect(mapStateToProps,mapDispatchToProps)(PhotoCommentScreen),
      navigationOptions: ({navigation}) => ({
        title: "Share Photo",
        headerRight: (
          <NavButton
            title='Share'
            currentRoute='AddComments'
            nextRoute='Feed'
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
