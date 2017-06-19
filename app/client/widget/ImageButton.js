/**
 * Created by apple on 17-6-11.
 */
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  Image, TouchableNativeFeedback
} from 'react-native';

export class ImageButton extends Component {
  render(){
    return (
      <TouchableNativeFeedback onPress={this.props.onPress}>
        <Image
          style={this.props.imgStyle}
          source={this.props.source}/>
      </TouchableNativeFeedback>
    );
  }
}