import React, { useState } from 'react';
import {View, Text, StyleSheet, Button, TouchableOpacity} from "react-native";
import { RadioButton } from 'react-native-paper';


const LanguageScreen = () => {
  const [selectedLanguage, setSelectedLanguage] = useState('en'); // Default language

 const handleLanguageChange = (language) => {
    setSelectedLanguage(language);
  };

  const handleUpdateLanguage = () => {
    // Update the global language state here...
    console.log('Selected Language:', selectedLanguage);
  };


  return (
    <View style={styles.container}>
      <Text style={styles.title}>Select Language</Text>

      <View style={styles.radioContainer}>
        <RadioButton
          value="en"
          status={selectedLanguage === 'en' ? 'checked' : 'unchecked'}
          onPress={() => handleLanguageChange('en')}
          color="#007AFF"
        />
        <Text style={styles.radioLabel}>English</Text>
      </View>

      <View style={styles.radioContainer}>
        <RadioButton
          value="es"
          status={selectedLanguage === 'es' ? 'checked' : 'unchecked'}
          onPress={() => handleLanguageChange('es')}
          color="#007AFF"
        />
        <Text style={styles.radioLabel}>Español</Text>
      </View>

      <View style={styles.radioContainer}>
        <RadioButton
          value="hi"
          status={selectedLanguage === 'hi' ? 'checked' : 'unchecked'}
          onPress={() => handleLanguageChange('hi')}
          color="#007AFF"
        />
        <Text style={styles.radioLabel}>हिंदी</Text>
      </View>

      <View style={styles.radioContainer}>
        <RadioButton
          value="id"
          status={selectedLanguage === 'id' ? 'checked' : 'unchecked'}
          onPress={() => handleLanguageChange('id')}
          color="#007AFF"
        />
        <Text style={styles.radioLabel}>Bahasa Indonesia</Text>
      </View>

      {/* Add more language options if required */}
        <TouchableOpacity
            style={styles.submitButton}
            onPress={handleUpdateLanguage}
        >
            <Text style={styles.submitButtonText}>Update</Text>
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
  radioContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 22,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ddd',
    paddingVertical: 8,
    paddingHorizontal: 12,
    backgroundColor: '#fff', // Add a background color
    elevation: 3, // Add elevation for shadow effect
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  radioLabel: {
    fontSize: 16,
    marginLeft: 8,
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
});

export default LanguageScreen;
