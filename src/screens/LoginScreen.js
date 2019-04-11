import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';
import { LoginManager, AccessToken } from "react-native-fbsdk";
import { connect } from 'react-redux'
import { getUserInfo } from '../redux/actions'

class LoginScreen extends Component {


  _onLoginPress = () => {
    this._logInWithFacebook();
  }

  _logInWithFacebook = async () => {
    const data  = await LoginManager.logInWithReadPermissions(["public_profile", "email"]);
    if (!data.isCancelled) {
      await AccessToken.getCurrentAccessToken()
        .then(data => {
          this.props.getUserInfo(data.accessToken)
        }).then(() => this.props.navigation.navigate('App'))
        .catch(e => console.log(e, "errorrrrrrrrrr"))
    }
  }

  render() {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <Text>Meetup Me</Text>
        </View>
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <Text>Blah blah Blah</Text>
        </View>
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <Text>Meetup Me</Text>
        </View>
        <View style={{flex: 1, flexDirection: 'row'}}>
          <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Button title='Google' color='#841584'/>
          </View>
          <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Button title='Facebook' color='#841584' onPress={this._onLoginPress}/>
          </View>
        </View>

      </View>
    )
  }
}

const mapDispatchToProps = {
  getUserInfo
};

export default connect(null, mapDispatchToProps)(LoginScreen)
