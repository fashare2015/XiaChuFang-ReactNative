/**
 * Created by jinliangshan on 17/6/22.
 *
 * 登录
 */

import React, { Component } from 'react';

import {
  StyleSheet,
  Text,
  Image,
  View,
  FlatList, TouchableNativeFeedback, TextInput
} from 'react-native';

import BaseComponent from "../base/BaseComponent";
import {BackTitleBar} from "../widget/TitleBar";

import {UsertApi} from '../../server/User'
import Button from "react-native-button";
import Toast from 'react-native-root-toast';

export class LoginScreen extends BaseComponent {
  constructor(props) {
    super(props);

    this.state = {
      userName:"",
      passWord:""
    };

  }

  componentDidMount(){
  }

  _login() {
    UsertApi.login(this.state.userName, this.state.passWord,
      it => {
        Toast.show('登录成功');
        this._handleBack(it);
      },
      (errorCode, errorMsg) => Toast.show(errorMsg));
  }

  render(){
    return (
        <View>
          <BackTitleBar
            navigator={this.props.navigator}
            centerView={() => <Text>登录</Text>}/>

          <View style={{paddingTop: 20}}>
            <TextInput
              style={styles.textInput}
              onChangeText={(text) => this.setState({userName: text})}
              value={this.state.userName}
              placeholder="手机号/邮箱"
              placeholderTextColor={'gray'}
              underlineColorAndroid={'transparent'}/>

            <TextInput
              style={styles.textInput}
              onChangeText={(text) => this.setState({passWord: text})}
              value={this.state.passWord}
              placeholder="登录密码"
              placeholderTextColor={'gray'}
              underlineColorAndroid={'transparent'}
              secureTextEntry={true}/>

            <Button
              style={{height: 50, margin: 15, backgroundColor: 'rgb(247, 128, 90)', fontSize: 15, color: 'white', justifyContent:'center', textAlignVertical: "center"}}
              styleDisabled={{backgroundColor: 'gray'}}
              disabled={this.state.userName === '' || this.state.passWord === ''}
              onPress={() => this._login()}>登录</Button>
          </View>

          <View style={{marginLeft: 15, marginRight: 15, flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text onPress={() => {}}>通过短信验证登录</Text>
            <Text onPress={() => {}}>登录遇到问题？</Text>
          </View>



        </View>
    );
  }
}

const styles = StyleSheet.create({
  textInput: {
    height: 55,
    paddingLeft: 15,
    fontSize: 15,
    borderColor: '#f2f2f2',
    borderTopWidth: 1,
    borderBottomWidth: 1
  }
});
