/**
 * Created by jinliangshan on 17/6/24.
 *
 * 搜索菜谱、食材
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

export class SearchRecipeScreen extends BaseComponent {

  constructor(props) {
    super(props);

    this.state = {
      popularKeyWords: [
        '蛋糕', '家常菜', '茄子',
        '土豆', '早餐', '面包',
        '红烧肉', '蛋挞', '糖醋排骨',
        '小龙虾', '豆腐', '排骨',
        '披萨', '茄子的做法', '牛肉',
        '虾', '冰淇淋', '汤', '饼干',
        '绿豆糕'
      ]
    };

  }

  render(){
    return (
      <View>
        <BackTitleBar
          navigator={this.props.navigator}
          centerView={() => <SearchBar navigator={this.props.navigator} hintText="搜索菜谱、食材" inputable={true}/>}
          rightView={() => <Text style={{fontSize: 18, color: Color.colorPrimary}}
            onPress={() => {}}>搜索</Text>}/>

        <View style={{padding: 15}}>
          <Text style={{color: 'black', marginBottom: 15, fontSize: 15}}>流行搜索</Text>
          <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>{this.state.popularKeyWords.map((item, index) =>
            <Text style={{height: 40, textAlignVertical: 'center', paddingLeft: 20, paddingRight: 20, marginRight: 10, marginBottom: 10, fontSize: 20, color: 'black', backgroundColor: '#e8e8e8', borderRadius: 2}}
              key={index}>{item}</Text>
          )}</View>
        </View>
      </View>
    );
  }
}
