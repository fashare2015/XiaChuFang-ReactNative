/**
 * Created by apple on 17-6-8.
 */
import React, { Component } from 'react';

import {
  StyleSheet,
  Text,
  Image,
  View,
  FlatList, TouchableNativeFeedback
} from 'react-native';

import { HomeApi } from '../../server/Home';
import { HomeTitleBar } from './HomeTitleBar';
import { HomeHeader } from './HomeHeader';
import {WebScreen} from "../web/WebScreen";

export class HomeFragment extends Component {
  constructor(props) {
    super(props);

    this.state = {
      homeIssueList: []
    };

  }

  componentDidMount(){
    this._loadData();
  }

  _loadData() {
    HomeApi.getHomeIssues(issues => {
      this.setState({ homeIssueList: issues[0].items});
    });
  }

  render(){
    return (
      <View>
        <HomeTitleBar navigator={this.props.navigator}/>

        <FlatList
          data={this.state.homeIssueList}
          keyExtractor={ (item, index) => index }
          renderItem={this._renderRow.bind(this)}
          ListHeaderComponent={() => <HomeHeader navigator={this.props.navigator}/>}
          // onRefresh={this._onRefresh.bind(this)}
        />

      </View>
    );
  }

  _renderRow({item}){
    const imgUrl = item.contents.image? item.contents.image.url: null;
    const href = item.url;

    switch(item.template){
      case 6:
        return <TouchableNativeFeedback onPress={() => this._navWeb(href)}>
          <View style={styles.itemType6}>
            <Image style={{width: 330, height: 460, margin: 10}} resizeMode={'contain'}
                   source={imgUrl? {uri: imgUrl}: require('../../res/drawable/banner1.jpg')}/>
          </View>
        </TouchableNativeFeedback>;

      case 1:
        return <TouchableNativeFeedback onPress={() => this._navWeb(href)}>
          <View style={styles.itemType1}>
            <Image style={{height: 180, marginBottom: 20}} source={imgUrl? {uri: imgUrl}: require('../../res/drawable/banner1.jpg')}/>
            <Text style={styles.title}>{item.contents.title}</Text>
            <Text style={styles.desc}>{item.contents.desc}</Text>
          </View>
        </TouchableNativeFeedback>;

      case 2:
        return <TouchableNativeFeedback onPress={() => this._navWeb(href)}>
          <View style={styles.itemType2}>
            <Image style={{height: 180, justifyContent: 'center', alignItems: 'center'}} source={imgUrl? {uri: imgUrl}: require('../../res/drawable/banner1.jpg')}>
              <Text style={styles.title}>{item.contents.title_1st}</Text>
              <Text style={styles.desc}>{item.contents.title_2nd}</Text>
            </Image>
          </View>
        </TouchableNativeFeedback>;

      case 4:
        return <TouchableNativeFeedback onPress={() => this._navWeb(href)}>
          <View style={styles.itemType4}>
            <Image style={{height: 330}}
                   source={imgUrl? {uri: imgUrl}: require('../../res/drawable/banner1.jpg')}/>
          </View>
        </TouchableNativeFeedback>;

      case 5:
        return <TouchableNativeFeedback onPress={() => this._navWeb(href)}>
          <View style={styles.itemType5}>
            <Image style={{height: 180, marginBottom: 20}} source={imgUrl? {uri: imgUrl}: require('../../res/drawable/banner1.jpg')}/>
            <View style={{flexDirection: 'row'}}>
              <View style={{flex: 1}}>
                <Text style={styles.title}>{item.contents.title}</Text>
                <Text style={styles.desc}>{item.contents.desc}</Text>
                <Text style={styles.desc}>{(item.contents.score !== ''? item.contents.score + '分' + ' · ': '') + item.contents.n_cooked + '人做过'}</Text>
              </View>
              <View style={{justifyContent: 'center', alignItems: 'center'}}>
                <Image style={{width: 50, height: 50, borderRadius: 30}} source={{uri: item.contents.author.photo}}/>
                <Text style={styles.desc}>{item.contents.author.name}</Text>
              </View>
            </View>
          </View>
        </TouchableNativeFeedback>;

      case 9:
        return <TouchableNativeFeedback onPress={() => this._navWeb(href)}>
          <View style={styles.itemType9}>
            <Text style={styles.title}>{item.contents.title}</Text>

            { item.contents.show_hottest_discussion?
              <View>
                <Text style={styles.desc}>{item.contents.hottest_discussion.text}</Text>
                <Text style={styles.desc}>{item.contents.hottest_discussion.author_name + ' · ' + item.contents.hottest_discussion.n_diggs + "赞"}</Text>
              </View>
              :
              <Text style={styles.desc}>{item.contents.n_discussions + '个回答'}</Text>}
          </View>
        </TouchableNativeFeedback>;

      default:
        return <View/>;
    }
  }

  _navWeb(url){
    console.log(url);
    this.props.navigator.push({
      component: WebScreen,
      args:{ url: url }
    });
  }
}

const styles = StyleSheet.create({
  swiper: {
    height: 200,
    backgroundColor: '#ffffff'
  },

  itemType6:{
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    borderBottomColor:'#f2f2f2',//cell的分割线
    borderBottomWidth:1
  },

  itemType1:{
    padding: 20,
    borderBottomColor:'#f2f2f2',//cell的分割线
    borderBottomWidth:1
  },

  itemType2:{
    padding: 20,
    borderBottomColor:'#f2f2f2',//cell的分割线
    borderBottomWidth:1
  },

  itemType5:{
    padding: 20,
    borderBottomColor:'#f2f2f2',//cell的分割线
    borderBottomWidth:1
  },

  itemType4:{
    padding: 20,
    borderBottomColor:'#f2f2f2',//cell的分割线
    borderBottomWidth:1
  },

  itemType9:{
    padding: 20,
    borderBottomColor:'#f2f2f2',//cell的分割线
    borderBottomWidth:1
  },

  title: {
    fontSize: 18,
  },

  desc: {
    paddingTop: 10
  },
});
