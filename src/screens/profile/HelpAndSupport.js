import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity ,Image} from "react-native";
import { useNavigation } from '@react-navigation/native';

// Import your call and mail icons as images
import callIcon from '../../../assets/icons8-call-50.png';
import mailIcon from '../../../assets/icons8-mail-50.png';
import {pixelNormalize} from "../../constants/Size";




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
    padding: pixelNormalize(16),
  },
  title: {
    fontSize: pixelNormalize(24),
    fontWeight: 'bold',
    marginBottom: pixelNormalize(16),
  },
  subtitle: {
    fontSize: pixelNormalize(18),
    marginBottom:pixelNormalize( 10),
    marginTop:pixelNormalize(6),
    fontWeight:'bold',

  },
  subtitleMain: {
    fontSize: pixelNormalize(20),
    marginBottom: pixelNormalize(10),
    marginTop: pixelNormalize(6),
    fontWeight: 'bold',
  },
  buttonContainer: {
    marginTop: pixelNormalize(10),
    borderRadius:pixelNormalize(10),
    flexDirection: 'row',
    justifyContent:'center',
    alignItems:'center',
    shadowColor: '#000000',
    shadowOffset: {
      width: pixelNormalize(0),
      height: pixelNormalize(3)
    },
    shadowRadius: pixelNormalize(5),
    shadowOpacity: pixelNormalize(1.0)
  },
  input: {
    height: pixelNormalize(40),
    borderWidth: pixelNormalize(9),
    marginBottom: pixelNormalize(16),
    marginTop:pixelNormalize(10),
    padding: pixelNormalize(10),
    paddingVertical:pixelNormalize(20),
    borderRadius:pixelNormalize(10),
    backgroundColor:'#fff',
    borderColor:'#fff',
    shadowColor: '#000',
    shadowOffset: { width:pixelNormalize( 1), height: pixelNormalize(3) },
    shadowOpacity: pixelNormalize(0.2),
    shadowRadius: pixelNormalize(2),
    elevation: pixelNormalize(3),
    textAlignVertical:"top",
  },

  buttonText: {
    color: '#293E73',
    fontSize:pixelNormalize(18),
  },
  textArea: {
    borderColor: '#fff',
    borderWidth: pixelNormalize(2),
    marginBottom: pixelNormalize(15),
    marginTop:pixelNormalize(10),
    padding: pixelNormalize(10),
    borderRadius:pixelNormalize(20),
    minHeight:pixelNormalize(100),
    backgroundColor:'#fff',
    shadowColor: '#000',
    shadowOffset: { width: pixelNormalize(0), height: pixelNormalize(2) },
    shadowOpacity: pixelNormalize(0.2),
    shadowRadius: pixelNormalize(2),
    elevation: pixelNormalize(3),
    textAlign:"left",
    textAlignVertical:"top"

  },

  submitButton: {
    backgroundColor: 'navy',
    borderRadius: pixelNormalize(10),
    paddingVertical: pixelNormalize(12),
    alignItems: 'center',
    width: '100%',
    marginTop: 'auto', // Push the button to the bottom
    marginBottom: pixelNormalize(16),
    shadowColor: 'rgba(0, 0, 0, 0.2)',
    shadowOffset: { width: pixelNormalize(0), height:pixelNormalize( 2) },
    shadowOpacity: pixelNormalize(1),
    shadowRadius: pixelNormalize(5),
    elevation: pixelNormalize(2),
  },
  submitButtonText: {
    color: 'white',
    fontSize: pixelNormalize(18),
    fontWeight: 'bold',
  },
  callButton: {
    borderRadius: pixelNormalize(10),
    borderWidth: pixelNormalize(1),
    flexDirection:'row',
    width: '35%',
    backgroundColor: '#fff',
    padding:pixelNormalize(16),
    margin: pixelNormalize(20),
    marginTop: pixelNormalize(2),
    marginBottom: pixelNormalize(20),
    borderColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: pixelNormalize(0), height:pixelNormalize( 2) },
    shadowOpacity: pixelNormalize(0.3),
    shadowRadius: pixelNormalize(3),
    elevation: pixelNormalize(3),
    fontSize: pixelNormalize(20),
    alignItems: 'center',
  },
  mailButton: {
    borderRadius: pixelNormalize(10),
    borderWidth: pixelNormalize(1),
    flexDirection:'row',
    width: '35%',
    backgroundColor: '#fff' ,
    padding:pixelNormalize(16),
    margin: pixelNormalize(20),
    marginTop: pixelNormalize(2),
    marginBottom: pixelNormalize(20),
    borderColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: pixelNormalize(0), height:pixelNormalize( 2 )},
    shadowOpacity: pixelNormalize(0.3),
    shadowRadius: pixelNormalize(3),
    elevation: pixelNormalize(3),
    fontSize: pixelNormalize(20),
    alignItems: 'center',
  },
  buttonIcon: {
    width:pixelNormalize(24),
    height:pixelNormalize(24),
    marginRight:pixelNormalize( 10),
  },

  });

export default HelpAndSupportScreen;
