import {ImageBackground, Text, TextInput, View} from 'react-native';
import React from 'react';
import {Singup} from './style';

const Registration = () => {
  return (
    <View>
      <View>
        <ImageBackground
          source={require('../../assets/registrationIMG/image.jpg')}
          resizeMode="cover"
          style={Singup.image}
        />
        <View style={Singup.overlay}></View>
      </View>
      <View style={Singup.textContainer}>
        <View>
          <View style={{paddingVertical: 20}}>
            <Text style={Singup.title}>Create an account</Text>
            <Text style={Singup.titleDes}>Enter your details below</Text>
          </View>
          <View>
            <TextInput style={Singup.input} placeholder="sHVO" />
          </View>
        </View>
      </View>
    </View>
  );
};

export default Registration;
