/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry
} from 'react-native';

import Index from './app/Index';
import {Navigator} from "react-native-deprecated-custom-components";

export class Navigation extends Component{
  render(){
    return(
      <Navigator initialRoute={{component: Index}}
        renderScene={(route, navigator) => <route.component navigator={navigator} {...route.args}/> }/>
    );
  }
}

AppRegistry.registerComponent('react_native_xia_chu_fang', () => Navigation);
