/**
 * Created by jinliangshan on 17/6/22.
 *
 * 登录
 */

import React, { Component } from 'react';

import {
    StyleSheet,
    Text,
    Image,
    View,
    FlatList, TouchableNativeFeedback
} from 'react-native';

import BaseComponent from "../base/BaseComponent";
import {BackTitleBar} from "../widget/TitleBar";

import {UsertApi} from '../../server/User'

export class LoginScreen extends BaseComponent {
  constructor(props) {
    super(props);

    this.state = {
    };

  }

  componentDidMount(){
    this._loadData();
  }

  _loadData() {
    UsertApi.login(it => this._handleBack());
  }

  render(){
    return (
        <View>
          <BackTitleBar
            navigator={this.props.navigator}
            centerView={() => <Text>登录</Text>}/>



        </View>
    );
  }
}
