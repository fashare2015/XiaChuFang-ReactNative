/**
 * Created by apple on 17-6-8.
 */
import React, { Component } from 'react';

import {
  StyleSheet,
  Text,
  Image,
  View
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

    this.state = {
      banners: []
    };

    Home.getHomeIssues(1497173984, 156310000000000, issues => {
      this.setState({ banners: issues[0].items.map( item => {
        // .content.issues[0].items[0].contents.image.url
        let img = item.contents.image;
        return img? img.url: "";
      })});
    });
  }

  render(){
    return (
      <View>
        <HomeTitleBar/>

        <Swiper style={styles.swiper}>
          {this.state.banners.map((item, key) => {
            return (
              <Image style={styles.page} key={key} source={item? {uri: item}: require('../../res/drawable/banner1.jpg')}/>
            )
          })}
        </Swiper>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  swiper: {
    height: 200,
    backgroundColor: '#666666'
  },

  page: {
    height: 200
  }
});