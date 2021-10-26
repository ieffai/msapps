import React, {useEffect} from 'react';
import {
  StyleSheet,
  FlatList,
  View,
  TouchableOpacity,
  RefreshControl,
} from 'react-native';
import {LoadingScreen, Picture} from '../components';
import {getPhotos} from '../api/PhotoService';
import {useSelector} from 'react-redux';
import Colors from '../utils/Colors';
import {useNavigation} from '@react-navigation/core';
import {IMG_ROUTE} from '../routes/constants';

const Gallery = () => {
  useEffect(() => {
    getPhotos();
  }, []);
  const navigation = useNavigation();
  const handlePicturePress = link => {
    navigation.navigate(IMG_ROUTE, link);
  };
  const photoData = useSelector(state => state.photo?.photoData);
  const isLoading = useSelector(state => state.app.isLoading);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <View style={styles.container}>
      <FlatList
        refreshControl={
          <RefreshControl
            onRefresh={() => {
              getPhotos();
            }}
          />
        }
        showsVerticalScrollIndicator={false}
        data={photoData}
        renderItem={({item}) => (
          <TouchableOpacity onPress={() => handlePicturePress(item.url_c)}>
            <Picture link={item.url_s} linkBig={item.url_c} />
          </TouchableOpacity>
        )}
        keyExtractor={item => item.id}
        numColumns={3}
      />
    </View>
  );
};

export default Gallery;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.white,
  },
});
