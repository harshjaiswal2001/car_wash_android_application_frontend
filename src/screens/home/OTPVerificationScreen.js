import React, { useState, useRef } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Alert } from 'react-native';

const OtpVerificationScreen = () => {
    const [otp, setOtp] = useState(['', '', '', '']);
    const refs = [useRef(), useRef(), useRef(), useRef()];

    const handleOtpChange = (text, index) => {
        if (/^\d{0,1}$/.test(text)) {
            setOtp((prevOtp) => {
                const newOtp = [...prevOtp];
                newOtp[index] = text;

                if (text && index < 3) {
                    // Move focus to the next input if a digit is entered
                    refs[index + 1].current.focus();
                } else if (!text && index > 0) {
                    // Move focus to the previous input if backspace is pressed
                    refs[index - 1].current.focus();
                }

                return newOtp;
            });
        }
    };

    const handleOtpSubmit = () => {
        const enteredOtp = otp.join('');
        // Add your OTP verification logic here
        if (enteredOtp === '1234') {
            Alert.alert('Success', 'OTP is correct!');
        } else {
            Alert.alert('Error', 'Incorrect OTP. Please try again.');
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Enter OTP</Text>
            <View style={styles.otpContainer}>
                {otp.map((digit, index) => (
                    <TextInput
                        key={index}
                        style={styles.otpInput}
                        onChangeText={(text) => handleOtpChange(text, index)}
                        value={digit}
                        ref={refs[index]}
                    />
                ))}
            </View>
            <TouchableOpacity style={styles.submitButton} onPress={handleOtpSubmit}>
                <Text style={styles.submitButtonText}>Submit</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 24,
        marginBottom: 20,
    },
    otpContainer: {
        flexDirection: 'row',
    },
    otpInput: {
        width: 40,
        height: 40,
        borderWidth: 1,
        borderColor: 'black',
        fontSize: 20,
        textAlign: 'center',
        marginHorizontal: 5,
    },
    submitButton: {
        backgroundColor: 'blue',
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 5,
        marginTop: 20,
    },
    submitButtonText: {
        color: 'white',
        fontSize: 18,
    },
});

export default OtpVerificationScreen;
