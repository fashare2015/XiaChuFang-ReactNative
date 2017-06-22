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
import Toast from 'react-native-root-toast';


export class MineFragment extends Component {
  static DEFAULT_USER = JSON.parse('{\
    "photo60": "http://s2.cdn.xiachufang.com/afaa5454795811e681ba79fa6f489dbf.png?imageView2/1/w/60/h/60/interlace/1/q/90/format/webp/.webp",\
    "tp_nickname": {},\
    "photo": "http://s2.cdn.xiachufang.com/afaa5454795811e681ba79fa6f489dbf.png?imageView2/1/w/160/h/160/interlace/1/q/90",\
    "profession": "",\
    "create_time": "2016-08-21 20:58:45",\
    "ncollects": "27",\
    "current_location": "",\
    "id": "113228350",\
    "hometown_location": "",\
    "photo160": "http://s2.cdn.xiachufang.com/afaa5454795811e681ba79fa6f489dbf.png?imageView2/1/w/160/h/160/interlace/1/q/90/format/webp/.webp",\
    "mail": "",\
    "nfollow": "2",\
    "mobile_phone": {},\
    "nequipments": "0",\
    "nrecipes": "0",\
    "nbuybuybuy": "0",\
    "nfollowed": "0",\
    "desc": "",\
    "name": "梁山boy",\
    "url": "http://www.xiachufang.com/cook/113228350/",\
    "gender": "",\
    "sk": "AUY8DwVAQjKhaQ7pdAiKvg",\
    "ndishes": "0",\
    "is_expert": false,\
    "birthday": "",\
    "is_admin": false\
  }');

  constructor(props) {
    super(props);

    this.state = {
      user: MineFragment.DEFAULT_USER,
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
      <View style={{flex: 1}}>
        <MineTitleBar navigator={this.props.navigator}/>
        {!this.state.user? this._renderUnLogin(): this._renderLogin()}
      </View>
    );
  }

  _renderUnLogin(){
    return<View style={{flex: 1, justifyContent: 'center', alignItems: 'center', padding: 15}}>
      <Text style={{fontSize: 24, color: 'black'}}>开始准备好好吃饭</Text>
      <Text style={{fontSize: 14, color: 'black', marginTop: 40}}>好好吃饭用心生活，比什么都幸福，保存你最喜欢的美食，分享你的三餐，关注厨房里的达人。</Text>

      <Text style={{fontSize: 17, color: 'rgb(247, 128, 90)', marginTop: 35}}
        onPress={() => this.props.navigator.push({
          component: LoginScreen,
          args: { onNavPop: data => this.setState({user: data}) }
        })}>其他登录选项</Text>
    </View>;
  }

  _renderLogin(){
    return <View style={{flex: 1}}>
      {/*用户信息头部*/}
      <View style={{flexDirection: 'row', justifyContent: 'space-between', padding: 15, marginTop: 10}}>
        <View >
          <Text style={{fontSize: 30, color: 'black'}}>{this.state.user.name}</Text>
          <Text style={{fontSize: 12, color: 'black', marginTop: 20}}>{this.state.user.create_time.split(' ')[0] + '加入'}</Text>

          <View style={{flexDirection: 'row', marginTop: 45}}>
            <Text style={{fontSize: 14, color: 'black'}}>{this.state.user.nfollow + '\n关注'}</Text>
            <Text style={{fontSize: 14, color: 'black', marginLeft: 20}}>{this.state.user.nfollowed + '\n粉丝'}</Text>
          </View>
        </View>

        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <Image style={{width:100, height: 100, borderRadius: 100}}
                 source={{uri: this.state.user.photo}}>
          </Image>

          <Text style={{fontSize: 15, color: 'rgb(247, 128, 90)', marginTop: 20}}
                onPress={() => this.props.navigator.push({
                  // component: LoginScreen,
                  // args: { onNavPop: data => this.setState({user: data}) }
                })}>编辑个人资料</Text>

        </View>
      </View>

    </View>;
  }
  _renderRow({item}){

  }
}
