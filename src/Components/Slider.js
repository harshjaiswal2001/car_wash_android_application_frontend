import React from 'react';
import { View, StyleSheet } from 'react-native';
import { SliderBox } from 'react-native-image-slider-box';

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
    margin:12,
    padding:10,
    top:-18
  },
  imageComponentStyle: {
    borderRadius: 15,
    width: '93%',
    marginTop: 10,
    margin:10,
    height:150,
  },
  paginationBoxStyle: {
    position: 'absolute',
    bottom: -30,
    paddingVertical: 10,
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
  },
});

export default Carousel;
