import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';
import { LoginManager, AccessToken } from "react-native-fbsdk";

export default class LoginScreen extends Component {
  state = {

  }

  _onLoginPress = () => {

    this._logInWithFacebook();


  }

  _logInWithFacebook = async () => {
    const data  = await LoginManager.logInWithReadPermissions(["public_profile", "email"]);
    console.log(data)
    if (!data.isCancelled) {
      //console.log(this.props.login('token', 'provider'), "hiiiii");
      await AccessToken.getCurrentAccessToken()
        .then(data => {
          console.log(data, "dataaaaaaa");
        }).then(() => this.props.navigation.navigate('App'));
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
