/**
 * Created by jinliangshan on 17/6/24.
 *
 * 搜索收藏
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  Image, TouchableNativeFeedback, View
} from 'react-native';

import {BackTitleBar} from "../widget/TitleBar";
import {ImageButton} from "../widget/ImageButton";
import {SearchBar} from "../search/SearchBar"
import BaseComponent from "../base/BaseComponent";

import Color from '../../res/values/colors/color';

export class SearchCollectScreen extends BaseComponent {

  constructor(props) {
    super(props);

    this.state = {};

  }

  render(){
    return (
      <View>
        <BackTitleBar
          navigator={this.props.navigator}
          centerView={() => <SearchBar navigator={this.props.navigator} hintText="搜索收藏" inputable={true}/>}
          rightView={() => <Text style={{fontSize: 18, color: Color.colorPrimary}}
            onPress={() => {}}>搜索</Text>}/>
      </View>
    );
  }
}
