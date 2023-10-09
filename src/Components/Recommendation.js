import React, {useState} from 'react';
import {FlatList, View, Image, Text, StyleSheet, Pressable} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import StarRating from "react-native-star-rating";
import timingIcon from "../../assets/icons8-clock-24.png";
import locationIcon from "../../assets/icons8-location-50.png";
import {pixelNormalize} from "../constants/Size";
import * as PropTypes from "prop-types";
import {useNavigation} from "@react-navigation/native"; // Import FontAwesome from react-native-vector-icons

const data = [
  {
    key: '1',
    imageSource: require('../../assets/bmw-7-series-i7-cp-design-exterior-desktop.png'),
    text: {
      title: 'Ace car wash',
      rating: 4, // Rating value
      timing: '09:00 - 22:00',
      distance: '2.5 km',
    },
  },
  {
    key: '2',
    imageSource: require('../../assets/e-tron-gt-exterior-right-front-three-quarter-2.png'),
    text: {
      title: 'Cube car service',
      rating: 3.5,
      timing: '09:00 - 22:00',
      distance: '2.5 km',
    },
  },
  {
    key: '3',
    imageSource: require('../../assets/maybach-s-class-exterior-right-front-three-quarter.png'),
    text: {
      title: 'John car service',
      rating: 4.5,
      timing: '09:00 - 22:00',
      distance: '2.5 km',
    },
  },
  // Add more items as needed
];


const RecommendationScreen = () => {
  const navigation = useNavigation();
  const [favorites, setFavorites] = useState({});

  const toggleFavorite = (key) => {
    setFavorites((prevFavorites) => ({
      ...prevFavorites,
      [key]: !prevFavorites[key],
    }));
  };

  const isFavorite = (key) => {
    return favorites[key];
  };



    const renderItem = ({ item }) => {
      const isFavorited= isFavorite(item.key);
      return (
        <View style={styles.item}>
          <Pressable onPress={() => navigation.push('BookNowScreen')}>
          <Image source={item.imageSource} style={styles.image} />
            <View style={styles.favoriteIconContainer}>
              <Icon
                  name={isFavorited ? 'heart' : 'heart-o'}
                  size={24}
                  color={isFavorited ? 'white' : 'black'}
                  onPress={() => toggleFavorite(item.key)}
              />
            </View>

            <View style={styles.textContainer}>
            <Text style={styles.title}>{item.text.title}</Text>
            <StarRating
                disabled={true}
                maxStars={5}
                rating={item.text.rating}
                starSize={20}
                fullStarColor="gold"
                halfStarColor="gold"
                emptyStarColor="gold"/>
            <Text style={styles.ratingText}>{item.text.rating}</Text>
            <View style={styles.combineIconContainer}>

            <View style={styles.iconContainer}>
              <Image source={timingIcon} style={styles.timingIcon} />
              <Text style={styles.shopTiming}>{item.text.timing}</Text>
            </View>

            <View style={styles.locationIconContainer}>
              <Image source={locationIcon} style={styles.locationIcon} />
              <Text style={styles.shopDistance}>{item.text.distance}</Text>
            </View>
            </View>
          </View>
          </Pressable>
        </View>
    );
  };

  return (
      <View style={styles.container}>
        <FlatList
            data={data}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            renderItem={renderItem}
            keyExtractor={(item) => item.key}
        />
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 12,
    marginLeft:2,
    top:26,
  },
  item: {
    flex: 1,
    margin: 10,
    borderRadius: 12,
    overflow: 'hidden',
    shadowColor: 'rgba(0, 0, 0, 0.5)',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 1,
    shadowRadius: 5,
    elevation: 3,
    borderColor: '#fff',
    backgroundColor: '#f8f8ff',
    borderWidth: 1,
  },
  image: {
    width: 170,
    height: 125,
  },
  textContainer: {
    padding: 5,
    alignItems: 'flex-start',
    height:80


  },
  title: {
    fontSize: 15.5,
    fontWeight: 'bold',
    color:'black',
    marginBottom:3
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  favoriteIconContainer: {
    position: 'absolute',
    top: 10,
    right: 10,
    zIndex: 1,
  },
  locationIconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    left:110,
    bottom:20
  },
  timingIcon: {
    width: pixelNormalize(14),
    height: pixelNormalize(14),
    marginRight:pixelNormalize(4),
  },
  locationIcon: {
    width: pixelNormalize(14),
    height: pixelNormalize(14),
    marginRight: pixelNormalize(4),
    tintColor:'gray',

  },
  ratingText:{
    color:'black',
    fontSize:15,
    left:100,
    bottom:22,
  },
  combineIconContainer:{
    bottom:15
  }
});

export default RecommendationScreen;
