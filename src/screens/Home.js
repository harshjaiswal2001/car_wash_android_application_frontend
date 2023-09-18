import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const HomeScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Welcome to Car Wash App</Text>

            {/* Booking Button */}
            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('Booking')}
            >
                <Text style={styles.buttonText}>Book an Appointment</Text>
            </TouchableOpacity>

            {/* Discover Button */}
            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('Discover')}
            >
                <Text style={styles.buttonText}>Discover Car Wash Locations</Text>
            </TouchableOpacity>

            {/* Profile Button */}
            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('Profile')}
            >
                <Text style={styles.buttonText}>View Profile</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        justifyContent: 'center',
        alignItems: 'center',
    },
    heading: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 24,
    },
    button: {
        backgroundColor: 'navy',
        borderRadius: 8,
        padding: 16,
        width: '80%',
        marginBottom: 16,
        alignItems: 'center',
    },
    buttonText: {
        fontSize: 18,
        color: 'white',
    },
});

export default HomeScreen;
