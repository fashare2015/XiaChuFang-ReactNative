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
import {MarketTitleBar} from "./MarketTitleBar";


export class MarketFragment extends Component {
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
        <MarketTitleBar navigator={this.props.navigator}/>

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

  }
}