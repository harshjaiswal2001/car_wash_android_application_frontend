import React from 'react';
import { View, StyleSheet } from 'react-native';
import { SliderBox } from 'react-native-image-slider-box';
import {pixelNormalize} from "../constants/Size";

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
            dotColor="black"
            inactiveDotColor="grey"
            paginationBoxVerticalPadding={20}
            ImageComponentStyle={styles.imageComponentStyle}
            paginationBoxStyle={styles.paginationBoxStyle}
            circleLoop
            autoplay
        />
      </View>
  );
};

const styles = StyleSheet.create({
  carouselContainer: {
    flex: 1,
    alignItems: 'center',
    margin:pixelNormalize(12),
    padding:pixelNormalize(10),
    top:pixelNormalize(-18)
  },
  imageComponentStyle: {
    borderRadius: pixelNormalize(15),
    width: '93%',
    marginTop: pixelNormalize(10),
    margin:pixelNormalize(10),
    height:pixelNormalize(150),
  },
  paginationBoxStyle: {
    position: 'absolute',
    bottom: pixelNormalize(-30),
    paddingVertical: pixelNormalize(10),
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
  },
});

export default Carousel;
