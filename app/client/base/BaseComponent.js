/**
 * Created by apple on 17-6-8.
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

  _handleBack() {
    console.log("_handleBack");
    const navigator = this.props.navigator;
    if (navigator && navigator.getCurrentRoutes().length > 1) {
      console.log("go back");
      navigator.pop();
      return true;
    }
    console.log("close");
    return false;
  }
}