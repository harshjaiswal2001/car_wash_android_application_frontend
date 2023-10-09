import React ,{useState}from 'react';
import { View, StyleSheet, TextInput, TouchableOpacity, Text, FlatList } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import Icon from 'react-native-vector-icons/Ionicons';
import {pixelNormalize} from "../../constants/Size";




const formatAddress = (address) => {
    // Split the address into lines with 4-5 words per line
    const words = address.split(' ');
    const lines = [];
    let line = '';

    for (const word of words) {
        if ((line + word).length <= 40) {
            line += word + ' ';
        } else {
            lines.push(line.trim());
            line = word + ' ';
        }
    }

    if (line.trim().length > 0) {
        lines.push(line.trim());
    }

    return lines.join('\n');
};


const AddAddressScreen = () => {
    // Sample location data
    const location = {
        latitude: 37.7749,
        longitude: -122.4194,
    };

    [selectedType, setSelectedType] = useState(''); // State to store the selected type

    const addressTypes = [
        { type: 'Home', icon: 'home' }, // Icon for home
        { type: 'Work', icon: 'briefcase' }, // Icon for work
        { type: 'Other', icon: 'ellipsis-horizontal' }, // Icon for other
    ];

    const renderAddressTypeButtons = () => {
        return addressTypes.map((item, index) => (
            <TouchableOpacity
                key={index}
                style={[
                    styles.addressTypeButton,
                    selectedType === item.type ? styles.selectedButton : null,
                ]}
                onPress={() => setSelectedType(item.type)}>
                <Icon name={item.icon} size={20} color={selectedType === item.type ? 'white' : 'grey'} />
                <Text style={[styles.addressTypeButtonText, selectedType === item.type ? styles.selectedText : null]}>
                    {item.type}
                </Text>
            </TouchableOpacity>
        ));
    };


    return (
        <View style={styles.container}>
            <MapView style={styles.map} initialRegion={{ ...location, latitudeDelta: 0.01, longitudeDelta: 0.01 }}>
                <Marker coordinate={location}>
                    <Icon name="location" size={40} color="#1F5170" />
                </Marker>
            </MapView>

            <View style={styles.contentContainer}>
                <View style={styles.searchBarContainer}>
                    <TextInput
                        style={styles.searchBar}
                        placeholder="Search location"
                        placeholderTextColor="gray"
                        onChangeText={(text) => {

                        }}
                    />
                </View>
            </View>

            <View style={styles.addressDetails}>
                {/* Sample location address */}
                <Text style={styles.header}>Pick this location</Text>
                <View style={styles.addressContainer}>
                    <View  style={styles.iconContainer}>
                        <Icon name="location" size={28} color="black" />
                    </View>
                    <Text style={styles.sampleAddress}>{formatAddress("1234 Home St, City, Country, 1234 Home St, City, Country")}</Text>
                </View>


                <View style={styles.addressTypeButtons}>{renderAddressTypeButtons()}</View>




                {/* Save address button */}
                <TouchableOpacity style={styles.saveButton}>
                    <Text style={styles.saveButtonText}>Save Address</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    searchBarContainer: {

        backgroundColor: 'white',
        borderRadius: pixelNormalize(10),
        padding: pixelNormalize(5),
        borderColor: '#fff',
        shadowColor: '#000',
        shadowOffset: { width: pixelNormalize(0), height:pixelNormalize( 2 )},
        shadowOpacity: pixelNormalize(0.3),
        shadowRadius: pixelNormalize(3),
        elevation: pixelNormalize(3),

    },
    searchBar: {
        fontSize:pixelNormalize(16),
    },
    map: {
        flex: 1,
        ...StyleSheet.absoluteFillObject
    },
    contentContainer: {
        position: 'absolute',
        top: pixelNormalize(0),
        left: pixelNormalize(0),
        right: pixelNormalize(0),
        padding: pixelNormalize(16),
        backgroundColor: 'transparent',
    },
    addressDetails: {
        padding: pixelNormalize(10),
        borderRadius:pixelNormalize(25),
        height:pixelNormalize(340),
        top:pixelNormalize(530),
        borderColor: '#fff',
        shadowColor: '#000',
        shadowOffset: { width: pixelNormalize(0), height:pixelNormalize( 2 )},
        shadowOpacity: pixelNormalize(0.3),
        shadowRadius: pixelNormalize(3),
        elevation: pixelNormalize(3),
        backgroundColor:'#efefef'


    },
    addressContainer:{
        backgroundColor: '#fff',
        borderColor: '#fff',
        shadowColor: '#000',
        shadowOffset: { width: pixelNormalize(0), height:pixelNormalize( 2 )},
        shadowOpacity: pixelNormalize(0.3),
        shadowRadius: pixelNormalize(3),
        elevation: pixelNormalize(3),
        borderRadius:pixelNormalize(10),
        padding:pixelNormalize(10),
        flexDirection:"row",
        margin:pixelNormalize(10),


    },
    sampleAddress: {
        fontSize: pixelNormalize(16),
        marginBottom: pixelNormalize(10),
        fontWeight:'bold',
        color:'black',
        letterSpacing:pixelNormalize(0.3),
        left:pixelNormalize(10)
    },
    header: {
        fontSize: pixelNormalize(18),
        marginBottom: pixelNormalize(14),
        fontWeight:'bold',
        margin:pixelNormalize(10)
    },
    addressItem: {
        marginBottom: pixelNormalize(10),
    },
    addressType: {
        fontWeight: 'bold',
        marginBottom: pixelNormalize(5),
    },
    address: {
        fontSize:pixelNormalize( 14),
    },
    saveButton: {
        backgroundColor: '#1F5170',
        padding: pixelNormalize(15),
        borderRadius: pixelNormalize(10),
        alignItems: 'center',
        top:pixelNormalize(10),
        margin:pixelNormalize(10)
    },
    saveButtonText: {
        color: 'white',
        fontSize: pixelNormalize(16),
        fontWeight: 'bold',
    },
    iconContainer:{
        flexDirection:'row',
        alignItems:'center',
        bottom:pixelNormalize(5)
    },

    addressTypeButtons: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: pixelNormalize(10),
    },
    addressTypeButton: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: pixelNormalize(15),
        paddingHorizontal: pixelNormalize(25),
        borderRadius: pixelNormalize(10),
        backgroundColor: 'white',
        borderColor: '#fff',
        shadowColor: '#000',
        shadowOffset: { width: pixelNormalize(0), height:pixelNormalize( 2 )},
        shadowOpacity: pixelNormalize(0.3),
        shadowRadius: pixelNormalize(3),
        elevation: pixelNormalize(3),
        margin:pixelNormalize(10),


    },
    addressTypeButtonText: {
        color: 'grey',
        fontWeight: 'bold',
        marginLeft:pixelNormalize(10),
    },
    selectedButton: {
        backgroundColor: '#1F5170',
        color:'white'
    },
    selectedText:{
        color:'white',
    }
});

export default AddAddressScreen;
