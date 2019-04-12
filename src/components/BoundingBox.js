import React, { Component } from 'react';
import { View, Text, Button, Image } from 'react-native';
import { connect } from 'react-redux'
import { emojiMounted } from '../redux/actions'


class BoundingBox extends Component{
  //emojiMounted() ({emojiMounted, dim})
  constructor(props){
    super(props)

    }

  capture = () => {
    this.props.capture()
  }

  render() {
    const { dim, emotionToFilename } = this.props;
    return (
      <View style={{ top: dim.top, left: dim.left, zIndex: 1, position: 'absolute', width: dim.width, height: dim.height}}>
        <Image fadeDuration={0} onLoad={this.capture} style={{flex: 1, width: dim.width, height: dim.height, zIndex: 2 }} source={emotionToFilename} />
      </View>
    )
  }
}

const mapStateToProps = state => {
  return {
    emotionToFilename: state.photo.emotion,
  }
}

export default connect(mapStateToProps, null)(BoundingBox);
