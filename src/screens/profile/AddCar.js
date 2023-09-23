import React, { useState } from 'react';
import { View, Text, TextInput, Image, StyleSheet, TouchableOpacity } from 'react-native';
import cameraIcon from '../../../assets/icons8-camera-30.png';
import Modal from 'react-native-modal';
import galleryIcon from '../../../assets/icons8-gallery-48.png';
import removeIcon from '../../../assets/icons8-remove-50.png';
import defaultCarIcon from '../../../assets/icons8-car-profile-100.png';

const AddNewCarScreen = ({ navigation }) => {
    // State variables
    const [carName, setCarName] = useState('');
    const [carModel, setCarModel] = useState('');
    const [carNumber, setCarNumber] = useState('');
    const [carPicture, setCarPicture] = useState(defaultCarIcon);
    const [isCarPictureModalVisible, setCarPictureModalVisible] = useState(false);

    // Open the modal to select or remove car picture
    const toggleCarPictureModal = () => {
        setCarPictureModalVisible(!isCarPictureModalVisible);
    };

    // Function to handle selecting a car picture from the gallery
    const handleSelectCarPicture = () => {
        // Implement logic to open the gallery and select a car picture
        // Update the carPicture state with the selected picture
        // Close the modal
        toggleCarPictureModal();
    };

    // Function to handle removing the car picture
    const handleRemoveCarPicture = () => {
        setCarPicture(null);
        toggleCarPictureModal();
    };

    // Function to handle saving the new car
    const handleSaveCar = () => {
        const newCar = {
            id: (new Date().getTime()).toString(),
            carName,
            carModel,
            carNumber,
            carImage: carPicture || defaultCarIcon, // Use a default image if no image is selected
        };

        // Implement logic to save the new car data, e.g., send it to your data source
        // Then, navigate back to the previous screen
        navigation.goBack();
    };

    return (
        <View style={styles.container}>
            <View style={styles.profilePictureContainer}>
                <Image source={carPicture} style={styles.profilePicture} />
                <TouchableOpacity onPress={toggleCarPictureModal}>
                    <Image source={cameraIcon} style={styles.cameraIcon} />
                </TouchableOpacity>
            </View>
            <View style={styles.inputContainer}>
                <TextInput
                    placeholder="Enter car name"
                    value={carName}
                    onChangeText={(text) => setCarName(text)}
                    style={styles.textInputStyle}
                />
            </View>
            <View style={styles.inputContainer}>
                <TextInput
                    placeholder="Enter car model"
                    value={carModel}
                    onChangeText={(text) => setCarModel(text)}
                    style={styles.textInputStyle}
                />
            </View>
            <View style={styles.inputContainer}>
                <TextInput
                    placeholder="Enter car number"
                    value={carNumber}
                    onChangeText={(text) => setCarNumber(text)}
                    style={styles.textInputStyle}
                />
            </View>
            <TouchableOpacity style={styles.saveButton} onPress={handleSaveCar}>
                <Text style={styles.saveButtonText}>Add Car</Text>
            </TouchableOpacity>

            {/* Car Picture Modal */}
            <Modal
                transparent={true}
                visible={isCarPictureModalVisible}
                animationType="slide"
                onRequestClose={toggleCarPictureModal}
            >
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <Text style={styles.modalTitle}>Select Car Picture</Text>
                        <View style={styles.modalButtonContainer}>
                            <TouchableOpacity style={styles.modalButton} onPress={handleSelectCarPicture}>
                                <Image source={galleryIcon} style={styles.modalIcon} />
                                <Text style={styles.modalButtonText}>Gallery</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.modalButton} onPress={handleRemoveCarPicture}>
                                <Image source={removeIcon} style={styles.modalIcon} />
                                <Text style={styles.modalButtonText}>Remove</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        alignItems: 'center',
    },
    profilePictureContainer: {
        position: 'relative',
        marginTop: 20,
    },
    profilePicture: {
        width: 120,
        height: 120,
        borderRadius: 60,
        marginBottom: 5,
    },
    cameraIcon: {
        position: 'absolute',
        bottom: 6,
        right: -2,
        backgroundColor: 'white',
        borderRadius: 60,
        padding: 18,
        width: 20,
        height: 20,
    },
    inputContainer: {
        width: '100%',
        marginBottom: 16,
    },
    textInputStyle: {
        width: '100%',
        height: 50,
        borderColor: '#fff',
        backgroundColor: '#f8f8ff',
        borderWidth: 1,
        borderRadius: 10,
        textAlignVertical: 'center',
        paddingLeft: 15,
        fontWeight: 'bold',
        shadowColor: 'rgba(0, 0, 0, 0.2)',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 1,
        shadowRadius: 5,
        elevation: 3,
        marginTop: 10,
    },
    saveButton: {
        backgroundColor: 'navy',
        borderRadius: 10,
        paddingVertical: 12,
        alignItems: 'center',
        width: '100%',
        marginTop: 30,
        shadowColor: 'rgba(0, 0, 0, 0.2)',
        shadowOffset: { width: 1, height: 3 },
        shadowOpacity: 1,
        shadowRadius: 5,
        elevation: 3,
    },
    saveButtonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },
    // Modal Styles
    modalContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 10,
        borderRadius: 20,
        marginTop: '185%',
    },
    modalContent: {
        backgroundColor: 'white',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        padding: 20,
        width: '110%',
        alignItems: 'center',
        borderRadius: 20,
    },
    modalTitle: {
        fontSize: 22,
        marginBottom: 10,
        alignItems: 'center',
        color: 'black',
    },
    modalButtonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    modalButton: {
        width: 80,
        height: 80,
        borderRadius: 40,
        alignItems: 'center',
        justifyContent: 'space-between',
        shadowColor: 'rgba(0, 0, 0, 0.2)',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 1,
        shadowRadius: 5,
        elevation: 2,
        backgroundColor: 'white',
        margin: 20,
    },
    modalIcon: {
        width: 32,
        height: 32,
        marginBottom: 10,
    },
    modalButtonText: {
        fontSize: 18,
        color: 'black',
    },
});

export default AddNewCarScreen;
