import React, { Component } from 'react';
import {StyleSheet, Text, View, Button, Image} from 'react-native';
import ImagePicker from 'react-native-image-picker';
import { createStackNavigator } from 'react-navigation';

// const UploadPhotoScreen = () => (
//   <SafeAreaView >
//     <Text> hi</Text>
//
//   </SafeAreaView>
// )

class UploadPhotoScreen extends Component{

  state = {
    photo: null,
  }

  handleChoosePhoto = () => {
    const options = {
      noData: true,
    }
    ImagePicker.launchImageLibrary(options, response => {
      if (response.uri) {
        this.setState({ photo: response })
      }
    })
  }

  render() {
    const { photo } = this.state
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        {photo && (
          <React.Fragment>
            <Image
              source={{ uri: photo.uri }}
              style={{ width: 300, height: 300 }}
            />
            {/* <Button title="Upload" onPress={this.handleUpload} /> */}
          </React.Fragment>
        )}
        <Button title="Choose Photo" onPress={this.handleChoosePhoto} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

export default createStackNavigator({
    Home: {
      screen: UploadPhotoScreen,
      navigationOptions: ({navigation}) => ({
        headerTitle: (
          <Button
            title='Photo'
            color='#841584'
            //onPress={()=>navigation.navigate('Feed')}
          />
        ),
        headerRight: (
          <Button
            title='Next'
            color='#841584'
            //onPress={()=>navigation.navigate('Feed')}
          />
        ),
        headerLeft: (
          <Button
            onPress={()=>navigation.navigate('Feed')}
            title='Cancel'
            color='#841584'

          />
        ),
      })
    }
  }, {
    mode: 'card'
  });
