import React, { Component } from 'react';
import {View} from 'react-native';
import Picker from './imgdemo/button';
// import BadInstagramCloneApp from './imgdemo/Camera';
 import TestPicker from './imgdemo/customized';
import ImagePickerProject from './imgdemo/customized';
import FileUpload from './imgdemo/Image';

//type Props = {};
export default class App extends Component {
  render() {

    return (
        <View>
              <FileUpload/>
            <ImagePickerProject/>
        </View>
    );
  }
}
