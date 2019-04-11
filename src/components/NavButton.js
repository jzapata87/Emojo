import React, { Component } from 'react';
import { Button } from 'react-native';
import { withNavigation } from 'react-navigation';
import { saveNavState, sharePhoto } from '../redux/actions'
import { connect } from 'react-redux'


class NavButton extends React.Component {
  constructor() {
    super();
    this.handlePress = this.handlePress.bind(this);
  }

  handlePress () {
    if (this.props.currentRoute === "AddComments") {
      this.props.sharePhoto(this.props.uri, this.props.fileName, this.props.type, this.props.id)
    }

    this.props.saveNavState(this.props.nextRoute)
    this.props.navigation.navigate(this.props.nextRoute)

  }

  render() {
    return <Button title={this.props.title} onPress={this.handlePress} />;
  }
}

const mapStateToProps = state => {
  return {
    route: state.navigation.route,
    uri: state.photo.newUri,
    fileName: state.photo.fileName,
    type: state.photo.type,
    id: state.user.data.id
  }
}


const mapDispatchToProps = {
  saveNavState,
  sharePhoto
};

export default connect(mapStateToProps,mapDispatchToProps)(withNavigation(NavButton));
