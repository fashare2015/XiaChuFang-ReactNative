/**
 * Created by apple on 17-6-22.
 * 收藏
 */

import React, { Component } from 'react';

import {
  StyleSheet,
  Text,
  Image,
  View,
  ListView,
  FlatList, TouchableNativeFeedback, ScrollView
} from 'react-native';

import ScrollableTabView, {DefaultTabBar} from 'react-native-scrollable-tab-view';
import {CollectTitleBar} from "./CollectTitleBar";
import {CollectApi} from "../../server/Collect";

import Color from '../../res/values/colors/color';


export class CollectFragment extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      isRefreshing: false,
    };

  }

  componentDidMount(){
    this._loadData();
  }

  _loadData() {
    this.setState({isRefreshing: true});
    CollectApi.getHistory(it => {
      this.setState({
        data: it,
        isRefreshing: false
      });
    });
  }

  render(){
    return (

      <View style={{flex: 1}}>
        {/* 需要设 flex !!! */}
        <CollectTitleBar navigator={this.props.navigator}/>

        <ScrollableTabView
          renderTabBar={() => <DefaultTabBar />}
          tabBarActiveTextColor={Color.colorPrimary}
          tabBarInactiveTextColor={'black'}
          tabBarUnderlineStyle={{backgroundColor: Color.colorPrimary}}>
          <Text tabLabel="菜谱"></Text>
          <Text tabLabel="菜单">bbb</Text>

          <FlatList
            tabLabel="浏览历史"
            data={this.state.data}
            keyExtractor={ (item, index) => index }
            renderItem={this._renderRow.bind(this)}
            //ListHeaderComponent={() => <HomeHeader navigator={this.props.navigator}/>}
            onRefresh={() => this._loadData()}
            refreshing={this.state.isRefreshing}
          />

        </ScrollableTabView>

      </View>
    );
  }

  _renderRow({item}){
    return <View style={{flexDirection: 'row', alignItems: 'center', paddingLeft: 15, paddingRight: 15, paddingTop: 10}}>
      <Image style={{width: 80, height: 60}} source={{uri: item.photos['140']}} />
      <View style={{paddingLeft: 20}}>
        <Text style={{fontSize: 18, color: 'black'}} numberOfLines={1} ellipsizeMode="tail">{item.name}</Text>
        <Text style={{paddingTop: 3, fontSize: 12}}>{(item.score !== ''? item.score + '分 · ': '')+ item.stats.n_cooked + "人做过 · " + item.author.name}</Text>
      </View>
    </View>
  }
}
