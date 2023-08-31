import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import { Button } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';

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
        <TouchableOpacity style={styles.button} onPress={callDetails}>
          <Text style={styles.buttonText}>  Call us  </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={mailDetails}>
          <Text style={styles.buttonText}>  Mail us  </Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.title}>Write message here</Text>
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
        multiline = {true}


      />

      <Button style={styles.submitButton}
        title="Submit"
        onPress={handleSubmit}
        color="#000080"
      />

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
    marginBottom: 8,

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
    borderWidth: 2,
    marginBottom: 16,
    padding: 10,
    borderRadius:10,
    backgroundColor:'#fff',
    borderColor:'#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 3
  },
  button: {
    borderRadius:10,
    borderWidth:1,
    width:'35%',
    backgroundColor:'#f8f8ff',  // Customize button color
    padding: 12,
    margin: 20,
    marginTop:2,
    marginBottom:20,
    borderColor:'#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 3,
    fontSize:20,
    alignItems:'center',
  },
  buttonText: {
    color: '#4169E1',
    fontSize: 18,
  },
  textArea: {
    borderColor: '#fff',
    borderWidth: 2,
    marginBottom: 15,
    padding: 10,
    borderRadius:20,
    minHeight:100,
    backgroundColor:'#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 3

  },
   submitButton:{
    width:'50%',
    backgroundColor:'#000080',
     marginTop: 'auto',
     borderRadius: 8,
     paddingVertical: 12,
     paddingHorizontal: 16,
  },
});

export default HelpAndSupportScreen;
