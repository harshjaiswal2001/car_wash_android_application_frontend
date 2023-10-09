import React, { useState } from 'react';
import { View, Text, TextInput, Image, StyleSheet, TouchableOpacity } from 'react-native';
import cameraIcon from '../../../assets/icons8-camera-30.png';
import Modal from 'react-native-modal';
import galleryIcon from '../../../assets/icons8-gallery-48.png';
import removeIcon from '../../../assets/icons8-remove-50.png';
import defaultCarIcon from '../../../assets/icons8-car-profile-100.png';
import {pixelNormalize} from "../../constants/Size";

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
        padding: pixelNormalize(16),
        alignItems: 'center',
    },
    profilePictureContainer: {
        position: 'relative',
        marginTop: pixelNormalize(20),
    },
    profilePicture: {
        width: pixelNormalize(120),
        height: pixelNormalize(120),
        borderRadius:pixelNormalize(60),
        marginBottom:pixelNormalize(5),
    },
    cameraIcon: {
        position: 'absolute',
        bottom: pixelNormalize(6),
        right:pixelNormalize(-2),
        backgroundColor: 'white',
        borderRadius:pixelNormalize(60),
        padding:pixelNormalize(18),
        width: pixelNormalize(20),
        height: pixelNormalize(20),
    },
    inputContainer: {
        width: '100%',
        marginBottom: pixelNormalize(16),
    },
    textInputStyle: {
        width: '100%',
        height: pixelNormalize(50),
        borderColor: '#fff',
        backgroundColor: '#f8f8ff',
        borderWidth: pixelNormalize(1),
        borderRadius: pixelNormalize(10),
        textAlignVertical: 'center',
        paddingLeft:pixelNormalize(15),
        fontWeight: 'bold',
        shadowColor: 'rgba(0, 0, 0, 0.2)',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: pixelNormalize(1),
        shadowRadius: pixelNormalize(5),
        elevation: pixelNormalize(3),
        marginTop: pixelNormalize(10),
    },
    saveButton: {
        backgroundColor: 'navy',
        borderRadius:pixelNormalize(10),
        paddingVertical: pixelNormalize(12),
        alignItems: 'center',
        width: '100%',
        marginTop: pixelNormalize(30),
        shadowColor: 'rgba(0, 0, 0, 0.2)',
        shadowOffset: { width: pixelNormalize(1), height: pixelNormalize(3) },
        shadowOpacity: pixelNormalize(1),
        shadowRadius: pixelNormalize(5),
        elevation: pixelNormalize(3),
    },
    saveButtonText: {
        color: 'white',
        fontSize: pixelNormalize(18),
        fontWeight: 'bold',
    },
    // Modal Styles
    modalContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: pixelNormalize(10),
        borderRadius: pixelNormalize(20),
        marginTop: '185%',
    },
    modalContent: {
        backgroundColor: 'white',
        borderTopLeftRadius: pixelNormalize(20),
        borderTopRightRadius: pixelNormalize(20),
        padding: pixelNormalize(20),
        width: '110%',
        alignItems: 'center',
        borderRadius: pixelNormalize(20),
    },
    modalTitle: {
        fontSize: pixelNormalize(22),
        marginBottom: pixelNormalize(10),
        alignItems: 'center',
        color: 'black',
    },
    modalButtonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    modalButton: {
        width: pixelNormalize(80),
        height: pixelNormalize(80),
        borderRadius: pixelNormalize(40),
        alignItems: 'center',
        justifyContent: 'space-between',
        shadowColor: 'rgba(0, 0, 0, 0.2)',
        shadowOffset: { width: pixelNormalize(0), height:pixelNormalize( 2) },
        shadowOpacity: pixelNormalize(1),
        shadowRadius: pixelNormalize(5),
        elevation: pixelNormalize(2),
        backgroundColor: 'white',
        margin: pixelNormalize(20),
    },
    modalIcon: {
        width: pixelNormalize(32),
        height: pixelNormalize(32),
        marginBottom: pixelNormalize(10),
    },
    modalButtonText: {
        fontSize: pixelNormalize(18),
        color: 'black',
    },
});

export default AddNewCarScreen;
