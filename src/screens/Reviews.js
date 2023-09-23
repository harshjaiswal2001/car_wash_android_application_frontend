import React from 'react';
import { View, Text, StyleSheet, Image, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const reviewData = [
    {
        id: '1',
        name: 'John Doe',
        rating: 4.5,
        date: 'August 25, 2023',
        reviewText: 'This was a great experience. I would highly recommend this service! Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugi' ,
        profileImage: require('../../assets/pexels-pixabay-220453.jpg'),
    },
    {
        id: '2',
        name: 'Alice Smith',
        rating: 3.8,
        date: 'August 22, 2023',
        reviewText: 'The service was good, but there\'s room for imprvement. Lorem ipsum dolor sit amet, conseclamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        profileImage: require('../../assets/pexels-pixabay-220453.jpg'),
    },
    {
        id: '3',
        name: 'Mark Johnson',
        rating: 4.2,
        date: 'August 20, 2023',
        reviewText: 'Friendly staff and excellent service. Will definitely come back!Lorem ipsum dolor sit ameoris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        profileImage: require('../../assets/pexels-pixabay-220453.jpg'),
    },
    {
        id: '4',
        name: 'Emily Davis',
        rating: 5.0,
        date: 'August 18, 2023',
        reviewText: 'Amazing experience! Quick and efficient service. Highly recommended. Lorem ipsum dolor n voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        profileImage: require('../../assets/pexels-pixabay-220453.jpg'),
    },
    {
        id: '5',
        name: 'Michael Clark',
        rating: 3.5,
        date: 'August 15, 2023',
        reviewText: 'Decent service but a bit expensive for the quality provided.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        profileImage: require('../../assets/pexels-pixabay-220453.jpg'),
    },
    {
        id: '6',
        name: 'Sophia Adams',
        rating: 4.7,
        date: 'August 12, 2023',
        reviewText: 'Excellent service! The staff was friendly and the work was top-notch.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        profileImage: require('../../assets/pexels-pixabay-220453.jpg'),
    },
    // Add more review data as needed
];


const ReviewItem = ({ name, rating, date, reviewText, profileImage }) => {
    return (
        <View style={styles.reviewItem}>
            <View style={styles.profileContainer}>
                <Image source={profileImage} style={styles.profileImage} />
                <View style={styles.userInfo}>
                    <Text style={styles.name}>{name}</Text>
                    <View style={styles.ratingContainer}>
                        <Icon name="star" size={20} color="gold" />
                        <Text style={styles.ratingText}>{rating}</Text>
                    </View>
                </View>
            </View>
            <Text style={styles.date}>{date}</Text>
            <Text style={styles.reviewText}>{reviewText}</Text>
            <View style={styles.bottomBorder} />
        </View>
    );
};

const ReviewScreen = () => {
    return (
        <View style={styles.container}>
            <FlatList
                data={reviewData}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <ReviewItem
                        name={item.name}
                        rating={item.rating}
                        date={item.date}
                        reviewText={item.reviewText}
                        profileImage={item.profileImage}
                    />
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    reviewItem: {
        marginBottom: 20,
    },
    profileContainer: {
        flexDirection: 'row',
        marginBottom: 10,
    },
    profileImage: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginRight: 10,
    },
    userInfo: {
        flex: 1,
        justifyContent: 'center',
    },
    name: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5,
        color:'black',
    },
    ratingContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    ratingText: {
        marginLeft: 5,
    },
    date: {
        fontSize: 12,
        color: 'grey',
        marginBottom: 5,
    },
    reviewText: {
        fontSize: 16,
    },
    bottomBorder: {
        borderBottomColor: 'grey',
        borderBottomWidth: 1,
        marginTop: 10,
    },
});

export default ReviewScreen;
