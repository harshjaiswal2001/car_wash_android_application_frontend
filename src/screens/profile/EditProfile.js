import React, { useState } from 'react';
import { View, Text, TextInput, Image, StyleSheet, TouchableOpacity } from 'react-native';
import cameraIcon from '../../../assets/icons8-camera-30.png';
import Modal from "react-native-modal";
import { RNCamera } from 'react-native-camera';
import { Platform, PermissionsAndroid } from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker';



//importing icons for modal overlay
import galleryIcon from '../../../assets/icons8-gallery-48.png';
import removeIcon from '../../../assets/icons8-remove-50.png';
import {pixelNormalize} from "../../constants/Size";

const EditProfileScreen = ({ navigation }) => {
    const existingName = 'Harsh Jaiswal';
    const existingEmail = 'harshjaiswal@example.com';
    const existingProfilePicture = require('../../../assets/pexels-pixabay-220453.jpg');
    const existingPhoneNo = '9359566941';

    const [name, setName] = useState(existingName);
    const [email, setEmail] = useState(existingEmail);
    const [phoneNumber, setPhoneNumber] = useState(existingPhoneNo);
    const [profilePicture, setProfilePicture] = useState(existingProfilePicture);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [message, setMessage] = useState('');
    const [isMessageVisible, setMessageVisible] = useState(false);


    async function requestCameraPermission() {
        if (Platform.OS === 'android') {
            try {
                const granted = await PermissionsAndroid.request(
                    PermissionsAndroid.PERMISSIONS.CAMERA,
                    {
                        title: 'Camera Permission',
                        message: 'App needs camera access for taking photos',
                    }
                );
                if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                    return true;
                } else {
                    console.log('Camera permission denied');
                    return false;
                }
            } catch (err) {
                console.warn(err);
                return false;
            }
        } else {
            // iOS does not require explicit permission
            return true;
        }
    }

    const handleSaveChanges = () => {
        // Implement logic to save changes to the user's profile
        // You can send this data to your server or storage solution
        // Handle success and error cases
        // After saving, navigate back to the profile screen
        navigation.goBack();
    };

    const handleSelectProfilePicture = () => {
        // Implement logic to open a file picker or camera for selecting a new profile picture
        toggleModal();
    };

    const toggleModal = () => {
        setIsModalVisible(!isModalVisible);
    };

    const handleRemoveProfilePicture = () => {
        // Logic to remove the profile picture
        // This can include resetting the profile picture state variable to a default image or null
        setProfilePicture(null); // Assuming `null` represents no profile picture

        // Set the message and make it visible
        setMessage('Profile picture removed successfully');
        setMessageVisible(true);
        setTimeout(() => {
            setMessageVisible(false);
        }, 3000);

        // Close the modal
        toggleModal();
    };


    const handleOpenCamera = async () => {
        const hasCameraPermission = await requestCameraPermission();
        if (hasCameraPermission) {
            // Open the camera
            setIsModalVisible(false); // Close the modal first
            // Now, you can open the camera using the RNCamera component
            // You can implement this part based on the documentation of react-native-camera
        }
    };


    const handleSelectFromGallery = () => {
        const options = {
            mediaType: 'photo', // Specify that you want to pick photos
        };

        launchImageLibrary(options, (response) => {
            if (response.didCancel) {
                // User cancelled image picker
            } else if (response.error) {
                // Handle errors from the image picker
                console.error('ImagePicker Error:', response.error);
            } else {
                // Handle the selected image
                const selectedImageUri = response.uri;

                // Set the profile picture to the selected image
                setProfilePicture({ uri: selectedImageUri });

                // Close the modal
                toggleModal();
            }
        });
    };




    return (
        <View style={styles.container}>
            <View style={styles.profilePictureContainer}>
                <Image source={profilePicture} style={styles.profilePicture} />
                <TouchableOpacity onPress={handleSelectProfilePicture}>
                    <Image source={cameraIcon} style={styles.cameraIcon} />
                </TouchableOpacity>
            </View>
            <View style={styles.profileInfoContainer}>
                <Text style={styles.nameText}> {existingName}</Text>
                <Text style={styles.infoText}> {existingEmail}</Text>

            </View>
            <View style={styles.inputContainer}>
                <Text style={styles.inputLabel}>Name</Text>
                <TextInput
                    placeholder="Name"
                    value={name}
                    onChangeText={(text) => setName(text)}
                    style={styles.input}
                />
            </View>
            <View style={styles.inputContainer}>
                <Text style={styles.inputLabel}>Email Address</Text>
                <TextInput
                    placeholder="Email"
                    value={email}
                    onChangeText={(text) => setEmail(text)}
                    style={styles.input}
                />
            </View>
            <View style={styles.inputContainer}>
                <Text style={styles.inputLabel}>Phone Number</Text>
                <TextInput
                    placeholder="Phone Number"
                    value={phoneNumber}
                    onChangeText={(text) => setPhoneNumber(text)}
                    style={styles.input}
                />
            </View>
            <TouchableOpacity
                style={styles.updateButton}
                onPress={handleSaveChanges}
            >
                <Text style={styles.updateButtonText}>Update</Text>
            </TouchableOpacity>

            {/* Modal overlay */}
            <Modal
                transparent={true}
                visible={isModalVisible}
                animationType="slide"
                onRequestClose={toggleModal}
            >
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <Text style={styles.modalTitle}>Change profile Photo</Text>
                        <View style={styles.modalButtonContainer}>
                            <TouchableOpacity style={styles.modalButton} onPress={handleOpenCamera}>
                                <Image source={cameraIcon} style={styles.modalIcon} />
                                <Text style={styles.modalButtonText}>Camera</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.modalButton} onPress={handleSelectProfilePicture}>
                                <Image source={galleryIcon} style={styles.modalIcon} />
                                <Text style={styles.modalButtonText}>Gallery</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.modalButton} onPress={handleRemoveProfilePicture}>
                                <Image source={removeIcon} style={styles.modalIcon} />
                                <Text style={styles.modalButtonText}>Remove</Text>
                            </TouchableOpacity>
                        </View>

                    </View>
                </View>
            </Modal>
            {isMessageVisible && (
                <View style={styles.messageContainer}>
                    <Text style={styles.messageText}>{message}</Text>
                </View>
            )}
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
    },
    profilePicture: {
        width: pixelNormalize(120),
        height: pixelNormalize(120),
        borderRadius: pixelNormalize(60),
        marginBottom: pixelNormalize(5),
    },
    cameraIcon: {
        position: 'absolute',
        bottom: pixelNormalize(6),
        right: pixelNormalize(-2),
        backgroundColor: 'white',
        borderRadius: pixelNormalize(60),
        padding: pixelNormalize(18),
        width:pixelNormalize(20),
        height:pixelNormalize(20),


    },
    profileInfoContainer: {
        alignItems: 'center',
        marginBottom: pixelNormalize(16),
    },
    nameText: {
        fontSize: pixelNormalize(18),
        fontWeight: 'bold',
        color: 'black',
        marginBottom: pixelNormalize(8),
        marginTop: pixelNormalize(20),
    },
    infoText: {
        fontSize: pixelNormalize(16),
        marginBottom: pixelNormalize(8),
    },
    inputContainer: {
        width: '100%',
        marginBottom: pixelNormalize(16),
        marginTop:pixelNormalize(10),
    },
    inputLabel: {
        fontSize:pixelNormalize(16),
        marginBottom:pixelNormalize( 4),
        color: 'gray',
        fontWeight:'bold',

    },
    input: {
        width: '100%',
        height: pixelNormalize(50),
        borderColor: '#fff',
        backgroundColor:'#f8f8ff',
        borderWidth: pixelNormalize(1),
        borderRadius: pixelNormalize(10),
        textAlignVertical: 'center',
        paddingLeft: pixelNormalize(15),
        fontWeight: 'bold',
        shadowColor: 'rgba(0, 0, 0, 0.2)',
        shadowOffset: { width: pixelNormalize(0), height: pixelNormalize(2) },
        shadowOpacity: pixelNormalize(1),
        shadowRadius: pixelNormalize(5),
        elevation: pixelNormalize(3),
    },

    updateButton: {
        backgroundColor: 'navy',
        borderRadius: pixelNormalize(10),
        paddingVertical: pixelNormalize(12),
        alignItems: 'center',
        width: '100%',
        marginTop: 'auto', // Push the button to the bottom
        marginBottom: pixelNormalize(16),
        shadowColor: 'rgba(0, 0, 0, 0.2)',
        shadowOffset: { width: pixelNormalize(1), height:pixelNormalize(3) },
        shadowOpacity: pixelNormalize(1),
        shadowRadius: pixelNormalize(5),
        elevation: pixelNormalize(3),
    },
    updateButtonText: {
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
        borderRadius:pixelNormalize(2),
        marginTop:'185%',


    },
    modalContent: {
        backgroundColor: 'white',
        borderTopLeftRadius: pixelNormalize(20),
        borderTopRightRadius: pixelNormalize(20),
        padding: pixelNormalize(20),
        width: '110%',
        alignItems: 'center',
        borderRadius:pixelNormalize(20),

    },
    modalTitle: {
        fontSize: pixelNormalize(22),
        marginBottom: pixelNormalize(10),
        alignItems:'center',
        color:'black',
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
        margin:pixelNormalize(20),

    },
    modalIcon: {
        width:pixelNormalize( 32),
        height: pixelNormalize(32),
        marginBottom: pixelNormalize(10),
    },
    modalButtonText: {
        fontSize: pixelNormalize(18),
        color:'black',

    },
    messageContainer: {
        backgroundColor: 'black',
        paddingVertical: pixelNormalize(10),
        paddingHorizontal:pixelNormalize(20),
        borderRadius: pixelNormalize(10),
        alignItems: 'center',
        marginTop: pixelNormalize(20),
        shadowColor: 'rgba(0, 128, 0, 0.4)',
        shadowOffset: { width: pixelNormalize(0), height: pixelNormalize(2) },
        shadowOpacity: pixelNormalize(1),
        shadowRadius: pixelNormalize(4),
        elevation: pixelNormalize(3),
    },
    messageText: {
        color: 'white', // Customize text color
        fontSize: pixelNormalize(16),
        fontWeight: 'bold',
    },

});

export default EditProfileScreen;
