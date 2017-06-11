/**
 * Created by apple on 17-6-11.
 */
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  Image
} from 'react-native';

import {TitleBar} from "../widget/TitleBar";

export class HomeTitleBar extends Component {
  render(){
    return (
      <TitleBar
        leftView={() => <Image
          style={{height: 21, width: 21}}
          source={require('../../res/drawable/global/add.png')}/>}
        centerView={() => <Text>center</Text>}
        rightView={() => <Image
          style={{height: 24, width: 24}}
          source={require('../../res/drawable/global/buy_list_button.png')}/>}
      />
    );
  }
}