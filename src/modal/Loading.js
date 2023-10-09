import React from 'react';
import { View, Text, ActivityIndicator, Modal, StyleSheet } from 'react-native';
import {pixelNormalize} from "../constants/Size";

const LoadingModal = ({ visible, text }) => {
    return (
        <Modal
            transparent={true}
            animationType="fade"
            visible={visible}
            onRequestClose={() => {}}
        >
            <View style={styles.modalContainer}>
                <View style={styles.modalContent}>
                    <ActivityIndicator size="large" color="#0000ff" />
                    <Text style={styles.modalText}>{text}</Text>
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
        backgroundColor: 'white',
        borderRadius: pixelNormalize(10),
        padding:pixelNormalize( 20),
        alignItems: 'center',
    },
    modalText: {
        marginTop: pixelNormalize(10),
        fontSize: pixelNormalize(18),
        fontWeight: 'bold',
    },
});

export default LoadingModal;
