import React, { Component } from 'react';
import {StyleSheet, Text, View, Button, Image} from 'react-native';
import ImagePicker from 'react-native-image-picker';
import { createStackNavigator } from 'react-navigation';
import { connect } from 'react-redux'
import { savePhotoUri, fetchBoundingBoxAsync } from '../redux/actions'
import NavButton from '../components/NavButton'
import BoundingBox from '../components/BoundingBox'
import { captureRef } from "react-native-view-shot";

// function emotion(data) {
//   return data.reduce((max, obj) => obj.Confidence > max.Confidence ? obj : max);
//
// }

class UploadPhotoScreen extends Component{
  constructor(props){
    super(props)
    this.state={
      photo: ''
    }
    }


  handleChoosePhoto = () => {
    const options = {
      noData: true,
    }
    ImagePicker.launchImageLibrary(options, response => {
      if (response.uri) {
        //this.props.navigation.navigate("AddComments")
        this.props.savePhotoUri(response.uri)

      }
    })
  }

  handleCapture = () => {
    captureRef(this.myRef, {
      format: "jpg",
      quality: 0.8
    })
    .then(
      uri => this.setState({photo: uri}),
      error => console.error("Oops, snapshot failed", error)
    );
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
    console.log(dim)
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        {this.props.uri && (
          <React.Fragment>
            <View ref={component => this.myRef = component}>
              <Image
                source={{ uri: this.props.uri}}
                style={{ width: 300, height: 300 }}
                resizeMode="contain"
              />
            {(loading === "isLoaded") && <BoundingBox dim={dim}/> }
          </View>
            <Button title="Upload" onPress={this.handleUpload} />
          </React.Fragment>
        )}
        <Button title="Choose Photo" onPress={this.handleChoosePhoto} />
        <Button title="Capture" onPress={this.handleCapture} />
        <Image
          source={{ uri: this.state.photo}}
          style={{ width: 300, height: 300 }}
          resizeMode="contain"
        />
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    uri: state.photo.uri,
    boundingBox: state.photo.data,
    loading: state.photo.loading
  }
}

const mapDispatchToProps = {
  savePhotoUri,
  fetchBoundingBoxAsync
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
            currentRoute='AddComments'
            title='Next'
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
