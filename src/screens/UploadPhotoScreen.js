import React, { Component } from 'react';
import {StyleSheet, Text, View, Button, Image} from 'react-native';
import ImagePicker from 'react-native-image-picker';
import { createStackNavigator } from 'react-navigation';
import { connect } from 'react-redux'
import { savePhotoUri } from '../redux/actions'
import NavButton from '../components/NavButton'

function emotion(data) {
  return data.reduce((max, obj) => obj.Confidence > max.Confidence ? obj : max);

}

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
        this.props.savePhotoUri(response.uri)
      }
    })
  }

  handleUpload = () => {

    const data = new FormData();
    data.append("photo", {
        // Platform.OS === "android" ? this.state.photo.uri : this.state.photo.uri.replace("file://", ""),
        uri: this.props.uri,
        name: "testphoto",
        type: "image/jpeg",

    });
    fetch("http://localhost:8000/test", {
      method: "POST",
      body: data,
    })
      .then(response => response.json())
      .then(response => {
        console.log(emotion(response))
        //console.log("upload succes", response[0]);
        alert(response[0].Type);
      })
      .catch(error => {
        console.log("upload error", error);
        alert("Upload failed!   ", error);
      });
  };

  render() {

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        {this.props.uri && (
          <React.Fragment>
            <Image
              source={{ uri: this.props.uri}}
              style={{ width: 300, height: 300 }}
            />
            <Button title="Upload" onPress={this.handleUpload} />
          </React.Fragment>
        )}
        <Button title="Choose Photo" onPress={this.handleChoosePhoto} />
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    uri: state.photo.uri
  }
}

const mapDispatchToProps = {
  savePhotoUri
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
