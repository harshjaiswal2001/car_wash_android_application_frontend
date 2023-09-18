import React, { useState } from 'react';
import { View, FlatList, ImageBackground, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import StarRating from 'react-native-star-rating';
import LinearGradient from 'react-native-linear-gradient';
import { Swipeable } from 'react-native-gesture-handler';
import deleteIcon from "../assets/icons8-remove-50.png";
import timingIcon from "../assets/icons8-clock-24.png";
import locationIcon from "../assets/icons8-location-50.png"

// Sample shop data
const shopData = [
    {
        id: '1',
        name: 'Sample Shop 1',
        timing: '9:00 AM - 6:00 PM',
        distance: '1.2 miles away',
        address: '123 Main St, City, Country',
        rating: 4.5,
        image: require('../assets/aaron-huber-8qYE6LGHW-c-unsplash.jpg'),
    },
    {
        id: '2',
        name: 'Sample Shop 2',
        timing: '8:30 AM - 7:00 PM',
        distance: '2.5 miles away',
        address: '456 Elm St, City, Country',
        rating: 4.2,
        image: require('../assets/aaron-huber-8qYE6LGHW-c-unsplash.jpg'),
    },
    {
        id: '3',
        name: 'Sample Shop 3',
        timing: '10:00 AM - 8:00 PM',
        distance: '0.8 miles away',
        address: '789 Oak St, City, Country 789 Oak St, City, Country',
        rating: 3.8,
        image: require('../assets/martin-katler-y3neNkE6efI-unsplash.jpg'),
    },
    {
        id: '4',
        name: 'Sample Shop 4',
        timing: '7:00 AM - 9:00 PM',
        distance: '3.8 miles away',
        address: '101 Pine St, City, Country',
        rating: 4.7,
        image: require('../assets/aaron-huber-8qYE6LGHW-c-unsplash.jpg'),
    },
    {
        id: '5',
        name: 'Sample Shop 5',
        timing: '9:30 AM - 5:30 PM',
        distance: '1.0 miles away',
        address: '246 Maple St, City, Country ',
        rating: 4.0,
        image: require('../assets/martin-katler-y3neNkE6efI-unsplash.jpg'),
    },
    // Add more shop data as needed
];

const BookingHistoryScreen = () => {
    const [favorites, setFavorites] = useState({}); // Store favorite status for each shop
    const [openSwipeableId, setOpenSwipeableId] = useState(null);


    // Function to toggle the favorite status
    const toggleFavorite = (id) => {
        setFavorites((prevFavorites) => ({
            ...prevFavorites,
            [id]: !prevFavorites[id],
        }));
        console.log(`Shop ${id} is now ${favorites[id] ? 'unfavorited' : 'favorited'}`);
    };

    const favoriteImage = require('../assets/icons8-heart-50.png'); // Replace with your heart icon image
    const nonFavoriteImage = require('../assets/heart-favorite-icon.png'); // Replace with your heart icon image

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
            <TouchableOpacity onPress={() => handleFlatListItemPress(item)}>
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
                                <TouchableOpacity
                                    onPress={() => toggleFavorite(item.id)}
                                    style={styles.heartIcon}
                                >
                                    <Image
                                        source={favorites[item.id] ? favoriteImage : nonFavoriteImage}
                                        style={styles.favoriteImage}
                                    />
                                </TouchableOpacity>
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
                                    <TouchableOpacity style={styles.detailButton}>
                                        <Text style={styles.detailButtonText}>Go detail</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </LinearGradient>
                    </ImageBackground>
                </Swipeable>
            </TouchableOpacity>
        );
    };

    return (
        <View style={styles.container}>
            <FlatList
                data={shopData}
                keyExtractor={(item) => item.id}
                renderItem={renderShopItem}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    shopItem: {
        margin: 14,
        marginBottom: 16,
        borderRadius: 10,
        overflow: 'hidden',
        borderColor: '#fff',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3, // Adjusted shadow opacity
        shadowRadius: 3, // Adjusted shadow radius
        elevation: 3,
    },
    overlay: {
        flex: 1,
        paddingVertical: 40,
        borderRadius: 10,
        width: '100%',
    },
    shopInfoContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 20,
        flex: 1,
    },
    heartIcon: {
        position: 'absolute',
        top: -25,
        right: 10,
        zIndex: 1
    },
    favoriteImage: {
        width: 30,
        height: 30,
    },
    leftContainer: {
        flex: 1,
        marginBottom: -56,
    },
    rightContainer: {
        alignItems: 'flex-end',
        marginBottom: -107,
    },
    shopName: {
        fontSize: 17,
        fontWeight: 'bold',
        color: 'black',
        marginTop: 60,
    },
    shopTiming: {
        fontSize: 13,
        color: 'black',
    },
    shopDistance: {
        fontSize: 13,
        color: 'black',
    },
    shopAddress: {
        fontSize: 11,
        color: 'gray',
    },
    ratingContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    ratingText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'black',
        marginLeft: 4,
    },
    detailButton: {
        backgroundColor: 'white',
        borderRadius: 10,
        paddingVertical: 8,
        paddingHorizontal: 12,
        alignItems: 'center',
        marginTop: 8,
        borderColor: '#fff',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3, // Adjusted shadow opacity
        shadowRadius: 3, // Adjusted shadow radius
        elevation: 3,
    },
    detailButtonText: {
        color: 'navy',
        fontWeight: 'bold',
    },
    deleteButton: {
        backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center',
        width: 60,
        height: 200,
        borderRadius: 10,
        marginRight: 2,
        marginLeft:16,
        marginTop:12,
    },
    deleteIcon: {
        width: 25,
        height: 25,
        tintColor: '#fff',
    },
    iconContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    timingIcon: {
        width: 14,
        height: 14,
        marginRight: 4,
    },
    locationIcon: {
        width: 14,
        height: 14,
        marginRight: 4,
        tintColor:'gray',
    },
});

export default BookingHistoryScreen;
