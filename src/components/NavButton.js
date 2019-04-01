import React, { Component } from 'react';
import { Button } from 'react-native';
import { withNavigation } from 'react-navigation';
import { saveNavState } from '../redux/actions'
import { connect } from 'react-redux'


class NavButton extends React.Component {
  constructor() {
    super();
    this.handlePress = this.handlePress.bind(this);
  }

  handlePress () {
    this.props.saveNavState(this.props.currentRoute)
    this.props.navigation.navigate(this.props.currentRoute)

  }

  render() {
    return <Button title={this.props.title} onPress={this.handlePress} />;
  }
}

const mapStateToProps = state => {
  return {
    route: state.navigation.route
  }
}


const mapDispatchToProps = {
  saveNavState
};

export default connect(mapStateToProps,mapDispatchToProps)(withNavigation(NavButton));
