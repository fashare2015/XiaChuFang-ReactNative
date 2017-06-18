/**
 * Created by apple on 17-6-8.
 */
import React, { Component } from 'react';

import {
  StyleSheet,
  Text,
  Image,
  View,
  FlatList
} from 'react-native';

import { HomeApi } from '../../server/Home';
import { HomeTitleBar } from './HomeTitleBar';
import { HomeHeader } from './HomeHeader';

var bannerImages = [
  'https://images.unsplash.com/photo-1441742917377-57f78ee0e582?h=1024',
  'https://images.unsplash.com/photo-1441716844725-09cedc13a4e7?h=1024',
  'https://images.unsplash.com/photo-1441448770220-76743f9e6af6?h=1024',
  'https://images.unsplash.com/photo-1441260038675-7329ab4cc264?h=1024',
  'https://images.unsplash.com/photo-1441126270775-739547c8680c?h=1024',
  'https://images.unsplash.com/photo-1440964829947-ca3277bd37f8?h=1024',
  'https://images.unsplash.com/photo-1440847899694-90043f91c7f9?h=1024'
];


export class HomeFragment extends Component {
  constructor(props) {
    super(props);

    this.state = {
      homeIssueList: []
    };

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
        <HomeTitleBar/>

        <FlatList
          data={this.state.homeIssueList}
          renderItem={this._renderRow}
          ListHeaderComponent={() => <HomeHeader/>}
          // onRefresh={this._onRefresh.bind(this)}
        />

      </View>
    );
  }

  _renderRow({item}){
    const imgUrl = item.contents.image? item.contents.image.url: null;

    switch(item.template){
      case 6:
        return <View style={styles.itemType6}>
          <Image style={{width: 330, height: 460, margin: 10}} resizeMode={'contain'}
                 source={imgUrl? {uri: imgUrl}: require('../../res/drawable/banner1.jpg')}/>
        </View>;

      case 1:
        return <View style={styles.itemType1}>
          <Image style={{height: 180, marginBottom: 20}} source={imgUrl? {uri: imgUrl}: require('../../res/drawable/banner1.jpg')}/>
          <Text style={styles.title}>{item.contents.title}</Text>
          <Text style={styles.desc}>{item.contents.desc}</Text>
        </View>;

      case 9:
        return <View style={styles.itemType9}>
          <Text style={styles.title}>{item.contents.title}</Text>

          { item.contents.show_hottest_discussion?
            <View>
              <Text style={styles.desc}>{item.contents.hottest_discussion.text}</Text>
              <Text style={styles.desc}>{item.contents.hottest_discussion.author_name + ' . ' + item.contents.hottest_discussion.n_diggs + "赞"}</Text>
            </View>
            :
            <Text style={styles.desc}>{item.contents.n_discussions + '个回答'}</Text>}
        </View>;

      default:
        return <View/>;
    }
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