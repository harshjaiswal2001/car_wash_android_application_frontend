import React, {useState} from 'react';
import { View, Text, Image, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import Modal from 'react-native-modal';

//importing icons from assets
import editUserIcon from '../../../assets/user-logo.png';
import favoriteIcon from '../../../assets/heart-favorite-icon.png';
import carIcon from '../../../assets/car-icon.png';
import addressIcon from '../../../assets/placeholder.png';
import languageIcon from '../../../assets/internet.png';
import termsIcon from '../../../assets/terms-and-conditions.png';
import privacyIcon from '../../../assets/privacy.png';
import helpIcon from '../../../assets/question.png';
import logoutIcon from '../../../assets/logout.png';
import additionalLogo from '../../../assets/right-chevron.png';
import redAdditionalLogo from '../../../assets/icons8-arrow-red.png'
import {pixelNormalize} from "../../constants/Size";

const ProfileScreen = ({ navigation }) => {
  const data = [
    { id: '1', title: 'Edit Profile', action: 'editProfile', icon : editUserIcon },
    { id: '2', title: 'Favorite', action: 'favorite', icon:favoriteIcon },
    { id: '3', title: 'My Car', action: 'myCar', icon:carIcon },
    { id: '4', title: 'My Address', action: 'myAddress' ,icon:addressIcon },
    { id: '5', title: 'Language', action: 'language' , icon:languageIcon},
    { id: '6', title: 'Terms and condition', action: 'termsAndCondition' , icon:termsIcon },
    { id: '7', title: 'Privacy Policy', action: 'privacyPolicy' , icon: privacyIcon},
    { id: '8', title: 'Help and Support', action: 'helpAndSupport' , icon:helpIcon },
    { id: '9', title: 'Logout', action: 'logout' , icon:logoutIcon ,additionalIcon : redAdditionalLogo},
  ];

  const [isLogoutModalVisible, setLogoutModalVisible] = useState(false);

  const toggleLogoutModal = () => {
    setLogoutModalVisible(!isLogoutModalVisible);
  };

  // Function to handle the signout action
  const handleLogout = () => {
    // Implement your signout logic here
    console.log('User logged out.');
    setLogoutModalVisible(false);
  };



  const handleAction = (action) => {
    if (action === 'helpAndSupport') {
      navigation.push('HelpAndSupport');
    } else if (action === 'privacyPolicy') {
      navigation.push('PrivacyPolicy');
    } else if (action === 'language') {
      navigation.push('Language');
    }else if (action === 'termsAndCondition') {
      navigation.push('TermsAndCondition');
    }else if (action === 'privacyPolicy') {
      navigation.push('PrivacyPolicy');
    } else if (action === 'logout') {
      toggleLogoutModal();
    } else if (action === 'myAddress') {
      navigation.push('Address');
    } else if (action === 'editProfile') {
      navigation.push('EditProfile');
    } else if (action === 'myCar') {
      navigation.push('MyCar');
    }else if (action === 'favorite') {
      navigation.push('Favorite');
    }


  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require('../../../assets/pexels-pixabay-220453.jpg')}
          style={styles.profilePicture}
        />
        <View style={styles.userInfo}>
          <Text style={styles.name}>Harsh Jaiswal</Text>
          <Text style={styles.email}>harshjaiswal@example.com</Text>
        </View>
      </View>

      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.item}
            onPress={() => handleAction(item.action)}
          >
            <View style={styles.iconContainer}>
            <Image source={item.icon} style={styles.icon} />
            </View>

            <View style={styles.titleContainer}>
              <Text style={[styles.itemText, item.action === 'logout' && { color: 'red' }]}>{item.title}</Text>
            </View>

            {item.action === 'logout' && ( // Conditionally render the red-colored icon for logout
                <Image source={item.additionalIcon} style={[styles.logoutArrowIcon, { tintColor: 'red'}]} />
            )}
            {item.action !== 'logout' && ( // Conditionally render the arrow icon for other items
                <Image source={additionalLogo} style={styles.additionalLogo} />
            )}
          </TouchableOpacity>
        )}
      />

      <Modal isVisible={isLogoutModalVisible}>
        <View style={styles.modalContent}>
          <Text style={styles.modalText}>Are you sure you want to Logout this account?</Text>
          <View style={styles.modalButtons}>
            <TouchableOpacity
                onPress={toggleLogoutModal}
                style={[styles.modalButton, { backgroundColor: 'lightgray' }]}
            >
              <Text style={styles.buttonText}>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={handleLogout}
                style={[styles.modalButton, { backgroundColor: 'red' }]}
            >
              <Text style={[styles.buttonText, { color: 'white' }]}>Log Out</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
    );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding:pixelNormalize( 16),
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: pixelNormalize(24),
  },
  profilePicture: {
    width: pixelNormalize(90),
    height: pixelNormalize(90),
    borderRadius: pixelNormalize(50),
    marginRight: pixelNormalize(18),
    justifyContent:'center',
  },
  userInfo: {
    flex: 1,
  },
  name: {
    fontSize: pixelNormalize(20),
    fontWeight: 'bold',
    color:'#000'
  },
  email: {
    fontSize: pixelNormalize(16),
    color: '#777',
    marginTop: pixelNormalize(4),
  },
  item: {
    flexDirection: 'row', // Align icon and text horizontally
    alignItems: 'center',
    paddingVertical:pixelNormalize( 22),
    borderBottomWidth: pixelNormalize(1),
    justifyContent:'space-between',
    borderBottomColor: '#B9B8B1',
  },

  iconContainer: {
    marginRight: pixelNormalize(16),
  },

  icon: {
    width: pixelNormalize(24),
    height: pixelNormalize(24),
    marginRight: pixelNormalize(16),
  },

  titleContainer: {
    flex: 1,
    marginLeft: pixelNormalize(-16),
  },


  modalContent: {
    backgroundColor: 'white',
    borderRadius: pixelNormalize(10),
    padding: pixelNormalize(16),
    alignItems: 'center',
  },
  modalText: {
    fontSize: pixelNormalize(18),
    marginBottom: pixelNormalize(20),
    color:'#000',
  },
  modalButtons: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  modalButton: {
    paddingVertical: pixelNormalize(10),
    paddingHorizontal: pixelNormalize(20),
    marginHorizontal: pixelNormalize(10),
    borderRadius: pixelNormalize(5),
    borderWidth: pixelNormalize(1),
    borderColor: 'lightgray',
  },
  buttonText: {
    fontSize: pixelNormalize(16),
  },

  itemText: {
    fontSize: pixelNormalize(20),
    color: '#181818', // Default text color
  },
  additionalLogo: {
    width: pixelNormalize(14),
    height: pixelNormalize(14),
    marginLeft:pixelNormalize(100),
  },

  logoutArrowIcon: {
    width: pixelNormalize(18),
    height: pixelNormalize(18),
  },



});

export default ProfileScreen;
