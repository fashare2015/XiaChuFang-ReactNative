/**
 * Created by apple on 17-6-11.
 */
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

export class TitleBar extends Component {
  render(){
    return (
      <View style={styles.titleBar}>
        <View style={styles.leftContainer}>{this.props.leftView()}</View>
        <View style={styles.centerContainer}>{this.props.centerView()}</View>
        <View style={styles.rightContainer}>{this.props.rightView()}</View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  titleBar: {
    flex: 1,
    flexDirection: 'row',
    height: 55
  },

  leftContainer:{
    justifyContent: 'center',
    alignItems: 'center',
    width: 60
  },

  centerContainer:{
    justifyContent: 'center',
    alignItems: 'center',
    flexGrow: 1
  },

  rightContainer:{
    justifyContent: 'center',
    alignItems: 'center',
    width: 60
  },

});