/**
 * Created by apple on 17-6-11.
 */
import React, { Component } from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View
} from 'react-native';

import {TitleBar} from "../widget/TitleBar";
import {ImageButton} from "../widget/ImageButton";

export class MineTitleBar extends Component {
  render(){
    return (
      <TitleBar
        leftView={() => <ImageButton
            onPress={() => {}}
            imgStyle={{height: 21, width: 21}}
            source={require('../../res/drawable/global/add.png')}/>}
        centerView={() => <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <View style={{height: 21, width: 21}}/>
          <Text style={{flex: 1, textAlign: 'center', fontSize: 15}}>我</Text>
          <ImageButton
            onPress={() => {}}
            imgStyle={{height: 21, width: 21}}
            source={require('../../res/drawable/global/add.png')}/>
        </View>}
        rightView={() => <Image style={{height: 27, width: 27}} source={require('../../res/drawable/market/ingredient_buy.png')}/>}
      />
    );
  }
}
