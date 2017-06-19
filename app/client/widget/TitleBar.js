/**
 * Created by apple on 17-6-11.
 */
import React, { Component, PropTypes } from 'react';
import {
  StyleSheet,
  Text, TouchableNativeFeedback,
  View
} from 'react-native';
import BaseComponent from "../base/BaseComponent";
import {ImageButton} from "./ImageButton";

export class TitleBar extends Component {
  static propTypes = {
    leftView: PropTypes.func,
    centerView: PropTypes.func,
    rightView: PropTypes.func
  };

  render(){
    return (
      <View style={styles.titleBar}>
        <View style={styles.leftContainer}>{this.props.leftView? this.props.leftView(): null}</View>
        <View style={styles.centerContainer}>{this.props.centerView? this.props.centerView(): null}</View>
        <View style={styles.rightContainer}>{this.props.rightView? this.props.rightView(): null}</View>
      </View>
    );
  }
}

export class BackTitleBar extends BaseComponent {
  static propTypes = {
    centerView: PropTypes.func,
    rightView: PropTypes.func
  };

  render(){
    return (
      <View style={styles.titleBar}>
        <View style={styles.leftContainer}>
          <ImageButton
            onPress={() => {this._handleBack()}}
            imgStyle={{height: 21, width: 21}}
            source={require('../../res/drawable/global/ic_back.png')}/>
        </View>
        <View style={styles.centerContainer}>{this.props.centerView? this.props.centerView(): null}</View>
        <View style={styles.rightContainer}>{this.props.rightView? this.props.rightView(): null}</View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  titleBar: {
    // flex: 1,
    flexDirection: 'row',
    height: 55,
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