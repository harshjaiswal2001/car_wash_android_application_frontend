import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import OngoingBookingScreen from "./OngoingBooking";
import BookingHistoryScreen from "./BookingHistory";

const Tab = createMaterialTopTabNavigator();





const BookingScreen = () => {
    return (

        <Tab.Navigator
            tabBarOptions={{

                labelStyle: {
                    textTransform: 'none',
                    fontWeight: 'bold',
                    fontSize: 18,
                },
                activeTintColor: '#1F5170',
                inactiveTintColor: 'gray',
                    indicatorStyle: {
                        backgroundColor: '#1F5170',
                    },
                style: { backgroundColor: '#efefef' },

            }}
        >
            <Tab.Screen
                name="Ongoing"
                component={ OngoingBookingScreen }
                options={{ tabBarLabel: 'Ongoing booking' }}
            />
            <Tab.Screen
                name="History"
                component={BookingHistoryScreen}
                options={{ tabBarLabel: 'Booking history' }}
            />
        </Tab.Navigator>

    );
};

export default BookingScreen;
