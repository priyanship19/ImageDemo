import React ,{Component} from 'react';
import {View} from 'react-native';
//import {ImagePicker} from 'react-native-image-picker';
//import launchCamera from 'react-native-camera';



const Picker = () => {
    const ImagePicker = require('react-native-image-picker');

// More info on all the options is below in the README...just some common use cases shown here
    var options = {
        title: 'Select Avatar',
        customButtons: [
            {name: 'fb', title: 'Choose Photo from Facebook'},
        ],
        storageOptions: {
            skipBackup: true,
            path: 'images'
        }
    };


    ImagePicker.showImagePicker(options, (response) => {
        console.log('Response = ', response);

        if (response.didCancel) {
            console.log('User cancelled image picker');
        }
        else if (response.error) {
            console.log('ImagePicker Error: ', response.error);
        }
        else if (response.customButton) {
            console.log('User tapped custom button: ', response.customButton);
        }
        else {
          //  let source = {uri: response.uri};

            // You can also display the image using data:
           // let source = { uri: 'data:image/jpeg;base64,' + response.data };

            this.setState({
                avatarSource: source
            });
        }
    });
    return null;
}

export default Picker;