import {ImageBackground, Text, View} from 'react-native';
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
        <Text style={Singup.contentText}>create account</Text>
      </View>
    </View>
  );
};

export default Registration;
