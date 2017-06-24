/**
 * Created by apple on 17-6-8.
 *
 * 所有界面的基类，封装了 '返回键' 功能 {@link BaseComponent#_handleBack}
 */
import React, {Component} from 'react';
import {BackHandler} from 'react-native';

export default class BaseComponent extends Component{
  constructor(props){
    super(props);
    this.handleBack = this._handleBack.bind(this);
  }

  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this.handleBack);
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.handleBack);
  }

  _handleBack(data) {
    console.log("_handleBack");
    if(data)
      this._navPopCallback(data);

    const navigator = this.props.navigator;
    if (navigator && navigator.getCurrentRoutes().length > 1) {
      console.log("go back");
      navigator.pop();
      return true;
    }
    console.log("close");
    return false;
  }

  _navPopCallback(data){
    if(this.props.onNavPop) {
      this.props.onNavPop(data);
    }
  }
}
