/**
 * Created by apple on 17-6-11.
 */
import React, { Component } from 'react';
import {
 WebView
} from 'react-native';

export class WebScreen extends Component {
  DEFAULT_URL = "http://www.baidu.com";

  render(){
    return (
      <WebView
        url={this.props.url? this.props.url: this.DEFAULT_URL}
        startInLoadingState={true}
        domStorageEnabled={true}
        javaScriptEnabled={true}/>
    );
  }
}

