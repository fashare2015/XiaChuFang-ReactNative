/**
 * Created by apple on 17-6-11.
 */
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

import {TitleBar} from "../widget/TitleBar";

export class TitleBar extends Component {
  render(){
    return (
      <TitleBar
        leftView={() => <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <Image style={{height: 15, width:15}} source={require('../../res/drawable/market/location.png')}/>
          <Text style={{fontSize: 12}}>上海市</Text>
        </View>}
        centerView={() => <Text>center</Text>}
        rightView={() => <Text>right</Text>}
      />
    );
  }
}