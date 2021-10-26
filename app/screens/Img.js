import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Picture} from '../components';
import Colors from '../utils/Colors';

const Img = ({route}) => {
  return (
    <View style={styles.container}>
      <Picture link={route.params} isBig={true} />
    </View>
  );
};

export default Img;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
  },
});
