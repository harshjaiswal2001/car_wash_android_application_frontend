import React from 'react';
import { View, Text } from 'react-native';
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
                activeTintColor: 'navy',
                inactiveTintColor: 'gray',
                    indicatorStyle: {
                        backgroundColor: 'navy',
                    },
            }}
        >
            <Tab.Screen
                name="Ongoing"
                component={OngoingBookingScreen}
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
