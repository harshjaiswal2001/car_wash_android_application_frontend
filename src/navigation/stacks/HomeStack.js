import React from "react";
import {createStackNavigator} from "@react-navigation/stack";
import HomeScreen from "../../screens/Home";
import NotificationScreen from "../../screens/Notification";
import BookNowScreen from "../../screens/BookNow";
import DirectionScreen from "../../screens/DirectionScreen";
import RecommendScreen from "../../screens/Recommend";
import NearByServiceCenterScreen from "../../screens/NearByServiceCenter";
import ReviewScreen from "../../screens/Reviews";
import RecommendationScreen from "../../components/Recommendation";
//import BookNowStack from "./BookNowStack";


const Stack = createStackNavigator();


const HomeStack = () => {
    return (
        <Stack.Navigator initialRouteName= "HomeScreen">
            <Stack.Screen name="HomeScreen" component={HomeScreen} options={{headerShown:false}}/>
            <Stack.Screen name="NotificationScreen" component={NotificationScreen} options={{title:'Notification',headerStyle: {backgroundColor:'#efefef'}}} />
            <Stack.Screen name="GetDirectionScreen" component={DirectionScreen} />
            <Stack.Screen name="RecommendScreen" component={RecommendScreen} options={{title:'Recommend for you',headerStyle: {backgroundColor:'#efefef'}}} />
            <Stack.Screen name="BookNowScreen" component={BookNowScreen} />
            <Stack.Screen name="NearByServiceCenterScreen" component={NearByServiceCenterScreen} options={{title:'Near by service center',headerStyle: {backgroundColor:'#efefef'}}} />
            <Stack.Screen name="ReviewScreen" component={ReviewScreen} options={{title:'Review',headerStyle: {backgroundColor:'#efefef'}}} />





        </Stack.Navigator>
    );
};

export default HomeStack;
