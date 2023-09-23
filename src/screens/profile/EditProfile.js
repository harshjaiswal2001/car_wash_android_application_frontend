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
        padding: 16,
        alignItems: 'center',
    },
    profilePictureContainer: {
        position: 'relative',
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
        width:20,
        height:20,


    },
    profileInfoContainer: {
        alignItems: 'center',
        marginBottom: 16,
    },
    nameText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'black',
        marginBottom: 8,
        marginTop: 20,
    },
    infoText: {
        fontSize: 16,
        marginBottom: 8,
    },
    inputContainer: {
        width: '100%',
        marginBottom: 16,
        marginTop:10,
    },
    inputLabel: {
        fontSize: 16,
        marginBottom: 4,
        color: 'gray',
        fontWeight:'bold',

    },
    input: {
        width: '100%',
        height: 50, // Increase the height for more spacing
        borderColor: '#fff',
        backgroundColor:'#f8f8ff',
        borderWidth: 1,
        borderRadius: 10, // Add border radius
        textAlignVertical: 'center', // Center text vertically
        paddingLeft: 15,
        fontWeight: 'bold',
        shadowColor: 'rgba(0, 0, 0, 0.2)',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 1,
        shadowRadius: 5,
        elevation: 3,
    },

    updateButton: {
        backgroundColor: 'navy',
        borderRadius: 10,
        paddingVertical: 12,
        alignItems: 'center',
        width: '100%',
        marginTop: 'auto', // Push the button to the bottom
        marginBottom: 16,
        shadowColor: 'rgba(0, 0, 0, 0.2)',
        shadowOffset: { width: 1, height: 3 },
        shadowOpacity: 1,
        shadowRadius: 5,
        elevation: 3,
    },
    updateButtonText: {
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
        borderRadius:20,
        marginTop:'185%',


    },
    modalContent: {
        backgroundColor: 'white',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        padding: 20,
        width: '110%', // Adjust the width as needed
        alignItems: 'center', // Center content horizontally
        borderRadius:20,

    },
    modalTitle: {
        fontSize: 22,
        marginBottom: 10,
        alignItems:'center',
        color:'black',
    },

    modalButtonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',

    },
    modalButton: {
        width: 80, // Adjust the width and height as needed
        height: 80,
        borderRadius: 40, // Half of the width/height to make it circular
        alignItems: 'center',
        justifyContent: 'space-between',

        shadowColor: 'rgba(0, 0, 0, 0.2)',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 1,
        shadowRadius: 5,
        elevation: 2,
        backgroundColor: 'white',
        margin:20,

    },
    modalIcon: {
        width: 32,
        height: 32,
        marginBottom: 10,
    },
    modalButtonText: {
        fontSize: 18,
        color:'black',

    },
    messageContainer: {
        backgroundColor: 'black', // Customize the background color
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 10,
        alignItems: 'center',
        marginTop: 20, // Adjust the margin as needed
        shadowColor: 'rgba(0, 128, 0, 0.4)', // Customize shadow color
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 1,
        shadowRadius: 4,
        elevation: 3,
    },
    messageText: {
        color: 'white', // Customize text color
        fontSize: 16,
        fontWeight: 'bold',
    },

});

export default EditProfileScreen;
