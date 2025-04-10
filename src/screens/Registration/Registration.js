import {
  Button,
  ImageBackground,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {Singup} from './style';
import {useNavigation} from '@react-navigation/native';

const Registration = () => {
  const navigation = useNavigation();
  const handlesignUp = () => {
    navigation.navigate('Login');
  };
  return (
    <View>
      <View>
        <ImageBackground
          source={require('../../assets/images/registrationIMG/image.jpg')}
          resizeMode="cover"
          style={Singup.image}
        />
        <View style={Singup.overlay}></View>
      </View>
      <View style={Singup.textContainer}>
        <View style={{width: '90%'}}>
          <View style={{paddingVertical: 20}}>
            <Text style={Singup.title}>Create an account</Text>
            <Text style={Singup.titleDes}>Enter your details below</Text>
          </View>
          <View>
            <TextInput style={Singup.input} placeholder="Full name" />
            <TextInput
              style={Singup.input}
              keyboardType="email"
              placeholder="Email"
            />
            <TextInput
              keyboardType="numeric"
              style={Singup.input}
              placeholder="Phone number"
            />
            <TextInput
              keyboardType="password"
              style={Singup.input}
              placeholder="Password"
            />
            <TextInput
              keyboardType="password"
              style={Singup.input}
              placeholder="Confirm Password"
            />
          </View>
          <View>
            <TouchableOpacity
              style={Singup.submitButton}
              onPress={handlesignUp}>
              <Text style={Singup.submitButtonText}>Create Account</Text>
            </TouchableOpacity>
            <View style={Singup.googleButton}>
              <Text style={Singup.googleButtonText}>Sign up with Google</Text>
            </View>
            <View style={Singup.alreadyHaveAccount}>
              <Text
                onPress={() => navigation.navigate('Login')}
                style={Singup.alreadyHaveAccountText}>
                Already have an account? Login
              </Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Registration;
