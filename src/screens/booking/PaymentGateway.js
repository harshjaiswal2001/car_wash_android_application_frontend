import React, { useState, useRef } from 'react';
import { View, Text, StyleSheet, FlatList, TextInput, TouchableOpacity, Image } from 'react-native';
import { CreditCard3D } from 'react-native-3d-card'; // Import the 3D card component

const paymentOptions = [
    { id: 1, name: 'Mastercard', logo: require('../../../assets/aaron-huber-8qYE6LGHW-c-unsplash.jpg') },
    { id: 2, name: 'Google Pay', logo: require('../../../assets/aaron-huber-8qYE6LGHW-c-unsplash.jpg') },
    // Add more payment options as needed
];

const PaymentScreen = () => {
    const [selectedOption, setSelectedOption] = useState(null);

    // Define a function to handle payment option selection
    const handlePaymentOptionSelect = (option) => {
        setSelectedOption(option);
    };

    // Create a ref to the 3D card component
    const cardRef = useRef();

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Please select a payment method</Text>

            <FlatList
                data={paymentOptions}
                horizontal
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        style={[
                            styles.paymentOption,
                            selectedOption === item ? styles.selectedPaymentOption : null,
                        ]}
                        onPress={() => handlePaymentOptionSelect(item)}
                    >
                        <Image source={item.logo} style={styles.paymentOptionLogo} />
                        <Text style={styles.paymentOptionName}>{item.name}</Text>
                    </TouchableOpacity>
                )}
            />

            {selectedOption && (
                <View style={styles.paymentForm}>
                    <Text style={styles.formTitle}>Payment Details</Text>

                    {selectedOption.name === 'Mastercard' ? (
                        <>
                            <CreditCard3D
                                numberValue="**** **** **** 1234" // Add a masked card number or provide an actual number
                                nameValue="John Doe" // Provide the cardholder name
                                cvvValue="***" // Provide the CVV
                                expiracyValue="12/23" // Provide the expiration date

                            />
                            <TextInput style={styles.input} placeholder="Name of Card Holder " />
                            <TextInput style={styles.input} placeholder="Card Number" />
                            <TextInput style={styles.input} placeholder="Expiration Date" />
                            <TextInput style={styles.input} placeholder="CVV" />
                        </>
                    ) : selectedOption.name === 'Google Pay' ? (
                        <View>
                            <TextInput style={styles.input} placeholder="Google Pay Account" />
                        </View>
                    ) : null}

                    <TouchableOpacity style={styles.payButton}>
                        <Text style={styles.payButtonText}>Pay</Text>
                    </TouchableOpacity>
                </View>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#F0F0F0',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    paymentOption: {
        flexDirection: 'column',
        alignItems: 'center',
        marginRight: 20,
        padding: 10,
        borderWidth: 1,
        borderColor: '#1F5170',
        borderRadius: 10,
        height: 100,
    },
    selectedPaymentOption: {
        backgroundColor: 'grey',
    },
    paymentOptionLogo: {
        width: 50,
        height: 30,
        marginBottom: 10,
    },
    paymentOptionName: {
        color: 'black',
        fontWeight: 'bold',
    },
    paymentForm: {
        top:-110,
    },
    formTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 30,
        top:10


    },
    input: {
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 10,
        marginBottom: 10,
        padding: 10,
        top:20
    },
    payButton: {
        backgroundColor: '#1F5170',
        borderRadius: 10,
        padding: 15,
        alignItems: 'center',
        top:20
    },
    payButtonText: {
        color: 'white',
        fontWeight: 'bold',
    },
});

export default PaymentScreen;
