import React, { Component } from 'react';
import {StyleSheet, Text, View, Button, Image} from 'react-native';
import ImagePicker from 'react-native-image-picker';
import { createStackNavigator } from 'react-navigation';
import { connect } from 'react-redux'
import { savePhotoUri } from '../redux/actions'
import NavButton from '../components/NavButton'

class CameraScreen extends Component{
  constructor(props){
    super(props)
    this.state = {
      saveCameraUri: null
    }
  }

  handleTakePhoto = () => {
    // const options = {
    //   noData: true,
    // }
    console.log('handletakephoto')

    const options = {
      title: 'Select Avatar',
      customButtons: [{ name: 'fb', title: 'Choose Photo from Facebook' }],
      storageOptions: {
        skipBackup: true
      }
    };


    ImagePicker.launchCamera(options, response => {
      if (response.uri) {
        alert(response.uri)
        this.setState({ saveCameraUri: response.uri})
        //this.state.saveCameraUri(response.uri)
      }

      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        const source = { uri: response.uri };

        // You can also display the image using data:
        // const source = { uri: 'data:image/jpeg;base64,' + response.data };

        this.setState({ saveCameraUri: response.uri})
      }
    })
  }

  render() {

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        {this.state.saveCameraUri && (
          <React.Fragment>
            <Image
              source={{ uri: this.state.saveCameraUri}}
              style={{ width: 300, height: 300 }}
            />
            {/* <Button title="Upload" onPress={this.handleUpload} /> */}
          </React.Fragment>
        )}
        <Button title="Take Photo" onPress={this.handleTakePhoto} />
      </View>
    );
  }
}

export default CameraScreen;
