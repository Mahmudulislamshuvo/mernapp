import {
  ImageBackground,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {loginStyle} from './style';

const Login = ({navigation}) => {
  return (
    <View>
      <View>
        <ImageBackground
          source={require('../../assets/images/registrationIMG/image.jpg')}
          resizeMode="cover"
          style={loginStyle.image}
        />
        <View style={loginStyle.overlay}></View>
      </View>
      <View style={loginStyle.textContainer}>
        <View style={{width: '90%'}}>
          <View style={{paddingVertical: 20}}>
            <Text style={loginStyle.title}>Login Credentials</Text>
            <Text style={loginStyle.titleDes}>Enter your details below</Text>
          </View>
          <View>
            <TextInput
              style={loginStyle.input}
              keyboardType="email"
              placeholder="Email or Phone"
            />
            <TextInput
              keyboardType="default"
              style={loginStyle.input}
              placeholder="Password"
            />
          </View>
          <View>
            <TouchableOpacity style={loginStyle.submitButton}>
              <Text style={loginStyle.submitButtonText}>Create Account</Text>
            </TouchableOpacity>
            <View style={loginStyle.googleButton}>
              <Text style={loginStyle.googleButtonText}>Login with Google</Text>
            </View>
            <View style={loginStyle.alreadyHaveAccount}>
              <Text
                onPress={() => navigation.navigate('Registration')}
                style={loginStyle.alreadyHaveAccountText}>
                Don't have Account? SignUp
              </Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Login;
