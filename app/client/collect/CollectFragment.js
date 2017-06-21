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
  FlatList, TouchableNativeFeedback
} from 'react-native';
import {CollectTitleBar} from "./CollectTitleBar";
import {CollectApi} from "../../server/Collect";


export class CollectFragment extends Component {
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
    CollectApi.getHistory(it => {
      this.setState({
        data: it,
        isRefreshing: false
      });
    });
  }

  render(){
    return (
      <View>
        <CollectTitleBar navigator={this.props.navigator}/>

        <FlatList
          data={this.state.data}
          keyExtractor={ (item, index) => index }
          renderItem={this._renderRow.bind(this)}
          //ListHeaderComponent={() => <HomeHeader navigator={this.props.navigator}/>}
          onRefresh={() => this._loadData()}
          refreshing={this.state.isRefreshing}
        />

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