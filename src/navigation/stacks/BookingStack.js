import BookingScreen from "../../screens/booking/Booking";
import React from "react";
import {createStackNavigator} from "@react-navigation/stack";

import GoHistoryDetailsScreen from "../../screens/booking/HistoryDetails";
import GoDetailsScreen from "../../screens/booking/Details";



const Stack = createStackNavigator();


const BookingStack = () => {
    return (
        <Stack.Navigator initialRouteName= "BookingScreen">
            <Stack.Screen name="BookingScreen" component={BookingScreen} options={{ title: 'Booking', headerTitleAlign: "center", headerTitleStyle: { color: '#1F5170' },headerStyle: {backgroundColor:'#efefef'} }} />
            <Stack.Screen name="BookingHistoryDetails" component={GoHistoryDetailsScreen} options={{title:'',headerStyle: {backgroundColor:'#efefef'}}} />
            <Stack.Screen name="BookingDetails" component={GoDetailsScreen} options={{title:'',headerStyle: {backgroundColor:'#efefef'} }} />
        </Stack.Navigator>
    );
};

export default BookingStack;
