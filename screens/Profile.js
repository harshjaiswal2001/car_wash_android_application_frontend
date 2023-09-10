import React, {useState} from 'react';
import { View, Text, Image, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import Modal from 'react-native-modal';

//importing icons from assets
import editUserIcon from '../assets/user-logo.png';
import favoriteIcon from '../assets/heart-favorite-icon.png';
import carIcon from '../assets/car-icon.png';
import addressIcon from '../assets/placeholder.png';
import languageIcon from '../assets/internet.png';
import termsIcon from '../assets/terms-and-conditions.png';
import privacyIcon from '../assets/privacy.png';
import helpIcon from '../assets/question.png';
import logoutIcon from '../assets/logout.png';
import additionalLogo from '../assets/right-chevron.png';
import redAdditionalLogo from '../assets/icons8-arrow-red.png'

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
      navigation.navigate('HelpAndSupport');
    } else if (action === 'privacyPolicy') {
      navigation.navigate('PrivacyPolicy');
    } else if (action === 'language') {
      navigation.navigate('Language');
    }else if (action === 'termsAndCondition') {
      navigation.navigate('TermsAndCondition');
    }else if (action === 'privacyPolicy') {
      navigation.navigate('PrivacyPolicy');
    } else if (action === 'logout') {
      toggleLogoutModal();
    } else if (action === 'myAddress') {
      navigation.navigate('Address');
    } else if (action === 'editProfile') {
      navigation.navigate('EditProfile');
    } else if (action === 'myCar') {
      navigation.navigate('MyCar');
    }else if (action === 'favorite') {
      navigation.navigate('Favorite');
    }


  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require('../assets/logo-no-background.png')}
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
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 24,
  },
  profilePicture: {
    width: 90,
    height: 90,
    borderRadius: 50,
    marginRight: 18,
    justifyContent:'center',
  },
  userInfo: {
    flex: 1,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    color:'#000'
  },
  email: {
    fontSize: 16,
    color: '#777',
    marginTop: 4,
  },
  item: {
    flexDirection: 'row', // Align icon and text horizontally
    alignItems: 'center',
    paddingVertical: 22,
    borderBottomWidth: 1,
    justifyContent:'space-between',
    borderBottomColor: '#B9B8B1',
  },

  iconContainer: {
    marginRight: 16,
  },

  icon: {
    width: 24,
    height: 24,
    marginRight: 16,
  },

  titleContainer: {
    flex: 1,
    marginLeft: -16, // Add a margin to the left of the title
  },


  modalContent: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 16,
    alignItems: 'center',
  },
  modalText: {
    fontSize: 18,
    marginBottom: 20,
    color:'#000',
  },
  modalButtons: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  modalButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginHorizontal: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'lightgray',
  },
  buttonText: {
    fontSize: 16,
  },

  itemText: {
    fontSize: 20,
    color: '#181818', // Default text color
  },
  additionalLogo: {
    width: 14, // Set the width of the additional logo image
    height: 14, // Set the height of the additional logo image
    marginLeft:100,
  },

  logoutArrowIcon: {
    width: 18, // Set the width of the red logout icon image (adjust as needed)
    height: 18, // Set the height of the red logout icon image (adjust as needed)
  },



});

export default ProfileScreen;
