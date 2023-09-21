import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity ,Image} from "react-native";
import { useNavigation } from '@react-navigation/native';

// Import your call and mail icons as images
import callIcon from '../assets/icons8-call-50.png';
import mailIcon from '../assets/icons8-mail-50.png';




const HelpAndSupportScreen = () => {

  const navigation = useNavigation();
  const  callDetails = () =>{
    /* phone details */
  };
  const  mailDetails = () =>{
    /* mail details */
  };
  const  handleSubmit = () =>{
    /* help form submission */
  };



  return (
      <View style={styles.container}>
        <Text style={styles.title}>Need some help?</Text>

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.callButton} onPress={callDetails}>
            <Image source={callIcon} style={styles.buttonIcon} />
            <Text style={styles.buttonText}>Call us</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.mailButton} onPress={mailDetails}>
            <Image source={mailIcon} style={styles.buttonIcon} />
            <Text style={styles.buttonText}>Mail us</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.subtitleMain}>Write message here</Text>
        <Text style={styles.subtitle}>Name</Text>
        <TextInput
            style={styles.input}
            placeholder="Enter your Name"
        />
        <Text style={styles.subtitle}>Email address</Text>
        <TextInput
            style={styles.input}
            placeholder="Enter your email address"
            keyboardType="email-address"
        />
        <Text style={styles.subtitle}>Message</Text>
        <TextInput
            style={styles.textArea}
            placeholder="Write message here"
            multiline={true}
            numberOfLines={7}
        />

        <TouchableOpacity
            style={styles.submitButton}
            onPress={handleSubmit}
        >
          <Text style={styles.submitButtonText}>Submit</Text>
        </TouchableOpacity>
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 10,
    marginTop:6,
    fontWeight:'bold',

  },
  subtitleMain: {
    fontSize: 20,
    marginBottom: 10,
    marginTop: 6,
    fontWeight: 'bold',
  },
  buttonContainer: {
    marginTop: 10,
    borderRadius:10,
    flexDirection: 'row', // Buttons will be side by side,
    justifyContent:'center',
    alignItems:'center',
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowRadius: 5,
    shadowOpacity: 1.0
  },
  input: {
    height: 40,
    borderWidth: 9,
    marginBottom: 16,
    marginTop:10,
    padding: 10,
    paddingVertical:20,
    borderRadius:10,
    backgroundColor:'#fff',
    borderColor:'#fff',
    shadowColor: '#000',
    shadowOffset: { width: 1, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 3,
    textAlignVertical:"top",
  },

  buttonText: {
    color: '#293E73',
    fontSize: 18,
  },
  textArea: {
    borderColor: '#fff',
    borderWidth: 2,
    marginBottom: 15,
    marginTop:10,
    padding: 10,
    borderRadius:20,
    minHeight:100,
    backgroundColor:'#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 3,
    textAlign:"left",
    textAlignVertical:"top"

  },

  submitButton: {
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
  submitButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  callButton: {
    borderRadius: 10,
    borderWidth: 1,
    flexDirection:'row',
    width: '35%',
    backgroundColor: '#fff',
    padding: 16,
    margin: 20,
    marginTop: 2,
    marginBottom: 20,
    borderColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3, // Adjusted shadow opacity
    shadowRadius: 3, // Adjusted shadow radius
    elevation: 3,
    fontSize: 20,
    alignItems: 'center',
  },
  mailButton: {
    borderRadius: 10,
    borderWidth: 1,
    flexDirection:'row',
    width: '35%',
    backgroundColor: '#fff' ,
    padding: 16,
    margin: 20,
    marginTop: 2,
    marginBottom: 20,
    borderColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3, // Adjusted shadow opacity
    shadowRadius: 3, // Adjusted shadow radius
    elevation: 3,
    fontSize: 20,
    alignItems: 'center',
  },
  buttonIcon: {
    width: 24, // Adjust the width and height as needed
    height: 24,
    marginRight: 10, // Add some spacing between the icon and text
  },

  });

export default HelpAndSupportScreen;
