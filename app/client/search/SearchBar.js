/**
 * Created by apple on 17-6-11.
 */
import React, { PropTypes, Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput
} from 'react-native';

export class SearchBar extends Component {
  propTypes = {
    inputable: PropTypes.bool,
    //searchIcon,
    hintText: PropTypes.string,
  };

  getDefaultProps() {
    return {
      inputable: false,
      //searchIcon: require('../../res/drawable/global/add.png'),
      hintText: "",
    };
  }

  constructor(props) {
    super(props);

    this.state = {
      keyword: "",
    };
  }

  render(){
    return (
      !this.props.inputable?
        <View style={styles.rootUnInputable}>
          <Image
            style={{height: 21, width: 21}}
            source={require('../../res/drawable/global/add.png')}/>

          <Text>{this.props.hintText}</Text>
        </View>
      :
        <View style={styles.rootInputable}>
          <Image
            style={{height: 21, width: 21}}
            source={require('../../res/drawable/global/add.png')}/>

          <TextInput
            style={styles.textInput}
            onChangeText={(text) => this.setState({keyword: text})}
            value={this.state.keyword}
            placeholder={this.props.hintText}
            placeholderTextColor={'gray'}
            underlineColorAndroid={'transparent'}/>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  rootUnInputable: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'blue'
  },

  rootInputable: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: 'blue'
  },

  textInput: {
    height: 55,
    paddingLeft: 15,
    fontSize: 15,
  }
});
