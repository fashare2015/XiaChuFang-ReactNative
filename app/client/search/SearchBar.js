/**
 * Created by apple on 17-6-11.
 */
import React, { PropTypes, Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput, TouchableNativeFeedback
} from 'react-native';

export class SearchBar extends Component {
  static propTypes = {
    inputable: PropTypes.bool,
    //searchIcon,
    hintText: PropTypes.string,
    navTo: PropTypes.element
  };

  static defaultProps = {
    inputable: false,
    //searchIcon: require('../../res/drawable/global/add.png'),
    hintText: "",
  };

  constructor(props) {
    super(props);

    this.state = {
      keyword: "",
    };
  }

  render(){
    return (
      !this.props.inputable?
        <TouchableNativeFeedback onPress={() => this.props.navTo? this.props.navigator.push({component: this.props.navTo}): {}}>
          <View style={styles.rootUnInputable}>
            <Image
              style={{height: 21, width: 21}}
              source={require('../../res/drawable/global/add.png')}/>

            <Text style={styles.textHint}>{this.props.hintText}</Text>
          </View>
        </TouchableNativeFeedback>
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
    height: 40,
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius: 4,
    backgroundColor: '#dddddd',

    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  textHint: {
    paddingLeft: 5,
    fontSize: 17,
  },

  rootInputable: {
    flex: 1,
    height: 40,
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius: 4,
    backgroundColor: '#dddddd',

    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },

  textInput: {
    flex: 1,
    paddingLeft: 5,
    fontSize: 17,
    textAlignVertical: "center"
  }
});
