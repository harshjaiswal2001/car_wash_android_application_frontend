import React from 'react';
import { View, StyleSheet, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'
import MapView from "react-native-maps";
import HorizontalImageFlatList from "../components/Recommendation2";

const DiscoverScreen = () => {
    return (
        <View style={styles.container}>
            {/* Search bar */}
            <View style={styles.searchBarContainer}>
                <TextInput
                    style={styles.searchBar}
                    placeholder="Search"
                    placeholderTextColor="gray"
                    onChangeText={(text) => {
                        // Handle text input here
                    }}
                />
            </View>


            <Icon
                name='arrow-back'// Ionicons name for left arrow
                size={32} // Adjust the size as needed
                color="black" // Adjust the color as needed
                style={styles.button}
                onPress={() => {
                    // Handle the button press action here
                }}
            />

            {/* Your map component goes here */}
            <View style={{ flex: 1 }}>
                <MapView
                    style={{ width: '100%', height: '100%' }}
                    initialRegion={{
                        latitude: 28.693602091083623,
                        longitude: 77.21464383448563,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421,
                    }}
                />
            </View>
            {/* You can use libraries like react-native-maps for maps */}
            <HorizontalImageFlatList/>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    searchBarContainer: {
        position: 'absolute',
        top: 20,
        left: 60, // Adjust the left position to position the search bar
        right: 60, // Adjust the right position to position the search bar
        zIndex: 1,
    },
    searchBar: {
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 5,
        padding: 10,
        backgroundColor: 'white',
    },
    button: {
        position: 'absolute', // Position the button
        top: 20, // Adjust the top position as needed
        left: 20, // Adjust the left position as needed
        zIndex: 1, // Ensure the button is above other elements
    },
    // Add styles for your map component if necessary
});

export default DiscoverScreen;
