import React, { useState } from 'react';
import { View, StyleSheet, TextInput, Text, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import MapView from 'react-native-maps';
import HorizontalImageFlatList from '../../components/Recommendation2';
import { pixelNormalize } from "../../constants/Size";
import { useNavigation } from "@react-navigation/native";

const DiscoverScreen = () => {
    const navigation = useNavigation();

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <MapView
                style={styles.map}
                initialRegion={{
                    latitude: 28.693602091083623,
                    longitude: 77.21464383448563,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
            />
            <View style={styles.contentContainer}>
                <Text style={styles.header}>Discover</Text>
                <View style={styles.searchBarContainer}>
                    <TextInput
                        style={styles.searchBar}
                        placeholder="Search location"
                        placeholderTextColor="gray"
                        onChangeText={(text) => {
                            // Handle text input here
                        }}
                    />
                </View>
            </View>
            <HorizontalImageFlatList navigation={navigation} />
        </ScrollView>
    );
};


const styles = StyleSheet.create({

    container: {
        flexGrow: 1,
    },
    map: {
        ...StyleSheet.absoluteFillObject,
    },
    contentContainer: {
        padding: pixelNormalize(16),
        backgroundColor: 'transparent',
    },
    header: {
        fontSize: pixelNormalize(21),
        color: '#293E73',
        fontWeight: 'bold',
        left: pixelNormalize(140),
        top: pixelNormalize(-15)
    },
    searchBarContainer: {
        backgroundColor: 'white',
        borderRadius: pixelNormalize(10),
        padding: pixelNormalize(5),
        borderColor: '#fff',
        shadowColor: '#000',
        shadowOffset: { width: pixelNormalize(0), height: pixelNormalize(2) },
        shadowOpacity: pixelNormalize(0.3),
        shadowRadius: pixelNormalize(3),
        elevation: pixelNormalize(3),
    },
    searchBar: {
        fontSize: pixelNormalize(16),
    },
});

export default DiscoverScreen;
