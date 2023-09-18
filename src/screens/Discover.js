import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';

// Sample data for car wash locations
const carWashLocations = [
    {
        id: '1',
        name: 'Clean & Shine Car Wash',
        address: '123 Main St, City, Country',
        distance: '1.2 miles away',
    },
    {
        id: '2',
        name: 'Sparkling Car Wash',
        address: '456 Elm St, City, Country',
        distance: '2.5 miles away',
    },
    {
        id: '3',
        name: 'Cityscape Auto Spa',
        address: '789 Oak St, City, Country',
        distance: '0.8 miles away',
    },
    // Add more car wash locations as needed
];

const DiscoverScreen = ({ navigation }) => {
    // Function to handle when a location is clicked
    const handleLocationPress = (locationId) => {
        // You can navigate to a details screen for the selected location
        // Example: navigation.navigate('LocationDetails', { locationId });
        console.log(`Location with ID ${locationId} clicked.`);
    };

    // Render each car wash location as a list item
    const renderItem = ({ item }) => (
        <TouchableOpacity
            style={styles.locationItem}
            onPress={() => handleLocationPress(item.id)}
        >
            <Text style={styles.locationName}>{item.name}</Text>
            <Text style={styles.locationAddress}>{item.address}</Text>
            <Text style={styles.locationDistance}>{item.distance}</Text>
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Discover Car Wash Locations</Text>
            <FlatList
                data={carWashLocations}
                keyExtractor={(item) => item.id}
                renderItem={renderItem}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
    heading: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,
    },
    locationItem: {
        backgroundColor: '#fff',
        borderRadius: 8,
        padding: 16,
        marginBottom: 16,
        elevation: 2,
    },
    locationName: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 8,
    },
    locationAddress: {
        fontSize: 16,
        color: 'gray',
        marginBottom: 8,
    },
    locationDistance: {
        fontSize: 16,
        color: 'green',
    },
});

export default DiscoverScreen;
