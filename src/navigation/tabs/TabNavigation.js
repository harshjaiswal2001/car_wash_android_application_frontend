import React from 'react';
import {StyleSheet} from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import ProfileStack from '../stacks/ProfileStack';
import BookingStack from "../stacks/BookingStack";
import HomeStack from "../stacks/HomeStack";
import DiscoverStack from "../stacks/DiscoverStack";

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
    return (
        <NavigationContainer independent={true}>
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarStyle:styles.tabBarStyle,
                    headerShown:false,
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
                    activeTintColor: '#1F5170',
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
                    component={HomeStack}
                />
                <Tab.Screen
                    name="Discover"
                    component={DiscoverStack}
                />
                <Tab.Screen
                    name="Booking"
                    component={BookingStack}
                />
                <Tab.Screen
                    name="Profile"
                    component={ProfileStack}
                />
            </Tab.Navigator>
        </NavigationContainer>
    );
};

export default AppNavigator;

const styles = StyleSheet.create({
    tabBarStyle: {
        backgroundColor: '#ffffff', // Background color of the tab bar

        borderTopColor: 'gray', // Top border color
        height: 65, // Adjust the height of the tab bar
        padding: 5,

    },
});
