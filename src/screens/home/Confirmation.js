import React ,{useState,useEffect} from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity, Linking, FlatList, Modal,ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
//import {Picker} from '@react-native-picker/picker';
import { addDays, format } from 'date-fns';
import {pixelNormalize} from "../../constants/Size";



const servicesData = [
    { service: 'Service 1', price: '($50)' },
    { service: 'Service 2', price: '($70)' },
    { service: 'Interior Cleaning', price: '($90)' },

];

const ServiceListItem = ({ service, price }) => (
    <View style={styles.serviceItem}>
        <Text style={styles.serviceText}>{service}</Text>
        <Text style={styles.priceText}>{price}</Text>
    </View>
);

const generateDateOptions = () => {
    const dateOptions = [];
    const currentDate = new Date();
    for (let i = 0; i < 365; i++) {
        const date = addDays(currentDate, i);
        const formattedDate = format(date, 'MMM d yyyy');
        dateOptions.push({ label: formattedDate, value: formattedDate });
    }
    return dateOptions;
};


const generateTimeSlots = () => {
    const timeSlots = [];
    for (let hour = 9; hour < 21; hour++) {
        const startTime = `${hour.toString().padStart(2, '0')}:00`;
        const endTime = `${(hour + 1).toString().padStart(2, '0')}:00`;
        const timeLabel = `${hour} ${hour < 12 ? 'AM' : 'PM'} - ${(hour + 1) % 12} ${(hour + 1) < 12 ? 'AM' : 'PM'}`;
        timeSlots.push({ label: timeLabel, value: `${startTime}-${endTime}` });
    }
    return timeSlots;
};

const TimeSlotItem = ({ timeSlot, onPress }) => {
    return (
        <TouchableOpacity style={styles.timeSlotItem} onPress={() => onPress(timeSlot.value)}>
            <Text style={styles.timeSlotText}>{timeSlot.label}</Text>
        </TouchableOpacity>
    );
};


const ConfirmationScreen = () => {


    const [isModalVisible, setModalVisible] = useState(false);
    const [selectedDate, setSelectedDate] = useState('Select Date');
    const [selectedTime, setSelectedTime] = useState('Select Time');
    const dateOptions = generateDateOptions();
    const timeSlots = generateTimeSlots();
    const [dateIndex, setDateIndex] = useState(0);

    const scrollDateLeft = () => {
        if (dateIndex > 0) {
            setDateIndex(dateIndex - 1);
        }
    };

    const scrollDateRight = () => {
        if (dateIndex < dateOptions.length - 1) {
            setDateIndex(dateIndex + 1);
        }
    };

    // Update selected date based on the date index
    useEffect(() => {
        setSelectedDate(dateOptions[dateIndex].label);
    }, [dateIndex, dateOptions]);


    const handleTimeSlotPress = (time) => {
        setSelectedTime(time);
    };


    const handleEdit = () => {
        setModalVisible(true);
    };

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };

    const handleTimeChange = (time) => {
        setSelectedTime(time);
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
                < TouchableOpacity style={styles.editButton}  onPress={handleEdit}>
                <Icon name="pencil" size={24} color="navy" />
                </TouchableOpacity>
            <View style={styles.bottomBorderOne} />

            <Modal visible={isModalVisible} transparent animationType="slide">
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <Text style={styles.modalTitle}>Edit Service Details</Text>

                        <Text style={styles.modalSubtitle}>Select Date:</Text>



                        <View style={styles.dateScrollContainer}>
                            <TouchableOpacity onPress={scrollDateLeft}>
                                <Icon name="chevron-left" size={30} color="black" />
                            </TouchableOpacity>
                            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                                {dateOptions.map((option, index) => (
                                    <TouchableOpacity
                                        key={option.value}
                                        onPress={() => setDateIndex(index)} // Update the date index
                                    >
                                        <Text
                                            style={
                                                dateIndex === index ? styles.selectedDate : styles.date
                                            }>
                                            {option.label}
                                        </Text>
                                    </TouchableOpacity>
                                ))}
                            </ScrollView>
                            <TouchableOpacity onPress={scrollDateRight}>
                                <Icon name="chevron-right" size={30} color="black" />
                            </TouchableOpacity>
                        </View>

                        <Text style={styles.modalSubtitle}>Select Time:</Text>
                        <FlatList
                            data={timeSlots}
                            numColumns={3}
                            keyExtractor={(item) => item.label}
                            renderItem={({ item }) => (
                                <TimeSlotItem timeSlot={item} onPress={handleTimeSlotPress} />
                            )}
                        />

                        <TouchableOpacity onPress={() => setModalVisible(false)}>
                        <Text style={styles.modalClose}>Close</Text>
                    </TouchableOpacity>
                </View>
        </View>
</Modal>




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
                style={styles.payNowButton}
            >
                <Text style={styles.payNowButtonText}>Pay now ($300)</Text>
            </TouchableOpacity>



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
        margin: pixelNormalize(20),
        borderRadius: pixelNormalize(10),
        padding: pixelNormalize(6),
        backgroundColor: 'white',
        borderColor: '#fff',
        shadowColor: '#000',
        shadowOffset: { width: pixelNormalize(1), height: pixelNormalize(3) },
        shadowOpacity: pixelNormalize(0.2),
        shadowRadius: pixelNormalize(2),
        elevation: pixelNormalize(3),
        position: 'relative',
    },
    editButton: {
        left: pixelNormalize(350),
        marginRight:pixelNormalize(20),
        bottom:pixelNormalize(60)

    },
    shopImageContainer: {
        borderRadius: pixelNormalize(10),
        padding: pixelNormalize(8),
        overflow: 'hidden',
        marginLeft: pixelNormalize(-4),
        marginRight: pixelNormalize(-10),
    },
    shopImage: {
        width: pixelNormalize(110),
        height: pixelNormalize(100),
        borderRadius: pixelNormalize(10),
    },
    shopDetailsContainer: {
        flex: 1,
        backgroundColor: '#fff',
        padding: pixelNormalize(10),
        borderRadius: pixelNormalize(20),
    },
    shopName: {
        fontSize: pixelNormalize(18),
        fontWeight: 'bold',
        marginBottom: pixelNormalize(5),
        color: 'black',
    },
    shopInfoRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: pixelNormalize(3),
    },
    infoIcon: {
        marginRight: pixelNormalize(5),
    },
    shopInfo: {
        fontSize: pixelNormalize(13),
        color: 'black',
    },
    shopAddress: {
        fontSize: pixelNormalize(12),
        color: 'grey',
    },
    callButton: {
        position: 'absolute',
        bottom: pixelNormalize(40),
        right: pixelNormalize(12),
        width: pixelNormalize(45),
        height: pixelNormalize(45),
        borderRadius: pixelNormalize(23),
        backgroundColor: '#D3D3D3',
        justifyContent: 'center',
        alignItems: 'center',
    },
    secondContainer: {
        marginTop: pixelNormalize(10),
        marginLeft:pixelNormalize(20),
    },
    label: {
        fontSize: pixelNormalize(19),
        color: 'black',
        marginBottom: pixelNormalize(6),
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
        fontSize: pixelNormalize(16),
        color: 'gray',
        marginBottom: pixelNormalize(20),
        letterSpacing:pixelNormalize(0.4),
    },
    bottomBorder: {
        borderBottomColor: 'grey',
        borderBottomWidth: pixelNormalize(0.6),
        marginTop:pixelNormalize(20),

    },
    bottomBorderOne: {
        borderBottomColor: 'grey',
        borderBottomWidth: pixelNormalize(0.6),
        marginTop:pixelNormalize(-15),

    },
    thirdContainer: {
        marginTop: pixelNormalize(20),
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
        marginBottom: pixelNormalize(4),
        marginLeft:pixelNormalize(135),
    },
    serviceText: {
        fontSize: pixelNormalize(16),
        letterSpacing: pixelNormalize(0.4),
        color: 'grey',

    },
    priceText: {
        fontSize: pixelNormalize(16),
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
        padding: pixelNormalize(4),
        fontWeight: 'bold',
        marginLeft:'auto',
        marginRight:pixelNormalize(10),
    },

    payNowButton: {
        backgroundColor: 'navy',
        borderRadius: pixelNormalize(10),
        paddingVertical: pixelNormalize(12),
        alignItems: 'center',
        width: '100%',
        marginTop: 'auto',
        marginBottom: pixelNormalize(20),
        shadowColor: 'rgba(0, 0, 0, 0.2)',
        shadowOffset: { width: pixelNormalize(0), height: pixelNormalize(2)},
        shadowOpacity: pixelNormalize(1),
        shadowRadius: pixelNormalize(5),
        elevation: pixelNormalize(2),
    },
    payNowButtonText: {
        color: 'white',
        fontSize: pixelNormalize(18),
        fontWeight: 'bold',
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'flex-end',
    },
    modalContent: {
        backgroundColor: 'white',
        padding: pixelNormalize(20),
        borderTopLeftRadius: pixelNormalize(20),
        borderTopRightRadius:pixelNormalize(20),
    },
    modalTitle: {
        fontSize: pixelNormalize(22),
        fontWeight: 'bold',
        marginBottom: pixelNormalize(10),
        color:'black'
    },
    modalSubtitle: {
        fontSize: pixelNormalize(18),
        fontWeight:'bold',
        marginBottom: pixelNormalize(5),
        color:'navy',
        marginTop:pixelNormalize(10)


    },
    modalClose: {
        fontSize: pixelNormalize(18),
        color: 'blue',
        marginTop:pixelNormalize(10),
        textAlign: 'right',
    },


    dateScrollView: {
        marginVertical: pixelNormalize(10),
        borderRadius: pixelNormalize(10),
        paddingHorizontal: pixelNormalize(10),
        paddingVertical:pixelNormalize( 5),
        backgroundColor: '#F0F0F0',
    },
    date: {
        fontSize: pixelNormalize(16),
        marginRight: pixelNormalize(10),
        paddingVertical: pixelNormalize(5),
        paddingHorizontal: pixelNormalize(10),
        borderRadius: pixelNormalize(10),
        backgroundColor: '#E0E0E0',
        color: 'black',
    },
    selectedDate: {
        fontSize:pixelNormalize(16),
        marginRight: pixelNormalize(10),
        paddingVertical: pixelNormalize(5),
        paddingHorizontal: pixelNormalize(10),
        borderRadius: pixelNormalize(10),
        backgroundColor: 'navy',
        color: 'white',
    },
    timeSlotItem: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        margin: pixelNormalize(5),
        padding: pixelNormalize(10),
        borderRadius: pixelNormalize(10),
        backgroundColor: '#E0E0E0',
        marginTop:pixelNormalize(10),
    },
    timeSlotText: {
        fontSize: pixelNormalize(12),
        color: 'black',
    },
    dateScrollContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginHorizontal: pixelNormalize(20),
        marginTop: pixelNormalize(10),
    },



});

export default ConfirmationScreen;
