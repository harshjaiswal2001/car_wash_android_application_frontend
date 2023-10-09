import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MapView, { Marker, Polyline } from 'react-native-maps';
import {useNavigation} from "@react-navigation/native";

const GetDirectionScreen = () => {
    const navigation = useNavigation();
    const [region, setRegion] = useState({
        latitude: 21.1458, // Sample shop latitude
        longitude: 79.0882, // Sample shop longitude
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
    });

    const destination = {
        latitude: 21.1393, // Destination latitude
        longitude: 79.0829, // Destination longitude
    };

    return (
        <View style={styles.container}>
            <MapView style={styles.map} region={region}>
                <Marker coordinate={region} title="Sample Shop" />
                <Marker coordinate={destination} title="Destination" />
                <Polyline
                    coordinates={[
                        { latitude: region.latitude, longitude: region.longitude },
                        { latitude: destination.latitude, longitude: destination.longitude },
                    ]}
                    strokeWidth={3}
                    strokeColor="blue"
                />
            </MapView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    map: {
        flex: 1,
    },
});

export default GetDirectionScreen;
