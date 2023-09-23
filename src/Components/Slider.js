import {StyleSheet, View} from 'react-native';
import React from 'react';
import {SliderBox} from 'react-native-image-slider-box';

const Carousel = () => {
  const slides = [
    'https://source.unsplash.com/1024x768/?nature',
    'https://source.unsplash.com/1024x768/?water',
    'https://source.unsplash.com/1024x768/?girl',
  ];

  return (
    <View style={styles.carouselContainer}>
      <SliderBox
        images={slides}
        dotColor={'black'}
        inactiveDotColor="grey"
        ImageComponentStyle={{borderRadius: 15, width: '95%', margin: 8}}
        autoplay
        circleloop
      />
    </View>
  );
};

export default Carousel;

const styles = StyleSheet.create({
  carouselContainer: {
    flex: 1,
    alignItems: 'center',
  },
});
