import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, Image, StyleSheet, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Swipeable } from 'react-native-gesture-handler';
import binIcon from '../../../assets/icons8-remove-50.png'; // Import your delete icon image
import editIcon from '../../../assets/edit-button.png';
import {pixelNormalize} from "../../constants/Size";

const carData = [
    {
        id: '1',
        carName: 'Mercedes-Benz',
        carModel: 'AMG A35',
        carNumber: 'MH01FG0001',
        carImage: require('../../../assets/aaron-huber-8qYE6LGHW-c-unsplash.jpg'),
    },
    {
        id: '2',
        carName: 'BMW',
        carModel: 'M3 Sedan',
        carNumber: 'MH31FC0001',
        carImage: require('../../../assets/martin-katler-y3neNkE6efI-unsplash.jpg'),
    },
    // Add more car data as needed
];

const MyCarScreen = () => {
    const [cars, setCars] = useState(carData);
    const navigation = useNavigation();

    const handleEditCar = (carData) => {
        navigation.navigate('EditCar', { carData });
    };

    const handleAddNewCar = () => {
        navigation.navigate('AddCar', {
            onCarAdded: (newCar) => {
                setCars([...cars, newCar]);
            },
        });
    };

    const renderSwipeableItem = (item) => {
        const rightSwipeActions = (progress, dragX) => {
            const transX = dragX.interpolate({
                inputRange: [-100, 0],
                outputRange: [100, 0],
            });

            return (
                <TouchableOpacity
                    onPress={() => {

                        const updatedCars = cars.filter((car) => car.id !== item.id);
                        setCars(updatedCars);
                    }}
                    style={styles.deleteAction}
                >
                    <Image source={binIcon} style={styles.deleteIcon} />
                </TouchableOpacity>
            );
        };

        return (
            <Swipeable renderRightActions={rightSwipeActions}>
                <ImageBackground
                    source={item.carImage}
                    style={styles.carItemBackground}
                    imageStyle={{ resizeMode: 'cover' }}
                >
                    <View style={styles.carItemContainer}>
                        <View style={styles.editIconContainer}>
                            <TouchableOpacity onPress={() => handleEditCar(item)}>
                                <Image source={editIcon} style={styles.editIcon} />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.carInfoContainer}>
                            <View style={styles.carNameModel}>
                                <Text style={styles.carName}>{item.carName}</Text>
                                <Text style={styles.carModel}> {item.carModel}</Text>
                            </View>
                            <Text style={styles.carNumber}>{item.carNumber}</Text>
                        </View>
                    </View>
                </ImageBackground>
            </Swipeable>
        );
    };

    return (
        <View style={styles.container}>
            <FlatList
                data={cars}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => renderSwipeableItem(item)}
            />
            <TouchableOpacity style={styles.submitNewCarButton} onPress={handleAddNewCar}>
                <Text style={styles.addNewCarButtonText}>Add new car</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    carItemBackground: {
        flex: 1,
        margin: pixelNormalize(20),
        marginBottom: pixelNormalize(-2),
        borderRadius: pixelNormalize(12),
        overflow: 'hidden',
        resizeMode: 'cover',
    },
    carItemContainer: {
        padding: pixelNormalize(50),
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        margin: pixelNormalize(1),
        borderRadius: pixelNormalize(12),
        alignItems: 'flex-start',
    },
    editIconContainer: {
        position: 'absolute',
        top: pixelNormalize(16),
        right: pixelNormalize(16),
    },
    editIcon: {
        width: pixelNormalize(24),
        height: pixelNormalize(24),
        resizeMode: 'contain',
        tintColor: '#fff',
    },
    carInfoContainer: {
        justifyContent: 'space-between',
    },
    carNameModel: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    carName: {
        fontSize: pixelNormalize(18),
        fontWeight: 'bold',
        color: 'white',
        marginLeft: pixelNormalize(-35),
    },
    carModel: {
        fontSize: pixelNormalize(18),
        color: 'white',
        fontWeight: 'bold',
        marginLeft:pixelNormalize( 4),
    },
    carNumber: {
        fontSize: pixelNormalize(18),
        color: 'white',
        textAlign: 'left',
        fontWeight: 'bold',
        marginTop: pixelNormalize(2),
        marginLeft: pixelNormalize(-35),
    },
    submitNewCarButton: {
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
    addNewCarButtonText: {
        color: 'white',
        fontSize: pixelNormalize(18),
        fontWeight: 'bold',
    },
    deleteAction: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'red',
        marginRight: pixelNormalize(16),
        borderRadius: pixelNormalize(12),
        width: pixelNormalize(70),
        height: '90%',
        marginTop: pixelNormalize(20),
    },
    deleteIcon: {
        width: pixelNormalize(30),
        height: pixelNormalize(30),
        tintColor: 'white',
    },
});

export default MyCarScreen;
