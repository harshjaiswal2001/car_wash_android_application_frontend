import React from "react";
import {createStackNavigator} from "@react-navigation/stack";
import BookNowScreen from "../../screens/home/BookNow";
import DiscoverScreen from "../../screens/discover/Discover";
import DiscoverDirectionScreen from "../../screens/discover/DiscoverDirection";
//import BookNowStack from "./BookNowStack";


const Stack = createStackNavigator();


const HomeStack = () => {
    return (
        <Stack.Navigator initialRouteName= "DiscoverScreen">
            <Stack.Screen name="DiscoverScreen" component={DiscoverScreen} options={{headerShown:false}}/>
            <Stack.Screen name="BookNowScreen" component={BookNowScreen}  />
            <Stack.Screen name="DiscoverDirectionScreen" component={DiscoverDirectionScreen}  />






        </Stack.Navigator>
    );
};

export default HomeStack;
