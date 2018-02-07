import React, { Component } from 'react';
import {View} from 'react-native';
import Picker from './imgdemo/button';
//import BadInstagramCloneApp from './imgdemo/Camera';
//import TestPicker from './imgdemo/customized';


type Props = {};
export default class App extends Component<Props> {
  render() {

    return (
        <View>
          <Picker />
        </View>
    );
  }
}
