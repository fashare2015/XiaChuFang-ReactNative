/**
 * Created by apple on 17-6-11.
 */
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

export class SearchBar extends Component {
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