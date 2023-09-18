import React ,{useState} from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity, Linking, FlatList, Modal, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';



const servicesData = [
    { service: 'Service 1', price: '($50)' },
    { service: 'Service 2', price: '($70)' },
    { service: 'Interior Cleaning', price: '($90)' },
    // Add more services as needed
];

const ServiceListItem = ({ service, price }) => (
    <View style={styles.serviceItem}>
        <Text style={styles.serviceText}>{service}</Text>
        <Text style={styles.priceText}>{price}</Text>
    </View>
);

const Rating = ({ rating, onRate }) => {
    const stars = [1, 2, 3, 4, 5];

    return (
        <View style={styles.ratingContainer}>
            {stars.map((star) => (
                <TouchableOpacity key={star} onPress={() => onRate(star)} style={styles.starContainer}>
                    <Icon
                        name={star <= rating ? 'star' : 'star-o'}
                        size={34}
                        color={star <= rating ? 'gold' : 'gray'}
                    />
                </TouchableOpacity>
            ))}
        </View>
    );
};

const GoHistoryDetailsScreen = () => {

    const [isModalVisible, setModalVisible] = useState(false);
    const [userRating, setUserRating] = useState(0);


    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };

    const handleRate = (rating) => {
        setUserRating(rating);
    };


    const handleCallShop = () => {
        const phoneNumber = 'tel:+91 2434567890'; // Replace with the actual phone number
        Linking.openURL(phoneNumber);
    };

    return (
        <View style={styles.container}>
            <View style={styles.detailContainer}>
                <View style={styles.shopImageContainer}>
                    <Image
                        source={require('../assets/aaron-huber-8qYE6LGHW-c-unsplash.jpg')}
                        style={styles.shopImage}
                    />
                </View>

                <View style={styles.shopDetailsContainer}>
                    <Text style={styles.shopName}>Sample Shop Name</Text>

                    <View style={styles.shopInfoRow}>
                        <Icon name="clock-o" size={16} color="grey" style={styles.infoIcon} />
                        <Text style={styles.shopInfo}>9:00 AM - 6:00 PM</Text>
                    </View>

                    <View style={styles.shopInfoRow}>
                        <Icon name="map-marker" size={16} color="grey" style={styles.infoIcon} />
                        <Text style={styles.shopInfo}>1.2 miles away</Text>
                    </View>

                    <Text style={styles.shopAddress} numberOfLines={2} ellipsizeMode="tail">
                        123 Main St, City, Country
                    </Text>
                </View>

                {/* Circular call icon button */}
                <TouchableOpacity onPress={handleCallShop} style={styles.callButton}>
                    <Icon name="phone" size={22} color="navy" />
                </TouchableOpacity>
            </View>
            <View style={styles.secondContainer}>
                <Text style={styles.label}>Car service date and time</Text>
                <Text style={styles.dateValue}>June 30 2023, Monday</Text>
                <Text style={styles.timeValue}>10:00 AM to 11:00 AM</Text>
            </View>
            <View style={styles.bottomBorder} />

            <View style={styles.thirdContainer}>
                <Text style={styles.label}>Car type</Text>
                <Text style={styles.value}>Mercedes-Benz</Text>

            </View>
            <View style={styles.bottomBorder} />

            <View style={styles.thirdContainer}>
                <Text style={styles.label}>Services</Text>
                <FlatList
                    data={servicesData}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item }) => <ServiceListItem service={item.service} price={item.price} />}
                />
            </View>
            <View style={styles.bottomBorder} />
            <View style={styles.thirdContainer}>

                <Text style={styles.label}>Service charge </Text>
                <Text style={styles.amount}>$350</Text>

            </View>

            <View style={styles.thirdContainer}>

                <Text style={styles.label}>Discount </Text>
                <Text style={styles.discountAmount}>-$50</Text>

            </View>
            <View style={styles.thirdContainer}>

                <Text style={styles.label}>Total payment </Text>
                <Text style={styles.amount}>$300</Text>

            </View>

            <TouchableOpacity
                style={styles.ratingButton}
                onPress={toggleModal}
            >
                <Text style={styles.ratingButtonText}>Give rate</Text>
            </TouchableOpacity>

            <Modal
                animationType="slide"
                transparent={true}
                visible={isModalVisible}
                onRequestClose={() => {
                    setModalVisible(!isModalVisible);
                }}
            >
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <Text style={styles.modalHeaderText}>How was the experience?</Text>
                        <Image
                            source={require('../assets/aaron-huber-8qYE6LGHW-c-unsplash.jpg')}
                            style={styles.modalImage}
                        />

                        {/* Car company name */}
                        <Text style={styles.modalTextFirst}>Relax car shop</Text>

                        {/* Rating */}
                        <Text style={styles.modalText}>Service provider</Text>

                        <View style={styles.ratingContainer}>
                        <Rating rating={userRating} onRate={handleRate}/>
                        </View>

                        <TextInput
                            style={styles.modalInput}
                            multiline={true}
                            numberOfLines={10}
                            placeholder="Write your review"
                        />

                        {/* Submit and Skip buttons */}
                        <View style={styles.modalButtonsContainer}>
                            <TouchableOpacity
                                style={[styles.modalButton, styles.submitButton]}
                                onPress={() => {
                                    // Implement your submit functionality here
                                    setModalVisible(!isModalVisible);
                                }}
                            >
                                <Text style={styles.buttonText}>Submit</Text>
                            </TouchableOpacity>

                            <TouchableOpacity
                                style={[styles.modalButton, styles.skipButton]}
                                onPress={toggleModal}
                            >
                                <Text style={styles.buttonText}>Skip</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>


        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F0F0F0',
    },
    detailContainer: {
        flexDirection: 'row',
        margin: 20,
        borderRadius: 10,
        padding: 6,
        backgroundColor: 'white',
        borderColor: '#fff',
        shadowColor: '#000',
        shadowOffset: { width: 1, height: 3 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
        elevation: 3,
        position: 'relative',
    },
    shopImageContainer: {
        borderRadius: 10,
        padding: 8,
        overflow: 'hidden',
        marginLeft: -4,
        marginRight: -10,
    },
    shopImage: {
        width: 110,
        height: 100,
        borderRadius: 10,
    },
    starContainer: {
        marginHorizontal: 5,  // Adjust this value to increase/decrease space between stars
    },

    shopDetailsContainer: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 10,
        borderRadius: 20,
    },
    shopName: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5,
        color: 'black',
    },
    shopInfoRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 3,
    },
    infoIcon: {
        marginRight: 5,
    },
    shopInfo: {
        fontSize: 13,
        color: 'black',
    },
    shopAddress: {
        fontSize: 12,
        color: 'grey',
    },
    callButton: {
        position: 'absolute',
        bottom: 40,
        right: 12,
        width: 45,
        height: 45,
        borderRadius: 23,
        backgroundColor: '#D3D3D3',
        justifyContent: 'center',
        alignItems: 'center',
    },
    secondContainer: {
        marginTop: 10,
        marginLeft:20,
    },
    label: {
        fontSize: 19,
        color: 'black',
        marginBottom: 6,
        letterSpacing:0.2,
    },
    dateValue: {
        fontSize: 16,
        color: 'gray',
        marginBottom: 6,
        letterSpacing:0.4,
        justifyContent:"space-evenly"
    },

    timeValue: {
        fontSize: 16,
        color: 'gray',
        marginBottom: 20,
        letterSpacing:0.4,
    },
    bottomBorder: {
        borderBottomColor: 'grey',
        borderBottomWidth: 0.6,
        marginTop:20,

    },
    thirdContainer: {
        marginTop: 20,
        marginLeft:20,
        flexDirection:'row',
    },
    value: {
        fontSize: 16,
        color: 'gray',
        marginBottom: 6,
        letterSpacing:0.4,
        padding:3,
        left:180,
    },
    serviceItem: {
        flexDirection: 'row',
        justifyContent:'flex-end',
        alignItems: 'center',
        marginBottom: 4,
        marginLeft:135,
    },
    serviceText: {
        fontSize: 16,
        letterSpacing: 0.4,
        color: 'grey',

    },
    priceText: {
        fontSize: 16,
        letterSpacing: 0.4,
        color: 'grey',
        fontWeight: 'bold',
        marginRight:10
    },
    amount:{
        fontSize:19,
        color:"darkblue",
        letterSpacing:0.3,
        padding:4,
        fontWeight: 'bold',
        marginLeft:"auto",
        marginRight:10,

    },
    discountAmount: {
        fontSize: 19,
        color: "darkblue",
        letterSpacing: 0.3,
        padding: 4,
        fontWeight: 'bold',
        marginLeft:'auto',
        marginRight:10,
    },

    ratingButton: {
        backgroundColor: 'navy',
        borderRadius: 10,
        paddingVertical: 12,
        alignItems: 'center',
        width: '100%',
        marginTop: 'auto',
        marginBottom: 20,
        shadowColor: 'rgba(0, 0, 0, 0.2)',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 1,
        shadowRadius: 5,
        elevation: 2,
    },
    ratingButtonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        borderRadius:20,
    },
    modalContent: {
        backgroundColor: 'white',
        padding: 20,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        borderRadius:20,
        alignItems:'center',
        justifyContent:'center'
    },
    modalHeaderText: {
        fontSize: 22,
        marginBottom: 10,
        color:'black',
        fontWeight:'bold',
    },
    modalTextFirst: {
        fontSize: 24,
        color:'black',
        fontWeight:'bold'
    },

    modalText: {
        fontSize: 18,
        marginBottom: 5,
        fontWeight:'bold',
    },

    ratingContainer:{
        flexDirection:'row',
        marginBottom:12,
        marginTop:5,

    },

    modalInput: {

        borderColor: 'gray',
        borderRadius: 10,
        padding: 10,
        marginBottom: 30,
        width: '100%',
        backgroundColor:'#F0F0F0',
        shadowColor: '#000',
        shadowOffset: { width: 1, height: 3 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
        elevation: 3,
        textAlign:'left',
        textAlignVertical:'top'

    },
    modalButtonsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    modalButton: {
        flex: 1,
        alignItems: 'center',
        padding: 15,
        borderRadius: 10,
    },
    submitButton: {
        backgroundColor: 'navy',
        marginRight: 10,
    },
    skipButton: {
        backgroundColor: 'lightgray',
        marginLeft: 10,
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 18,
    },

    modalImage: {
        width: 80,
        height: 80,
        borderRadius: 40,
        resizeMode:'cover',
    },

});

export default GoHistoryDetailsScreen;
