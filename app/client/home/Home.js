/**
 * Created by apple on 17-6-8.
 */
import React, { Component } from 'react';

import {
  StyleSheet,
  Text,
  Image,
  View,
  ListView
} from 'react-native';

import Swiper from 'react-native-swiper'

import { Home } from '../../server/Home';
import { HomeTitleBar } from './HomeTitleBar';

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
    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

    this.state = {
      banners: [],
      homeIssueList: ds.cloneWithRows([])
    };

    Home.getHomeIssues(new Date().getTime(), 156310000000000, issues => {
      this.setState({ homeIssueList: ds.cloneWithRows(issues[0].items)});
    });
  }

  render(){
    return (
      <View>
        <HomeTitleBar/>

        {/*<Swiper style={styles.swiper}>*/}
          {/*{this.state.banners.map((item, key) => {*/}
            {/*return (*/}
              {/*<Image style={styles.page} key={key} source={item? {uri: item}: require('../../res/drawable/banner1.jpg')}/>*/}
            {/*)*/}
          {/*})}*/}
        {/*</Swiper>*/}

        <ListView
          dataSource={this.state.homeIssueList}
          renderRow={(item) => {
            const imgUrl = item.contents.image? item.contents.image.url: null;

            switch(item.template){
              case 6:
                return <View style={styles.itemType6}>
                  <Image style={{width: 330, height: 460, padding: 20}} resizeMode={'contain'}
                         source={imgUrl? {uri: imgUrl}: require('../../res/drawable/banner1.jpg')}/>
                </View>;

              case 1:
                return <View style={styles.itemType1}>
                  <Image style={{height: 180, paddingBottom: 20}} source={imgUrl? {uri: imgUrl}: require('../../res/drawable/banner1.jpg')}/>
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
          }}
        />
      </View>
    );
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