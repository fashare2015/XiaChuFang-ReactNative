/**
 * Created by apple on 17-6-18.
 */
import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Image, Text, ViewPagerAndroid
} from 'react-native';

import Swiper from 'react-native-swiper';

import { HomeApi } from '../../server/Home';

export class HomeHeader extends Component {
  constructor(props) {
    super(props);
    this.popularList = [
      {title: "本周流行菜谱", bg: require('../../res/drawable/home/watch_dish_bg.png')},
      {title: "查看好友并关注", bg: require('../../res/drawable/home/watch_friend_bg.png')},
    ];

    this.state = {
      entries: [],  // 一些入口
      meals: [],    // 三餐
      ads: [],      // 广告
    };

    this._loadData();
  }

  _loadData() {
    HomeApi.getAd(it => this.setState({ ads: it }));
    HomeApi.getHeaders(it => this.setState({entries: it.navs, meals: it.pop_events.events}));
  }

  render(){
    const item = this.popularList[0];
    return (
      <View style={{}}>
        {/*入口*/}
        <View style={{flexDirection: 'row', paddingLeft: 20, paddingRight: 20, marginBottom: 20,
          justifyContent: 'space-between', alignItems: 'center'}}>{this.state.entries.map((item, index) =>
          <View
            key={index}
            style={{justifyContent: 'center', alignItems: 'center'}}>
            <Image
              style={{width: 40, height: 40}}
              source={{uri: item.picurl}}/>
            <Text style={{color: '#000000', fontSize: 12}}>{item.name}</Text>
          </View>
        )}</View>

        {/*流行*/}
        <View style={{flexDirection: 'row', paddingLeft: 20, paddingRight: 20}}>{this.popularList.map((item, index) =>
          // TODO: 替换 width: 155 为 flexGrow
          <Image
            key={index}
            style={{width: 155, height: 100, marginLeft:index===0? 0: 10,
              justifyContent: 'flex-end', alignItems: 'center', paddingBottom:15}}
            source={item.bg}>
            <Text style={{color: '#FFFFFF'}}>{item.title}</Text>
          </Image>
        )}</View>

        {/*三餐*/}
        <ViewPagerAndroid
          style={styles.ad}
          initialPage={0}>{this.state.meals.map((item, index) =>
          <View
            key={index}
            style={{height: 100, flexDirection: 'row', paddingLeft: 20, paddingRight: 20,
              justifyContent: 'space-between', alignItems: 'center'}}>
            <View style={{width: 60, height: 60}}/>
            <View style={{alignItems: 'center'}}>
              <Text style={{color: '#000000', fontSize: 17}}>{"— " + item.name.slice(0, 2) + " —"}</Text>
              <Text style={{fontSize: 12, marginTop: 3}}>{item.n_dishes + " 作品"}</Text>
            </View>
            <Image
              style={{width: 60, height: 60, borderRadius: 2}}
              source={{uri: item.dishes.dishes[0].thumbnail_280}}/>
          </View>
        )}</ViewPagerAndroid>

        {/*广告*/}
        {this.state.ads.map((item, index) => !item.ad_info.image? null:
          <Image key={index}
                 resizeMode={'contain'}
                 style={styles.ad}
                 source={{uri: item.ad_info.image.url}}/>
        )}

      </View>
    );
  }
}

const styles = StyleSheet.create({
  ad: {
    height: 90,
  },
});