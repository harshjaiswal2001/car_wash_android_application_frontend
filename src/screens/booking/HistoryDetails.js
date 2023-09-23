import React ,{useState} from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity, Linking, FlatList, Modal, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {pixelNormalize} from "../../constants/Size";



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
                        source={require('../../../assets/aaron-huber-8qYE6LGHW-c-unsplash.jpg')}
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
                            source={require('../../../assets/aaron-huber-8qYE6LGHW-c-unsplash.jpg')}
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
        margin:pixelNormalize(20),
        borderRadius: pixelNormalize(10),
        padding: pixelNormalize(6),
        backgroundColor: 'white',
        borderColor: '#fff',
        shadowColor: '#000',
        shadowOffset: { width: pixelNormalize(1), height:pixelNormalize( 3) },
        shadowOpacity:pixelNormalize(0.2),
        shadowRadius:pixelNormalize(2),
        elevation: pixelNormalize(3),
        position: 'relative',
    },
    shopImageContainer: {
        borderRadius: pixelNormalize(10),
        padding: pixelNormalize(8),
        overflow: 'hidden',
        marginLeft: pixelNormalize(-4),
        marginRight:pixelNormalize(-10),
    },
    shopImage: {
        width:pixelNormalize(110),
        height:pixelNormalize(100),
        borderRadius: pixelNormalize(10),
    },
    starContainer: {
        marginHorizontal:pixelNormalize(5),
    },

    shopDetailsContainer: {
        flex: 1,
        backgroundColor: '#fff',
        padding:pixelNormalize(10),
        borderRadius:pixelNormalize(20),
    },
    shopName: {
        fontSize:pixelNormalize(18),
        fontWeight: 'bold',
        marginBottom:pixelNormalize(5),
        color: 'black',
    },
    shopInfoRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom:pixelNormalize(3),
    },
    infoIcon: {
        marginRight:pixelNormalize(5),
    },
    shopInfo: {
        fontSize:pixelNormalize(13),
        color: 'black',
    },
    shopAddress: {
        fontSize:pixelNormalize(12),
        color: 'grey',
    },
    callButton: {
        position: 'absolute',
        bottom:pixelNormalize(40),
        right:pixelNormalize(12),
        width:pixelNormalize(45),
        height:pixelNormalize(45),
        borderRadius:pixelNormalize(23),
        backgroundColor: '#D3D3D3',
        justifyContent: 'center',
        alignItems: 'center',
    },
    secondContainer: {
        marginTop:pixelNormalize(10),
        marginLeft:pixelNormalize(20),
    },
    label: {
        fontSize:pixelNormalize(19),
        color: 'black',
        marginBottom:pixelNormalize(6),
        letterSpacing:pixelNormalize(0.2),
    },
    dateValue: {
        fontSize: pixelNormalize(16),
        color: 'gray',
        marginBottom: pixelNormalize(6),
        letterSpacing:pixelNormalize(0.4),
        justifyContent:"space-evenly"
    },

    timeValue: {
        fontSize:pixelNormalize(16),
        color: 'gray',
        marginBottom:pixelNormalize(20),
        letterSpacing:pixelNormalize(0.4),
    },
    bottomBorder: {
        borderBottomColor: 'grey',
        borderBottomWidth:pixelNormalize(0.6),
        marginTop:pixelNormalize(20),

    },
    thirdContainer: {
        marginTop:pixelNormalize(20),
        marginLeft:pixelNormalize(20),
        flexDirection:'row',
    },
    value: {
        fontSize: pixelNormalize(16),
        color: 'gray',
        marginBottom: pixelNormalize(6),
        letterSpacing:pixelNormalize(0.4),
        padding:pixelNormalize(3),
        left:pixelNormalize(180),
    },
    serviceItem: {
        flexDirection: 'row',
        justifyContent:'flex-end',
        alignItems: 'center',
        marginBottom:pixelNormalize(4),
        marginLeft:pixelNormalize(135),
    },
    serviceText: {
        fontSize:pixelNormalize(16),
        letterSpacing:pixelNormalize(0.4),
        color: 'grey',

    },
    priceText: {
        fontSize:pixelNormalize(16),
        letterSpacing: pixelNormalize(0.4),
        color: 'grey',
        fontWeight: 'bold',
        marginRight:pixelNormalize(10)
    },
    amount:{
        fontSize:pixelNormalize(19),
        color:"darkblue",
        letterSpacing:pixelNormalize(0.3),
        padding:pixelNormalize(4),
        fontWeight: 'bold',
        marginLeft:"auto",
        marginRight:pixelNormalize(10),

    },
    discountAmount: {
        fontSize: pixelNormalize(19),
        color: "darkblue",
        letterSpacing: pixelNormalize(0.3),
        padding:pixelNormalize(4),
        fontWeight: 'bold',
        marginLeft:'auto',
        marginRight:pixelNormalize(10),
    },

    ratingButton: {
        backgroundColor: 'navy',
        borderRadius:pixelNormalize(10),
        paddingVertical:pixelNormalize(12),
        alignItems: 'center',
        width: '100%',
        marginTop: 'auto',
        marginBottom:pixelNormalize(20),
        shadowColor: 'rgba(0, 0, 0, 0.2)',
        shadowOffset: { width: pixelNormalize(0), height:pixelNormalize(2) },
        shadowOpacity:pixelNormalize(1),
        shadowRadius:pixelNormalize(5),
        elevation: pixelNormalize(2),
    },
    ratingButtonText: {
        color: 'white',
        fontSize: pixelNormalize(18),
        fontWeight: 'bold',
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        borderRadius:pixelNormalize(20),
    },
    modalContent: {
        backgroundColor: 'white',
        padding:pixelNormalize(20),
        borderTopLeftRadius:pixelNormalize(20),
        borderTopRightRadius:pixelNormalize(20),
        borderRadius:pixelNormalize(20),
        alignItems:'center',
        justifyContent:'center'
    },
    modalHeaderText: {
        fontSize:pixelNormalize(22),
        marginBottom:pixelNormalize(10),
        color:'black',
        fontWeight:'bold',
    },
    modalTextFirst: {
        fontSize:pixelNormalize(24),
        color:'black',
        fontWeight:'bold'
    },

    modalText: {
        fontSize:pixelNormalize(18),
        marginBottom:pixelNormalize(5),
        fontWeight:'bold',
    },

    ratingContainer:{
        flexDirection:'row',
        marginBottom:pixelNormalize(12),
        marginTop:pixelNormalize(5),

    },

    modalInput: {

        borderColor: 'gray',
        borderRadius:pixelNormalize(10),
        padding:pixelNormalize(10),
        marginBottom:pixelNormalize(30),
        width: '100%',
        backgroundColor:'#F0F0F0',
        shadowColor: '#000',
        shadowOffset: { width:pixelNormalize(1), height:pixelNormalize(3) },
        shadowOpacity: pixelNormalize(0.2),
        shadowRadius: pixelNormalize(2),
        elevation: pixelNormalize(3),
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
        padding:pixelNormalize(15),
        borderRadius:pixelNormalize(10),
    },
    submitButton: {
        backgroundColor: 'navy',
        marginRight: pixelNormalize(10),
    },
    skipButton: {
        backgroundColor: 'lightgray',
        marginLeft:pixelNormalize(10),
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: pixelNormalize(18),
    },

    modalImage: {
        width:pixelNormalize(80),
        height: pixelNormalize(80),
        borderRadius: pixelNormalize(40),
        resizeMode:'cover',
    },

});

export default GoHistoryDetailsScreen;
