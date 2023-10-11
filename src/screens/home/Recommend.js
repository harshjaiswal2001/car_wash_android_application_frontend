import React, { useState } from 'react';
import {View, FlatList, ImageBackground, Text, StyleSheet, TouchableOpacity, Image, ScrollView} from 'react-native';
import StarRating from 'react-native-star-rating';
import LinearGradient from 'react-native-linear-gradient';
import { Swipeable } from 'react-native-gesture-handler';
import deleteIcon from "../../../assets/icons8-remove-50.png";
import timingIcon from "../../../assets/icons8-clock-24.png";
import locationIcon from "../../../assets/icons8-location-50.png"
import { PanGestureHandler, GestureHandlerRootView } from 'react-native-gesture-handler';
import {pixelNormalize} from "../../constants/Size";


// Sample shop data
const shopData = [
    {
        id: '1',
        name: 'Sample Shop 1',
        timing: '9:00 AM - 6:00 PM',
        distance: '1.2 miles away',
        address: '123 Main St, City, Country',
        rating: 4.5,
        image: require('../../../assets/aaron-huber-8qYE6LGHW-c-unsplash.jpg'),
    },
    {
        id: '2',
        name: 'Sample Shop 2',
        timing: '8:30 AM - 7:00 PM',
        distance: '2.5 miles away',
        address: '456 Elm St, City, Country',
        rating: 4.2,
        image: require('../../../assets/aaron-huber-8qYE6LGHW-c-unsplash.jpg'),
    },
    {
        id: '3',
        name: 'Sample Shop 3',
        timing: '10:00 AM - 8:00 PM',
        distance: '0.8 miles away',
        address: '789 Oak St, City, Country 789 Oak St, City, Country',
        rating: 3.8,
        image: require('../../../assets/martin-katler-y3neNkE6efI-unsplash.jpg'),
    },
    {
        id: '4',
        name: 'Sample Shop 4',
        timing: '7:00 AM - 9:00 PM',
        distance: '3.8 miles away',
        address: '101 Pine St, City, Country',
        rating: 4.7,
        image: require('../../../assets/aaron-huber-8qYE6LGHW-c-unsplash.jpg'),
    },
    {
        id: '5',
        name: 'Sample Shop 5',
        timing: '9:30 AM - 5:30 PM',
        distance: '1.0 miles away',
        address: '246 Maple St, City, Country ',
        rating: 4.0,
        image: require('../../../assets/martin-katler-y3neNkE6efI-unsplash.jpg'),
    },
    // Add more shop data as needed
];

const RecommendScreen = ({navigation}) => {
    const [favorites, setFavorites] = useState({}); // Store favorite status for each shop
    const [openSwipeableId, setOpenSwipeableId] = useState(null);



    const handleDeleteFavorite = ({ id }) => {
        // Remove the favorite item with the given id
        const updatedShopData = shopData.filter((item) => item.id !== id);
        setFavorites(updatedShopData);
    };

    const closeSwipeable = () => {
        setOpenSwipeableId(null);
    };

    const handleFlatListItemPress = (item) => {
        console.log(`Flat List Item Clicked: ${item.name}`);
    };


    const renderShopItem = ({ item }) => {
        const rightSwipeActions = (progress, dragX) => {
            const transX = dragX.interpolate({
                inputRange: [-100, 0],
                outputRange: [100, 0],
            });

            return (
                <TouchableOpacity
                    style={styles.deleteButton}
                    onPress={() => handleDeleteFavorite(item.id)}
                >
                    <Image source={deleteIcon} style={styles.deleteIcon} />
                </TouchableOpacity>
            );
        };

        return (
        //     <GestureHandlerRootView style={{ flex: 1 }}>
        //         <PanGestureHandler>
                    <TouchableOpacity onPress={() => navigation.push('BookNowScreen')}>
                        <Swipeable
                            renderRightActions={rightSwipeActions}
                            overshootRight={false}
                            onSwipeableWillOpen={() => {
                                if (openSwipeableId !== null) {
                                    closeSwipeable();
                                }
                                setOpenSwipeableId(item.id);
                            }}
                            onSwipeableWillClose={() => {
                                if (openSwipeableId === item.id) {
                                    closeSwipeable();
                                }
                            }}
                        >
                            <ImageBackground source={item.image} style={styles.shopItem}>
                                <LinearGradient
                                    colors={['rgba(0, 0, 0, 0.12)', 'rgba(0, 0, 0, 0.3)', 'white']}
                                    start={{ x: 0, y: 0.1 }}
                                    end={{ x: 0, y: 1 }}
                                    locations={[0.4, 0.1, 0.55]}
                                    style={styles.overlay}
                                >
                                    <View style={styles.shopInfoContainer}>

                                        <View style={styles.leftContainer}>
                                            <Text style={styles.shopName}>{item.name}</Text>
                                            <View style={styles.iconContainer}>
                                                <Image source={timingIcon} style={styles.timingIcon} />
                                                <Text style={styles.shopTiming}>{item.timing}</Text>
                                            </View>
                                            <View style={styles.iconContainer}>
                                                <Image source={locationIcon} style={styles.locationIcon} />
                                                <Text style={styles.shopDistance}>{item.distance}</Text>
                                            </View>
                                            <Text style={styles.shopAddress} numberOfLines={2} ellipsizeMode="tail">
                                                {item.address}
                                            </Text>

                                        </View>
                                        <View style={styles.rightContainer}>
                                            <View style={styles.ratingContainer}>
                                                <StarRating
                                                    disabled={true}
                                                    maxStars={5}
                                                    rating={item.rating}
                                                    starSize={18}
                                                    fullStarColor="#FFD700"
                                                />
                                                <Text style={styles.ratingText}>{item.rating.toFixed(1)}</Text>
                                            </View>
                                            <TouchableOpacity style={styles.detailButton} onPress={()=> navigation.push('GetDirectionScreen')} >
                                                <Text style={styles.detailButtonText}>Get direction</Text>
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                </LinearGradient>
                            </ImageBackground>
                        </Swipeable>
                    </TouchableOpacity>
            //     </PanGestureHandler>
            // </GestureHandlerRootView>
        );
    };

    return (
        <ScrollView>
            <View style={styles.container}>
                <FlatList style={{flex:1}}
                          data={shopData}
                          keyExtractor={(item) => item.id}
                          renderItem={renderShopItem}
                          nestedScrollEnabled={true}
                />

            </View>
        </ScrollView>

    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'#efefef',
    },
    shopItem: {
        margin: pixelNormalize(14),
        marginBottom: pixelNormalize(16),
        borderRadius: pixelNormalize(10),
        overflow: 'hidden',
        borderColor: '#fff',
        shadowColor: '#000',
        shadowOffset: { width: pixelNormalize(0), height: pixelNormalize(2) },
        shadowOpacity: pixelNormalize(0.3), // Adjusted shadow opacity
        shadowRadius: pixelNormalize(3), // Adjusted shadow radius
        elevation: pixelNormalize(3),
    },
    overlay: {
        flex: 1,
        paddingVertical: pixelNormalize(40),
        borderRadius: pixelNormalize(10),
        width:'100%',
    },
    shopInfoContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: pixelNormalize(20),
        flex: 1,
    },
    heartIcon: {
        position: 'absolute',
        top: pixelNormalize(-25),
        right: pixelNormalize(10),
        zIndex: pixelNormalize(1)
    },
    favoriteImage: {
        width: pixelNormalize(30),
        height: pixelNormalize(30),
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
        fontSize:pixelNormalize(13),
        color: 'black',
    },
    shopDistance: {
        fontSize: pixelNormalize(13),
        color: 'black',
    },
    shopAddress: {
        fontSize: pixelNormalize(11),
        color: 'gray',
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
        shadowOffset: { width:pixelNormalize(0), height:pixelNormalize(2) },
        shadowOpacity: pixelNormalize(0.3), // Adjusted shadow opacity
        shadowRadius: pixelNormalize(3), // Adjusted shadow radius
        elevation: pixelNormalize(3),
    },
    detailButtonText: {
        color: 'navy',
        fontWeight: 'bold',
    },
    deleteButton: {
        backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center',
        width: pixelNormalize(60),
        height: pixelNormalize(200),
        borderRadius: pixelNormalize(10),
        marginRight: pixelNormalize(2),
        marginLeft:pixelNormalize(16),
        marginTop:pixelNormalize(12),
    },
    deleteIcon: {
        width:pixelNormalize(25),
        height: pixelNormalize(25),
        tintColor: '#fff',
    },
    iconContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    timingIcon: {
        width:pixelNormalize(14),
        height: pixelNormalize(14),
        marginRight:pixelNormalize(4),
    },
    locationIcon: {
        width: pixelNormalize(14),
        height:pixelNormalize(14),
        marginRight:pixelNormalize(4),
        tintColor:'gray',
    },
});

export default RecommendScreen;
