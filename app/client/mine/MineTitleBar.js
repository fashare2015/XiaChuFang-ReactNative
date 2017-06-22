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
        leftView={() => <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <Image style={{height: 15, width: 15}} source={require('../../res/drawable/market/location.png')}/>
          <Text style={{fontSize: 12}}>上海市</Text>
        </View>}
        centerView={() => <Text>center</Text>}
        rightView={() => <Image style={{height: 27, width: 27}} source={require('../../res/drawable/market/ingredient_buy.png')}/>}
      />
    );
  }
}