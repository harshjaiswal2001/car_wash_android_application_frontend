import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, Image, StyleSheet, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Swipeable } from 'react-native-gesture-handler';
import binIcon from '../assets/icons8-remove-50.png'; // Import your delete icon image
import editIcon from '../assets/edit-button.png';

const carData = [
    {
        id: '1',
        carName: 'Mercedes-Benz',
        carModel: 'AMG A35',
        carNumber: 'MH01FG0001',
        carImage: require('../assets/aaron-huber-8qYE6LGHW-c-unsplash.jpg'),
    },
    {
        id: '2',
        carName: 'BMW',
        carModel: 'M3 Sedan',
        carNumber: 'MH31FC0001',
        carImage: require('../assets/martin-katler-y3neNkE6efI-unsplash.jpg'),
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
        margin: 20,
        marginBottom: -2,
        borderRadius: 12,
        overflow: 'hidden',
        resizeMode: 'cover',
    },
    carItemContainer: {
        padding: 50,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        margin: 1,
        borderRadius: 12,
        alignItems: 'flex-start',
    },
    editIconContainer: {
        position: 'absolute',
        top: 16,
        right: 16,
    },
    editIcon: {
        width: 24,
        height: 24,
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
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white',
        marginLeft: -35,
    },
    carModel: {
        fontSize: 18,
        color: 'white',
        fontWeight: 'bold',
        marginLeft: 4,
    },
    carNumber: {
        fontSize: 18,
        color: 'white',
        textAlign: 'left',
        fontWeight: 'bold',
        marginTop: 2,
        marginLeft: -35,
    },
    submitNewCarButton: {
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
    addNewCarButtonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },
    deleteAction: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'red',
        marginRight: 16,
        borderRadius: 12,
        width: 70,
        height: '90%',
        marginTop: 20,
    },
    deleteIcon: {
        width: 30,
        height: 30,
        tintColor: 'white',
    },
});

export default MyCarScreen;
