import React from 'react';
import {Image, StyleSheet} from 'react-native';
import {LOGO} from '../images';

const Picture = props => {
  return (
    <Image
      style={props.isBig ? styles.imgBig : styles.img}
      source={
        props.link
          ? {
              uri: props.link,
            }
          : LOGO
      }
    />
  );
};

export default Picture;

const styles = StyleSheet.create({
  imgBig: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  img: {
    width: 110,
    height: 110,
    margin: 5,
  },
});
