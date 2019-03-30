import React, { Component } from 'react';
import {StyleSheet, Text, View, Button, Image} from 'react-native';
import ImagePicker from 'react-native-image-picker';
import { createStackNavigator } from 'react-navigation';
import { connect } from 'react-redux'
import { savePhotoUri } from '../redux/actions'
import NavButton from '../components/NavButton'
import BoundingBox from '../components/BoundingBox'

function emotion(data) {
  return data.reduce((max, obj) => obj.Confidence > max.Confidence ? obj : max);

}

class UploadPhotoScreen extends Component{
  constructor(props){
    super(props)
    this.state = {
      box: {
        top:null,
        left: null,
        width: null,
        height: null
      }
    }

  }
  handleChoosePhoto = () => {
    const options = {
      noData: true,
    }
    ImagePicker.launchImageLibrary(options, response => {
      if (response.uri) {
        this.props.navigation.navigate("AddComments")
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
        console.log(emotion(response.Emotions))
        console.log("bounding box", response.BoundingBox);

        this.setState({
          ...this.state,
          box: {
            top: response.BoundingBox.Top*300,
            left: (response.BoundingBox.Left*300)-(((response.BoundingBox.Height-response.BoundingBox.Width)/2)*300),
            width: response.BoundingBox.Height*300,
            height: response.BoundingBox.Height*300
          }
        })

        console.log("bounding box", response.Emotions[0].Type);
        alert(response.Emotions[0].Type);
      })
      .catch(error => {
        console.log("upload error", error);
        alert("Upload failed!   ", error);
      });
  };

  render() {
    console.log(this.state)

    return (

      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        {this.props.uri && (
          <React.Fragment>
            <View>
            <Image
              source={{ uri: this.props.uri}}
              style={{ width: 300, height: 300 }}
              resizeMode="contain"
            />
            <BoundingBox top={this.state.box.top} left={this.state.box.left} height={this.state.box.height} width={this.state.box.width}/>
          </View>
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
