import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { Swipeable } from 'react-native-gesture-handler';
import editImage from '../../../assets/edit-button.png';
import deleteIcon from '../../../assets/icons8-remove-50.png'; // Import your delete icon image

// Icon imports
import homeIcon from '../../../assets/icons8-home-24.png';
import officeIcon from '../../../assets/icons8-office-location-66.png';
import otherIcon from '../../../assets/icons8-globe-24.png';
import additionalIcon from '../../../assets/icons8-location-50.png';
import {pixelNormalize} from "../../constants/Size";

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

    const handleDeleteAddress = (addressId) => {
        console.log(addressId);
        const updatedAddresses = addresses.filter((address) => address.id !== addressId);
        setAddresses(updatedAddresses);
    };

    const renderSwipeableItem = ({item}) => {
        const rightSwipeActions = (progress, dragX) => {
            const transX = dragX.interpolate({
                inputRange: [-100, 0],
                outputRange: [100, 0],
            });

            return (
                <TouchableOpacity
                    style={styles.deleteButton}
                    onPress={() => handleDeleteAddress(item.id)}
                >
                    <Image source={deleteIcon} style={styles.deleteIcon} />
                </TouchableOpacity>
            );
        };

        return (
            <Swipeable renderRightActions={rightSwipeActions}>
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
                                numberOfLines={0}
                            >
                                {item.text}
                            </Text>
                        </View>
                    </View>
                </View>
            </Swipeable>
        );
    };

    const editAddress = (addressId) => {
        navigation.navigate('EditAddress', { addressId });
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Saved Addresses</Text>
            <FlatList
                data={addresses}
                keyExtractor={(item) => item.id}
                renderItem={renderSwipeableItem}
                leftOpenValue={75}
                disableLeftSwipe={true} // Disable left swiping
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
        padding: pixelNormalize(16),
        marginBottom: 16,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 2,
        minHeight: 120,
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
        flexDirection: 'row',
        alignItems: 'center',
    },
    categoryIcon: {
        width: 21,
        height: 21,
        marginRight: 8,
    },
    categoryText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#339AF0',
    },
    addressText: {
        fontSize: 16,
        marginBottom: 8,
        color: '#000',
    },
    editButton: {
        borderRadius: 5,
        padding: 8,
    },
    editImage: {
        width: 22,
        height: 22,
        resizeMode: 'contain',
    },
    addButton: {
        backgroundColor: 'navy',
        borderRadius: 10,
        paddingVertical: 12,
        alignItems: 'center',
        width: '100%',
        marginTop: 'auto',
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
    title: {
        fontSize: 18,
        color: '#181818',
        fontWeight: 'bold',
        marginLeft: 10,
        marginBottom: 10,
    },
    additionalIcon: {
        width: 20,
        height: 20,
        marginLeft: 8,
        marginRight: 8,
    },
    addressInfo: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    textContainer: {
        flex: 1,
    },
    deleteButton: {
        backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center',
        width: 42,
        height: 115,
        borderRadius: 10,
        marginRight: 2,
        marginLeft:20,
    },
    deleteIcon: {
        width: 25,
        height: 25,
        tintColor: '#fff',
    },
});

export default AddressScreen;
