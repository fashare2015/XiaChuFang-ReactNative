/**
 * Created by apple on 17-6-11.
 */
import React, { Component } from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View
} from 'react-native';

import {TitleBar} from "../widget/TitleBar";
import {ImageButton} from "../widget/ImageButton";
import {SearchBar} from "../search/SearchBar";
import {SearchCollectScreen} from "../search/SearchCollectScreen";

export class CollectTitleBar extends Component {
  render(){
    return (
      <TitleBar
        centerView={() => <SearchBar navigator={this.props.navigator} hintText="搜索收藏" navTo={SearchCollectScreen}/>}
      />
    );
  }
}
