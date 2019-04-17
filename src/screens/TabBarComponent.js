import React, { Component } from 'react';
import { View, Text, Button} from 'react-native';
import { createStackNavigator } from 'react-navigation';
import { BottomTabBar } from 'react-navigation-tabs';
import { connect } from 'react-redux'


const TabBarComponent = ({isFetched, feed, ...props}) => {

  if (!isFetched) {

    return <View/>;
  }

  return (
    <BottomTabBar {...props} style={styles.container}/>

  );
}

const styles = {
  container: {
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'white',
    elevation: 8,
  },
};

const mapStateToProps = state => {
  return {
    isFetched: state.user.isFetched
  }
}

export default connect(mapStateToProps, null)(TabBarComponent);
