import React, { Component } from 'react';
import {StyleSheet, Text, View, Button, Image} from 'react-native';
import ImagePicker from 'react-native-image-picker';
import { createStackNavigator } from 'react-navigation';
import { connect } from 'react-redux'
import { savePhotoUri } from '../redux/actions'
import NavButton from '../components/NavButton'

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

  render() {

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        {this.props.uri && (
          <React.Fragment>
            <Image
              source={{ uri: this.props.uri}}
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

// const mapStateToProps = ({ uri }) => ({
//   uri: uri
// });

const mapStateToProps = state => {
  return {
    uri: state.photo.uri
  }
}

// const mapStateToProps = state => ({
//   uri: uri
// })

const mapDispatchToProps = {
  savePhotoUri
};

// const mapDispatchToProps = (dispatch) => ({
//   savePhotoUri: () => dispatch(savePhotoUri())
// })

// const mapDispatchToProps = (dispatch) => {
//   return {
//     addPhotoUri: (uri) => {
//       dispatch(addPhotoUri(uri))
//     }
//   }
// }

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
