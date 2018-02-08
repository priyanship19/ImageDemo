import React,{Component} from 'react';
import {Image,Text,View,Alert} from 'react-native';
import axios from 'axios';
class FileUpload extends Component
{
    upload()
    {
        const data = new FormData();
        //const photos = [{url:"/Users/lanet/Desktop/React-Native/MyShop/images/slider_1.jpg"}, {url:"/Users/lanet/Desktop/React-Native/MyShop/images/slider_2.jpg"}];
        //photos.forEach((photo) => {
        data.append('sample', {
            uri: "/Users/developer145/Documents/Priyanshi/ReactNative/ImageDemo/Images/house.png",
            name: 'house.png',
            type: 'multipart/form-data'
        });
        //});
        axios.post("http://localhost:3000/upload",data,{
            'Content-Type': 'multipart/form-data',
        }).then(res=>{
            console.log("Upload");
        }).catch(e=>alert(e));
    }
    /*{
            headers: {
                'Content-Type': 'multipart/form-data',
            },
            body:data
        }*/
    render(){
        return(
            <View>
                <Text style={{fontSize:20}}>Image Upload</Text>
                {this.upload()}
            </View>
        );
    }
}

export default FileUpload;