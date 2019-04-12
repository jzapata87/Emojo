import React, { Component } from 'react';
import {StyleSheet, Text, View, Button, Image, ImageBackground} from 'react-native';
import ImagePicker from 'react-native-image-picker';
import { createStackNavigator } from 'react-navigation';
import { connect } from 'react-redux'
import { savePhotoUri, fetchBoundingBoxAsync, saveNewUri } from '../redux/actions'
import NavButton from '../components/NavButton'
import BoundingBox from '../components/BoundingBox'
import ViewShot, { captureRef } from "react-native-view-shot";

// function emotion(data) {
//   return data.reduce((max, obj) => obj.Confidence > max.Confidence ? obj : max);
//
// }

class UploadPhotoScreen extends Component{
  constructor(props){
    super(props)

    }

  handleChoosePhoto = () => {
    const options = {
      noData: true,
    }
    ImagePicker.launchImageLibrary(options, response => {
      if (response.uri) {
        //this.props.navigation.navigate("AddComments")
        this.props.savePhotoUri(response)
        this.handleUpload()
      }
    })
  }

  handleCapture = () => {

    captureRef(this.myRef, {
      format: "jpg",
      quality: 0.8,
      result: 'tmpfile'
    })
    .then(
      uri => this.props.saveNewUri(uri),
      error => console.error("Oops, snapshot failed", error)
    )
  }

  transformDimensions = () => {
    const { boundingBox } = this.props
    return {
      top: boundingBox.Top*300,
      left: (boundingBox.Left*300)-(((boundingBox.Height-boundingBox.Width)/2)*300),
      width: boundingBox.Height*300,
      height: boundingBox.Height*300
    }
  }

  handleUpload = () => {
    this.props.fetchBoundingBoxAsync(this.props.uri)

  };

  render() {
     const { loading } = this.props;
     let dim;
    if (loading === "isLoaded") {
        dim = this.transformDimensions()
    }

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        {this.props.uri && (

            <ViewShot ref={component => this.myRef = component} style={{ zIndex: 0}}>
              <ImageBackground
                source={{ uri: this.props.uri}}
                style={{ width: 300, height: 300 }}
                resizeMode="contain"
                //ref={component => this.myRef = component}

              >
                {(loading === "isLoaded") && <BoundingBox capture={this.handleCapture} dim={dim}/> }
              </ImageBackground>

            </ViewShot>

        )}
        <Button title="Choose Photo" onPress={this.handleChoosePhoto} />
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    photo: state.photo.photo,
    boundingBox: state.photo.data,
    loading: state.photo.loading,
    uri: state.photo.photoUri,
  }
}

const mapDispatchToProps = {
  savePhotoUri,
  fetchBoundingBoxAsync,
  saveNewUri
};


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
      screen: connect(mapStateToProps, mapDispatchToProps)(UploadPhotoScreen),
      navigationOptions: ({navigation}) => ({
        headerTitle: (
          <Button
            title='Photo'
            color='#841584'
            //onPress={()=>navigation.navigate('Feed')}
          />
        ),
        headerRight: (
          <NavButton
            nextRoute='AddComments'
            currentRoute='Feed'
            title='Next'

          />
        ),
        headerLeft: (
          <NavButton
            nextRoute='Feed'
            currentRoute='Feed'
            title='Cancel'
          />
        ),
      })
    }
  }, {
    mode: 'card'
  });
