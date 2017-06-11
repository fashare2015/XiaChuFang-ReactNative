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

export default class react_native_xia_chu_fang extends Component {
  render() {
    return (<Index/>);
  }
}

AppRegistry.registerComponent('react_native_xia_chu_fang', () => react_native_xia_chu_fang);
