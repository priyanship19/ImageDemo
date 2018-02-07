import React ,{Component} from 'react';
//import ReactNative from 'react-native';
import ImagePicker from 'react-native-customized-image-picker';


const TestPicker = () => {
    ImagePicker.openPicker({
        multiple: true
    }).then(images => {
        console.log(images);
    });
    return null;
}

export default TestPicker;
