import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const NotificationScreen = () => {
    const [newNotifications, setNewNotifications] = useState([
        { id: '1', title: 'New Notification 1', info: 'Info for new notification 1 Info for new notification 1', time: '10:30 AM' },
        { id: '2', title: 'New Notification 2', info: 'Info for new notification 2', time: '11:45 AM' },
        { id: '3', title: 'New Notification 3', info: 'Info for new notification 1 Info for new notification 1', time: '10:30 AM' },
        // Add more new notifications as needed
    ]);

    const [oldNotifications, setOldNotifications] = useState([
        { id: '3', title: 'Old Notification 1', info: 'Info for old notification 1', time: 'Yesterday' },
        { id: '4', title: 'Old Notification 2', info: 'Info for old notification 2', time: '2 days ago' },
        // Add more old notifications as needed
    ]);

    const renderNotificationItem = ({ item }) => {
        return (
            <View style={styles.notificationItem}>
                <View style={styles.iconContainer}>
                    <Icon name="bell" size={24} color="white" />
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.title}>{item.title}</Text>
                    <Text style={styles.info}>{item.info}</Text>
                    <View style={styles.timeContainer}>
                        <Icon name="clock-o" size={16} color="gray" />
                        <Text style={styles.time}>{item.time}</Text>
                    </View>
                </View>


    </View>
        );
    };

    return (
        <View style={styles.container}>
            <Text style={styles.sectionHeader}>New Notifications</Text>
            <FlatList
                data={newNotifications}
                keyExtractor={(item) => item.id}
                renderItem={renderNotificationItem}
            />
            <Text style={styles.sectionHeader}>Old Notifications</Text>
            <FlatList
                data={oldNotifications}
                keyExtractor={(item) => item.id}
                renderItem={renderNotificationItem}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    sectionHeader: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
        color:'black'
    },
    notificationItem: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 20,
        borderRadius: 15, // Added border radius
        marginBottom: 20,
        backgroundColor: '#f1f1f1', // Added background color
        borderColor:'#fff',
        shadowColor: '#000',
        shadowOffset: { width: 1, height: 3 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
        elevation: 3,
    },
    iconContainer: {
        backgroundColor: 'blue',
        borderRadius: 25,
        padding: 10,
        marginRight: 10,
    },
    textContainer: {
        flex: 1,
        marginRight: 10,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        color:'black'
    },
    info: {
        fontSize: 16,
        color:'black',
    },
    time: {
        fontSize: 14,
        color: 'gray',
        marginLeft: 5,
    },
    timeContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',  // Align time to the right
        marginTop: 5,  // Add space between info and time
        right:190,
    },

});

export default NotificationScreen;
