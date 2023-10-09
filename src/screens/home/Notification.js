import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import Swipeable from 'react-native-swipeable';
import Icon from 'react-native-vector-icons/FontAwesome';
import {pixelNormalize} from "../../constants/Size";

const NotificationScreen = () => {
    const [newNotifications, setNewNotifications] = useState([
        { id: '1', title: 'New Notification 1', info: 'Info for new notification 1', time: '10:30 AM' },
        { id: '2', title: 'New Notification 2', info: 'Info for new notification 2', time: '11:45 AM' },
        { id: '3', title: 'New Notification 3', info: 'Info for new notification 3', time: '12:00 PM' },
        // Add more new notifications as needed
    ]);

    const [oldNotifications, setOldNotifications] = useState([
        { id: '4', title: 'Old Notification 1', info: 'Info for old notification 1', time: 'Yesterday' },
        { id: '5', title: 'Old Notification 2', info: 'Info for old notification 2', time: '2 days ago' },
        // Add more old notifications as needed
    ]);

    const renderNotificationItem = (item, index, isOld) => {
        const notificationItem = (
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

        const rightButtons = [
            <View style={styles.rightSwipeItem}>
                <Text>Delete</Text>
            </View>,
        ];

        return (
            <Swipeable rightButtons={rightButtons} onRightActionRelease={() => handleDeleteNotification(item.id, isOld)}>
                {notificationItem}
            </Swipeable>
        );
    };

    const handleDeleteNotification = (id, isOld) => {
        if (isOld) {
            setOldNotifications(oldNotifications.filter((item) => item.id !== id));
        } else {
            setNewNotifications(newNotifications.filter((item) => item.id !== id));
        }
    };

    return (
        <View style={styles.container}>
            {newNotifications.length > 0 && (
                <>
                    <Text style={styles.sectionHeader}>New Notifications</Text>
                    <FlatList
                        data={newNotifications}
                        keyExtractor={(item) => item.id}
                        renderItem={({ item, index }) => renderNotificationItem(item, index, false)}
                    />
                </>
            )}

            {oldNotifications.length > 0 && (
                <>
                    <Text style={styles.sectionHeader}>Old Notifications</Text>
                    <FlatList
                        data={oldNotifications}
                        keyExtractor={(item) => item.id}
                        renderItem={({ item, index }) => renderNotificationItem(item, index, true)}
                    />
                </>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: pixelNormalize(20),
    },
    notificationItem: {
        flexDirection: 'row',
        alignItems: 'center',
        padding:pixelNormalize(20),
        borderRadius: pixelNormalize(15),
        marginBottom:pixelNormalize(20),
        backgroundColor: '#f1f1f1',
        borderColor: '#fff',
        shadowColor: '#000',
        shadowOffset: { width: pixelNormalize(1), height: pixelNormalize(3) },
        shadowOpacity: pixelNormalize(0.2),
        shadowRadius: pixelNormalize(2),
        elevation: pixelNormalize(3),
    },
    sectionHeader: {
        fontSize: pixelNormalize(20),
        fontWeight: 'bold',
        marginBottom: pixelNormalize(15),
        color:'black'
    },
    iconContainer: {
        backgroundColor: 'blue',
        borderRadius: pixelNormalize(25),
        padding:pixelNormalize(10),
        marginRight:pixelNormalize(10),
    },
    textContainer: {
        flex: 1,
        marginRight: pixelNormalize(10),
    },
    title: {
        fontSize:pixelNormalize(18),
        fontWeight: 'bold',
        color: 'black',
    },
    info: {
        fontSize: pixelNormalize(16),
        color: 'black',
    },
    time: {
        fontSize: pixelNormalize(14),
        color: 'gray',
        marginLeft: pixelNormalize(5),
    },
    timeContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
        marginTop: pixelNormalize(5),
        right: pixelNormalize(190),
    },
    rightSwipeItem: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-end',
        paddingRight:pixelNormalize( 20),
        backgroundColor: 'navy',
        borderRadius:pixelNormalize(20),

    },
});

export default NotificationScreen;
