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
        padding: pixelNormalize(16),
    },
    addressItem: {
        backgroundColor: 'white',
        borderRadius:pixelNormalize(10),
        padding: pixelNormalize(16),
        marginBottom: pixelNormalize(16),
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: pixelNormalize(0.2),
        shadowRadius: pixelNormalize(4),
        elevation: pixelNormalize(2),
        minHeight: pixelNormalize(120),
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: pixelNormalize(8),
    },
    categoryContainer: {
        borderRadius: pixelNormalize(5),
        padding: pixelNormalize(4),
        flexDirection: 'row',
        alignItems: 'center',
    },
    categoryIcon: {
        width: pixelNormalize(21),
        height: pixelNormalize(21),
        marginRight: pixelNormalize(8),
    },
    categoryText: {
        fontSize: pixelNormalize(16),
        fontWeight: 'bold',
        color: '#339AF0',
    },
    addressText: {
        fontSize: pixelNormalize(16),
        marginBottom: pixelNormalize(8),
        color: '#000',
    },
    editButton: {
        borderRadius: pixelNormalize(5),
        padding: pixelNormalize(8),
    },
    editImage: {
        width: pixelNormalize(22),
        height: pixelNormalize(22),
        resizeMode: 'contain',
    },
    addButton: {
        backgroundColor: 'navy',
        borderRadius: pixelNormalize(10),
        paddingVertical: pixelNormalize(12),
        alignItems: 'center',
        width: '100%',
        marginTop: 'auto',
        marginBottom: pixelNormalize(16),
        shadowColor: 'rgba(0, 0, 0, 0.2)',
        shadowOffset: { width: pixelNormalize(0), height:pixelNormalize( 2) },
        shadowOpacity: pixelNormalize(1),
        shadowRadius: pixelNormalize(5),
        elevation: pixelNormalize(2),
    },
    addButtonText: {
        color: 'white',
        fontSize: pixelNormalize(18),
        fontWeight: 'bold',
    },
    title: {
        fontSize: pixelNormalize(18),
        color: '#181818',
        fontWeight: 'bold',
        marginLeft: pixelNormalize(10),
        marginBottom: pixelNormalize(10),
    },
    additionalIcon: {
        width: pixelNormalize(20),
        height: pixelNormalize(20),
        marginLeft: pixelNormalize(8),
        marginRight: pixelNormalize(8),
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
        width: pixelNormalize(42),
        height: pixelNormalize(115),
        borderRadius: pixelNormalize(10),
        marginRight: pixelNormalize(2),
        marginLeft:pixelNormalize(20),
    },
    deleteIcon: {
        width: pixelNormalize(25),
        height: pixelNormalize(25),
        tintColor: '#fff',
    },
});

export default AddressScreen;
