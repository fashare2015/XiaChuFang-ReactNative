/**
 * Created by apple on 17-6-11.
 */
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  Image, TouchableNativeFeedback
} from 'react-native';

import {TitleBar} from "../widget/TitleBar";
import {ImageButton} from "../widget/ImageButton";
import {SearchBar} from "../search/SearchBar"

export class HomeTitleBar extends Component {
  render(){
    return (
      <TitleBar
        leftView={() => <ImageButton
            onPress={() => {}}
            imgStyle={{height: 21, width: 21}}
            source={require('../../res/drawable/global/add.png')}/>}
        centerView={() => <SearchBar hintText="搜索菜谱、食材" inputable={true}/>}
        rightView={() => <ImageButton
          onPress={() => {}}
          imgStyle={{height: 24, width: 24}}
          source={require('../../res/drawable/global/buy_list_button.png')}/>}
      />
    );
  }
}
