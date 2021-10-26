import React from 'react';
import {StyleSheet, View, Image} from 'react-native';
import {LOGO} from '../images';

const Logo = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={LOGO} />
    </View>
  );
};

export default Logo;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 150,
    height: 50,
  },
});
