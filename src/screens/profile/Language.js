import React, { useState } from 'react';
import {View, Text, StyleSheet, Button, TouchableOpacity} from "react-native";
import { RadioButton } from 'react-native-paper';
import {pixelNormalize} from "../../constants/Size";


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
    padding: pixelNormalize(16),
  },
  title: {
    fontSize: pixelNormalize(24),
    fontWeight: 'bold',
    marginBottom: pixelNormalize(16),
  },
  radioContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: pixelNormalize(22),
    borderRadius: pixelNormalize(8),
    borderWidth: pixelNormalize(1),
    borderColor: '#ddd',
    paddingVertical: pixelNormalize(8),
    paddingHorizontal: pixelNormalize(12),
    backgroundColor: '#fff',
    elevation: pixelNormalize(3),
    shadowColor: '#000',
    shadowOffset: { width: pixelNormalize(0), height:pixelNormalize( 2 )},
    shadowOpacity: pixelNormalize(0.2),
    shadowRadius: pixelNormalize(2),
  },
  radioLabel: {
    fontSize: pixelNormalize(16),
    marginLeft: pixelNormalize(8),
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
        shadowOffset: { width: pixelNormalize(0), height:pixelNormalize(2) },
        shadowOpacity: pixelNormalize(1),
        shadowRadius: pixelNormalize(5),
        elevation: pixelNormalize(2),
    },
    submitButtonText: {
        color: 'white',
        fontSize: pixelNormalize(18),
        fontWeight: 'bold',
    },
});

export default LanguageScreen;
