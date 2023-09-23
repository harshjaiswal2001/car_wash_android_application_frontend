import {StyleSheet, View,Text} from 'react-native';
import React from 'react';
import {SliderBox} from 'react-native-image-slider-box';

const CarouselScreen= () => {
    const slides = [  require('../../assets/aaron-huber-8qYE6LGHW-c-unsplash.jpg'),
        require('../../assets/aaron-huber-8qYE6LGHW-c-unsplash.jpg'),
        require('../../assets/aaron-huber-8qYE6LGHW-c-unsplash.jpg'),
        require('../../assets/aaron-huber-8qYE6LGHW-c-unsplash.jpg'),
        require('../../assets/aaron-huber-8qYE6LGHW-c-unsplash.jpg'),

    ];

    return (
        <View style={styles.carouselContainer}>
            <SliderBox
                images={slides}
                dotColor={'white'}
                inactiveDotColor="white"
                ImageComponentStyle={{borderRadius: 15, width: '95%', margin: 8}}
                autoplay
                circleloop


            />
        </View>
    );
};

export default CarouselScreen;

const styles = StyleSheet.create({
    carouselContainer: {
        flex: 1,
        alignItems: 'center',

    },



});
