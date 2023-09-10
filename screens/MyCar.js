import React,{useState} from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, ImageBackground, Image } from 'react-native';
import editIcon from '../assets/edit-button.png'; // Import your edit icon image
import { useNavigation } from '@react-navigation/native';
import { StackActions } from '@react-navigation/native';


const carData = [
    {
        id: '1',
        carName: 'Mercedes-Benz',
        carModel: 'AMG A35',
        carNumber: 'MH01FG0001',
        carImage: require('../assets/aaron-huber-8qYE6LGHW-c-unsplash.jpg'), // Import your car image
    },
    {
        id: '2',
        carName: 'BMW',
        carModel: 'M3 Sedan',
        carNumber: 'MH31FC0001',
        carImage: require('../assets/martin-katler-y3neNkE6efI-unsplash.jpg'), // Import your car image
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
            onCarAdded: (newCar) => {setCars([...cars, newCar]);},});
    };
    const renderItem = ({ item }) => (
        <ImageBackground
            source={item.carImage} // Use the car image as the background for each item
            style={styles.carItemBackground}
            imageStyle={{ resizeMode: 'cover' }} // Ensure the image resizes to cover the container
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
    );


    return (
        <View style={styles.container}>
            <FlatList
                data={carData}
                keyExtractor={(item) => item.id}
                renderItem={renderItem}
            />
            <TouchableOpacity
                style={styles.submitNewCarButton}
                onPress={handleAddNewCar}
            >
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
        resizeMode: 'contain',
    },
    carItemContainer: {
        padding: 50,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        margin: 1,
        borderRadius: 12,
        alignItems: 'flex-start', // Align items to the left
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
        marginLeft:-35,

    },
    carModel: {
        fontSize: 18,
        color: 'white',
        fontWeight:'bold',
        marginLeft: 4,
    },
    carNumber: {
        fontSize: 18,
        color: 'white',
        textAlign: 'left',
        fontWeight:'bold',
        marginTop: 2,
        marginLeft:-35,
    },
    submitNewCarButton: {
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
    addNewCarButtonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default MyCarScreen;
