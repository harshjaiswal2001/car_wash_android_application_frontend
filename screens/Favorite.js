import React from 'react';
import { View, Text, Image, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import StarRating from 'react-native-star-rating';

// Sample shop data (replace with your actual data)
const shopData = [
    {
        id: '1',
        name: 'Sample Shop 1',
        timing: 'Open: 9:00 AM - 6:00 PM',
        distance: '1.2 miles away',
        address: '123 Main St, City, Country',
        rating: 4.5, // Rating out of 5
        image: require('../assets/aaron-huber-8qYE6LGHW-c-unsplash.jpg'),
    },
    {
        id: '2',
        name: 'Sample Shop 2',
        timing: 'Open: 8:30 AM - 7:00 PM',
        distance: '2.5 miles away',
        address: '456 Elm St, City, Country',
        rating: 4.2, // Rating out of 5
        image: require('../assets/carwash 2.jpg'),
    },
    {
        id: '3',
        name: 'Sample Shop 3',
        timing: 'Open: 10:00 AM - 8:00 PM',
        distance: '0.8 miles away',
        address: '789 Oak St, City, Country',
        rating: 4.8, // Rating out of 5
        image: require('../assets/carwash 3.jpg'),
    },
    {
        id: '4',
        name: 'Sample Shop 4',
        timing: 'Open: 9:30 AM - 5:30 PM',
        distance: '3.0 miles away',
        address: '101 Pine St, City, Country',
        rating: 3.9, // Rating out of 5
        image: require('../assets/carwash 4.jpg'),
    },
    {
        id: '5',
        name: 'Sample Shop 5',
        timing: 'Open: 8:00 AM - 9:00 PM',
        distance: '2.2 miles away',
        address: '222 Maple St, City, Country',
        rating: 4.1, // Rating out of 5
        image: require('../assets/carwash 1.jpg'),
    },
    {
        id: '6',
        name: 'Sample Shop 6',
        timing: 'Open: 7:30 AM - 6:30 PM',
        distance: '1.5 miles away',
        address: '333 Cedar St, City, Country',
        rating: 4.6, // Rating out of 5
        image: require('../assets/carwash 2.jpg'),
    },
    // Add more shop data as needed
];

const FavoriteScreen = () => {
    // Function to render each shop item in the flat list
    const renderShopItem = ({ item }) => (
        <TouchableOpacity style={styles.shopItem}>
            <View style={styles.imageContainer}>
                <Image source={item.image} style={styles.shopImage} />
            </View>
            <View style={styles.bottomContainer}>
                <View style={styles.shopInfoContainer}>
                    <Text style={styles.shopName}>{item.name}</Text>
                    <Text style={styles.shopTiming}>{item.timing}</Text>
                    <Text style={styles.shopDistance}>{item.distance}</Text>
                    <Text style={styles.shopAddress}>{item.address}</Text>
                </View>
                <View style={styles.ratingContainer}>
                    <StarRating
                        disabled={true}
                        maxStars={5}
                        rating={item.rating}
                        starSize={18}
                        fullStarColor="#FFD700" // Color for filled stars
                    />
                    <Text style={styles.ratingText}>{item.rating.toFixed(1)}</Text>
                </View>
                <TouchableOpacity style={styles.directionButton}>
                    <Text style={styles.directionButtonText}>Get Directions</Text>
                </TouchableOpacity>
            </View>
        </TouchableOpacity>
    );

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
        padding: 16,
        backgroundColor: '#fff',
    },
    shopItem: {
        flexDirection: 'column',
        marginVertical: 12,
        padding: 16,
        backgroundColor: '#f5f5f5',
        borderRadius: 10,
    },
    imageContainer: {
        alignItems: 'center',
    },
    shopImage: {
        padding:110,
        width: '100%',
        height: 100,
        borderRadius: 10,
        resizeMode: 'cover',
    },
    bottomContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 12,
    },
    shopInfoContainer: {
        flex: 1,
        marginLeft: 12,
    },
    shopName: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'black',
    },
    shopTiming: {
        fontSize: 14,
        color: 'black',
    },
    shopDistance: {
        fontSize: 14,
        color: 'black',
    },
    shopAddress: {
        fontSize: 14,
        color: 'black',
    },
    ratingContainer: {
        alignItems: 'center',
    },
    ratingText: {
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 4,
        color: 'black',
    },
    directionButton: {
        backgroundColor: 'navy',
        borderRadius: 10,
        paddingVertical: 8,
        paddingHorizontal: 16,
        alignItems: 'center',
    },
    directionButtonText: {
        color: 'white',
        fontWeight: 'bold',
    },
});

export default FavoriteScreen;
