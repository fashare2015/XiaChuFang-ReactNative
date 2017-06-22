/**
 * Created by apple on 17-6-22.
 * 市集
 */

import React, { Component } from 'react';

import {
  StyleSheet,
  Text,
  Image,
  View,
  FlatList, TouchableNativeFeedback
} from 'react-native';
import {MineTitleBar} from "./MineTitleBar";

import { LoginScreen } from "../login/LoginScreen"


export class MineFragment extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isRefreshing: false,
      data: []
    };

  }

  componentDidMount(){
    this._loadData();
  }

  _loadData() {
    this.setState({isRefreshing: true});
    // MarketApi.getHomeIssues(issues => {
    //   this.setState({
    //     data: issues[0].items,
    //     isRefreshing: false
    //   });
    // });
  }

  render(){
    return (
      <View>
        <MineTitleBar navigator={this.props.navigator}/>

        <Text onPress={() => this.props.navigator.push({ component: LoginScreen })}>其他登录选项</Text>

      </View>
    );
  }

  _renderRow({item}){

  }
}
