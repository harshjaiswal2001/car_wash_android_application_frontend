import React ,{useState,useEffect} from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity, Linking, FlatList, Modal,ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
//import {Picker} from '@react-native-picker/picker';
import { addDays, format } from 'date-fns';



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
                        source={require('../../assets/aaron-huber-8qYE6LGHW-c-unsplash.jpg')}
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
    editButton: {
        left: 350,
        marginRight:20,
        bottom:60

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
    bottomBorderOne: {
        borderBottomColor: 'grey',
        borderBottomWidth: 0.6,
        marginTop:-15,

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

    payNowButton: {
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
    payNowButtonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'flex-end',
    },
    modalContent: {
        backgroundColor: 'white',
        padding: 20,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    modalTitle: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 10,
        color:'black'
    },
    modalSubtitle: {
        fontSize: 18,
        fontWeight:'bold',
        marginBottom: 5,
        color:'navy',
        marginTop:10


    },
    modalClose: {
        fontSize: 18,
        color: 'blue',
        marginTop: 10,
        textAlign: 'right',
    },


    dateScrollView: {
        marginVertical: 10,
        borderRadius: 10,
        paddingHorizontal: 10,
        paddingVertical: 5,
        backgroundColor: '#F0F0F0',
    },
    date: {
        fontSize: 16,
        marginRight: 10,
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 10,
        backgroundColor: '#E0E0E0',
        color: 'black',
    },
    selectedDate: {
        fontSize: 16,
        marginRight: 10,
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 10,
        backgroundColor: 'navy',
        color: 'white',
    },
    timeSlotItem: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 5,
        padding: 10,
        borderRadius: 10,
        backgroundColor: '#E0E0E0',
        marginTop:10,
    },
    timeSlotText: {
        fontSize: 12,
        color: 'black',
    },
    dateScrollContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginHorizontal: 20,
        marginTop: 10,
    },



});

export default ConfirmationScreen;
