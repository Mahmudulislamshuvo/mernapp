import {StyleSheet} from 'react-native';

const Singup = StyleSheet.create({
  image: {
    width: '100%',
    height: '100%',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'black',
    opacity: 0.1,
  },
  textContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
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
});

export {Singup};
