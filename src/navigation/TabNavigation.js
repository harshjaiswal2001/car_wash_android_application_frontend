import React from 'react';
import {StyleSheet} from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/Home';
import DiscoverScreen from '../screens/Discover';
import BookingScreen from '../screens/Booking';
import ProfileScreen from '../screens/Profile';
import Icon from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
    return (
        <NavigationContainer independent={true}>
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarStyle:styles.tabBarStyle,
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName;

                        if (route.name === 'Home') {
                            iconName = focused ? 'home' : 'home-outline';
                        } else if (route.name === 'Discover') {
                            iconName = focused ? 'location' : 'location-outline';
                        } else if (route.name === 'Booking') {
                            iconName = focused ? 'calendar' : 'calendar-outline';
                        } else if (route.name === 'Profile') {
                            iconName = focused ? 'person' : 'person-outline';
                        }

                        // Return the Ionicons component with the appropriate name and size
                        return <Icon name={iconName} size={size} color={color} />;
                    },


                })}
                tabBarOptions={{
                    activeTintColor: 'navy',
                    inactiveTintColor: 'gray',

                        labelStyle: {
                            fontSize: 16, // Font size of the tab labels

                    },
                    tabStyle: {
                        justifyContent: 'center', // Align the icons and labels to the center
                    },
                }}


            >
                <Tab.Screen
                    name="Home"
                    component={HomeScreen}
                />
                <Tab.Screen
                    name="Discover"
                    component={DiscoverScreen}
                />
                <Tab.Screen
                    name="Booking"
                    component={BookingScreen}
                />
                <Tab.Screen
                    name="Profile"
                    component={ProfileScreen}
                />
            </Tab.Navigator>
        </NavigationContainer>
    );
};

export default AppNavigator;

const styles = StyleSheet.create({
    tabBarStyle: {
        backgroundColor: '#ffffff', // Background color of the tab bar
        borderTopWidth: 1, // Top border thickness
        borderTopColor: 'gray', // Top border color
        height: 65, // Adjust the height of the tab bar
        padding: 5,
    },
});
