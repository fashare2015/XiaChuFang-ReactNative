/**
 * Created by apple on 17-6-11.
 */
import React, { Component } from 'react';
import {
  ActivityIndicator, Text,
  View,
  WebView
} from 'react-native';
import BaseComponent from "../base/BaseComponent";
import {HomeTitleBar} from "../home/HomeTitleBar";
import {BackTitleBar} from "../widget/TitleBar";
import {ImageButton} from "../widget/ImageButton";
import {TitleBar} from "../widget/TitleBar";

export class WebScreen extends BaseComponent {
  static DEFAULT_URL = "http://www.baidu.com";

  constructor(props){
    super(props);
    this.state = {
      url: WebScreen.DEFAULT_URL
    };
  }

  componentDidMount(){
    super.componentDidMount();
    this.webTitleBar = null;
    this.setState({
      url: this.props.url? this.props.url: WebScreen.DEFAULT_URL
    });
  }

  render(){
    return (
      <View style={{flex: 1}}>
        <WebTitleBar
          ref={it => this.webTitleBar = it}
          navigator={this.props.navigator}/>
        <WebView
          source={{uri: this.state.url}}
          renderLoading={() => <View style={{justifyContent: 'center', paddingTop: 20}}>
            <ActivityIndicator color='rgb(247, 128, 90)' size="large"/>
          </View>}
          onNavigationStateChange={(navState) => this.webTitleBar.setState({navState: navState})}
          startInLoadingState={true}
          domStorageEnabled={true}
          javaScriptEnabled={true}/>
      </View>
    );
  }
}

class WebTitleBar extends BaseComponent {
  constructor(props){
    super(props);
    this.state = {
      navState: null
    };
  }

  render(){
    return (
      <BackTitleBar navigator={this.props.navigator}
        centerView={() => <Text>{this.state.navState? this.state.navState.title: '下厨房'}</Text>}
        rightView={() => <ImageButton
          onPress={() => {}}
          imgStyle={{height: 21, width: 21}}
          source={require('../../res/drawable/web/web_title_bar_share.png')}/>}/>
    );
  }
}

