import {StyleSheet} from 'react-native';

export const loginStyle = StyleSheet.create({
  image: {
    width: '100%',
    height: '100%',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'black',
    opacity: 0.5,
  },
  textContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    color: 'white',
    paddingBottom: 10,
  },
  titleDes: {
    fontSize: 16,
    color: 'white',
  },
  input: {
    width: '100%',
    height: 50,
    backgroundColor: 'white',
    borderRadius: 10,
    paddingHorizontal: 20,
    fontSize: 16,
    marginTop: 20,
  },
  submitButton: {
    marginTop: 20,
    width: '100%',
  },
  submitButtonText: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#DB4444',
    borderRadius: 10,
    width: '100%',
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  googleButton: {
    marginTop: 20,
    width: '100%',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    textAlign: 'center',
    color: 'white',
    borderWidth: 1,
    borderColor: 'white',
  },
  googleButtonText: {
    color: '#DB4444',
    textAlign: 'center',
    fontSize: 16,
    fontFamily: 'InterExtraBold',
  },
  alreadyHaveAccount: {
    marginTop: 20,
    color: 'white',
  },
  alreadyHaveAccountText: {
    color: 'white',
    fontSize: 16,
    fontFamily: 'InterExtraBold',
    textAlign: 'center',
  },
});
