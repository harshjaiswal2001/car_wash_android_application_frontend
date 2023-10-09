import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity, Image } from 'react-native';
import MapView, { Marker, Polyline } from 'react-native-maps';
import LinearGradient from "react-native-linear-gradient";
import timingIcon from "../../../assets/icons8-clock-24.png";
import locationIcon from "../../../assets/icons8-location-50.png";
import StarRating from "react-native-star-rating";
import { pixelNormalize } from "../../constants/Size";
import {useNavigation} from "@react-navigation/native";

const shopData = {
    id: '1',
    name: 'Sample Shop 1',
    timing: '3 min',
    distance: '1.2 miles away',
    rating: 4.5,
    image: require('../../../assets/aaron-huber-8qYE6LGHW-c-unsplash.jpg'),
};

const DiscoverDirectionScreen = ({navigation}) => {

    const [region, setRegion] = useState({
        latitude: 21.1458, // Sample shop latitude
        longitude: 79.0882, // Sample shop longitude
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
    });

    const destination = {
        latitude: 21.1393, // Destination latitude
        longitude: 79.0829, // Destination longitude
    };

    return (
        <View style={styles.container}>
            <MapView style={styles.map} region={region}>
                <Marker coordinate={region} title="Sample Shop" />
                <Marker coordinate={destination} title="Destination" />
                <Polyline
                    coordinates={[
                        { latitude: region.latitude, longitude: region.longitude },
                        { latitude: destination.latitude, longitude: destination.longitude },
                    ]}
                    strokeWidth={3}
                    strokeColor="blue"
                />
            </MapView>
            <View style={styles.componentContainer}>
            <ImageBackground source={shopData.image} style={styles.shopItem}>
                <LinearGradient
                    colors={['rgba(0, 0, 0, 0.12)', 'rgba(0, 0, 0, 0.3)', 'white']}
                    start={{ x: 0, y: 0.1 }}
                    end={{ x: 0, y: 1 }}
                    locations={[0.4, 0.1, 0.55]}
                    style={styles.overlay}
                >
                    <View style={styles.shopInfoContainer}>

                        <View style={styles.leftContainer}>
                            <Text style={styles.shopName}>{shopData.name}</Text>
                            <View style={styles.ratingContainer}>
                                <StarRating
                                    disabled={true}
                                    maxStars={5}
                                    rating={shopData.rating}
                                    starSize={18}
                                    fullStarColor="#FFD700"
                                />
                                <Text style={styles.ratingText}>{shopData.rating.toFixed(1)}</Text>
                            </View>
                            <View style={styles.iconContainer}>
                                <Image source={timingIcon} style={styles.timingIcon} />
                                <Text style={styles.shopTiming}>{shopData.timing}</Text>
                            </View>

                            <View style={styles.iconContainer}>
                                <Image source={locationIcon} style={styles.locationIcon} />
                                <Text style={styles.shopDistance}>{shopData.distance}</Text>
                            </View>

                        </View>
                        <View style={styles.rightContainer}>

                            <TouchableOpacity style={styles.detailButton} onPress={() => navigation.push('BookNowScreen')} >
                                <Text style={styles.detailButtonText}>Go detail</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </LinearGradient>
            </ImageBackground>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: 'relative',
    },
    componentContainer:{

        flex:1,
        top:pixelNormalize(480),

    },
    map: {
        ...StyleSheet.absoluteFillObject,
    },
    shopItem: {
        margin: pixelNormalize(25),
       // marginLeft: pixelNormalize(12),
       // marginBottom: pixelNormalize(16),
        borderRadius: pixelNormalize(10),
        overflow: 'hidden',
        borderColor: '#fff',
        shadowColor: '#000',
        shadowOffset: { width: pixelNormalize(0), height: pixelNormalize(2) },
        shadowOpacity: pixelNormalize(0.3),
        shadowRadius: pixelNormalize(3),
        elevation: pixelNormalize(3),
        height: pixelNormalize(200),
        width: pixelNormalize(370),
        left:pixelNormalize(-5)
    },
    overlay: {
        flex: 1,
        paddingVertical: pixelNormalize(40),
        borderRadius: pixelNormalize(10),
        width: '100%',
    },
    shopInfoContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: pixelNormalize(20),
        flex: 1,
    },
    leftContainer: {
        flex: 1,
        marginBottom: pixelNormalize(-56),
    },
    rightContainer: {
        alignItems: 'flex-end',
        marginBottom: pixelNormalize(-107),
    },
    shopName: {
        fontSize: pixelNormalize(17),
        fontWeight: 'bold',
        color: 'black',
        marginTop: pixelNormalize(60),
    },
    shopTiming: {
        fontSize: pixelNormalize(13),
        color: 'black',
    },
    shopDistance: {
        fontSize: pixelNormalize(13),
        color: 'black',
    },
    ratingContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    ratingText: {
        fontSize: pixelNormalize(16),
        fontWeight: 'bold',
        color: 'black',
        marginLeft: pixelNormalize(4),
    },
    detailButton: {
        backgroundColor: 'white',
        borderRadius: pixelNormalize(10),
        paddingVertical: pixelNormalize(8),
        paddingHorizontal: pixelNormalize(12),
        alignItems: 'center',
        marginTop: pixelNormalize(8),
        borderColor: '#fff',
        shadowColor: '#000',
        shadowOffset: { width: pixelNormalize(0), height: pixelNormalize(2) },
        shadowOpacity: pixelNormalize(0.3),
        shadowRadius: pixelNormalize(3),
        elevation: pixelNormalize(3),
        width:'130%'
    },
    detailButtonText: {
        color: 'navy',
        fontWeight: 'bold',
        fontSize:pixelNormalize(14)
    },
    iconContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    timingIcon: {
        width: pixelNormalize(14),
        height: pixelNormalize(14),
        marginRight: pixelNormalize(4),
    },
    locationIcon: {
        width: pixelNormalize(14),
        height: pixelNormalize(14),
        marginRight: pixelNormalize(4),
        tintColor: 'gray',
    },
});

export default DiscoverDirectionScreen;
