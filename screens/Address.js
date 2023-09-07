import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, Image, StyleSheet } from 'react-native';
import editImage from '../assets/edit-button.png';

//icon import
import homeIcon from '../assets/icons8-home-24.png';
import officeIcon from '../assets/icons8-office-location-66.png';
import otherIcon from '../assets/icons8-globe-24.png';
import additionalIcon from '../assets/icons8-location-50.png'

const AddressScreen = ({ navigation }) => {
    const [addresses, setAddresses] = useState([
        {
            id: '1',
            category: 'Home',
            text: '123 Main Street, Apartment 4B, Cityville, USA',
            icon: homeIcon,
        },
        {
            id: '2',
            category: 'Office',
            text: '456 Business Avenue, Suite 201, Corporate City, USA',
            icon: officeIcon,
        },
        {
            id: '3',
            category: 'Other',
            text: '789 Random Road, Unit 42, Suburbia, USA',
            icon: otherIcon,
        },
    ]);

    const editAddress = (addressId) => {
        // Navigate to the edit address screen with the selected addressId
        navigation.navigate('EditAddress', { addressId });
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}> Saved address</Text>
            <FlatList
                data={addresses}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View style={styles.addressItem}>
                        <View style={styles.header}>
                            <View style={styles.categoryContainer}>
                                <Image source={item.icon} style={styles.categoryIcon} />
                                <Text style={styles.categoryText}>{item.category}</Text>
                            </View>
                            <TouchableOpacity
                                style={styles.editButton}
                                onPress={() => editAddress(item.id)}
                            >
                                <Image source={editImage} style={styles.editImage} />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.addressInfo}>
                            <Image source={additionalIcon} style={styles.additionalIcon} />

                            <View style={styles.textContainer}>
                                <Text
                                    style={styles.addressText}
                                    numberOfLines={0} // Allow unlimited lines for wrapping
                                >
                                    {item.text}
                                </Text>
                            </View>

                        </View>
                    </View>
                )}
            />

            <TouchableOpacity
                style={styles.addButton}
                onPress={() => navigation.navigate('AddNewAddress')}
            >
                <Text style={styles.addButtonText}>Add New Address</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
    addressItem: {
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 16,
        marginBottom: 16,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 2, // For Android
        minHeight: 120, // Fixed height for all address items
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 8,
    },
    categoryContainer: {
        borderRadius: 5,
        padding: 4,
        flexDirection: 'row', // Align icon and text horizontally
        alignItems: 'center', // Center items vertically

    },

    categoryIcon: {
        width: 21, // Set the width of the category icon
        height: 21, // Set the height of the category icon
        marginRight: 8, // Add margin to the right of the category icon
    },

    categoryText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#339AF0',
    },

    addressText: {
        fontSize: 16,
        marginBottom: 8,
        color:'#000',
    },
    editButton: {
        borderRadius: 5,
        padding: 8,
    },
    editImage: {
        width: 22, // Set the width
        height: 22, // Set the height
        resizeMode: 'contain',
    },

    addButton: {
        backgroundColor: 'navy',
        borderRadius: 10,
        paddingVertical: 12,
        alignItems: 'center',
        width: '100%',
        marginTop: 'auto', // Push the button to the bottom
        marginBottom: 16,
        shadowColor: 'rgba(0, 0, 0, 0.2)',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 1,
        shadowRadius: 5,
        elevation: 2,
    },
    addButtonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },

    title:{
    fontSize: 18,
    color: '#181818', // Default text color
    fontWeight: 'bold', // Add bold font weight
    marginLeft: 10, // Add margin to the left of the title
         marginBottom:10,
},
    additionalIcon: {
        width: 20, // Set the width of the additional icon
        height: 20, // Set the height of the additional icon
        marginLeft: 8, // Add margin to the left of the additional icon
        marginRight:8
    },

    addressInfo: {
        flexDirection: 'row', // Align address text and additional icon horizontally
        alignItems: 'center', // Center items vertically
    },
    textContainer: {
        flex: 1, // Allow the text container to expand and wrap text
    },

});

export default AddressScreen;
