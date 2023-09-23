import ProfileScreen from "../../screens/profile/Profile";
import HelpAndSupportScreen from "../../screens/profile/HelpAndSupport";
import TermsAndConditionScreen from "../../screens/profile/TermsAndCondition";
import PrivacyPolicyScreen from "../../screens/profile/PrivacyPolicy";
import LanguageScreen from "../../screens/profile/Language";
import MyAddressScreen from "../../screens/profile/Address";
import EditProfileScreen from "../../screens/profile/EditProfile";
import MyCarScreen from "../../screens/profile/MyCar";
import EditCarScreen from "../../screens/profile/EditCar";
import AddCarScreen from "../../screens/profile/AddCar";
import FavoriteScreen from "../../screens/profile/Favorite";
import GoDetailsScreen from "../../screens/booking/Details";
import React from "react";
import { createStackNavigator } from '@react-navigation/stack';


const Stack = createStackNavigator();

const ProfileStack = () => {
    return (
        <Stack.Navigator initialRouteName= "ProfileScreen">
            <Stack.Screen name="ProfileScreen" component={ProfileScreen} options={{ title: 'Profile', headerTitleAlign: "center", headerTitleStyle: { color: '#1F5170' },headerStyle: {backgroundColor:'#efefef'} }} />
            <Stack.Screen name="HelpAndSupport" component={HelpAndSupportScreen} options={{ title: 'Help and support', headerTitleStyle: { fontWeight: 'bold' } }} />
            <Stack.Screen name="TermsAndCondition" component={TermsAndConditionScreen} options={{ title: 'Terms and condition', headerTitleStyle: { fontWeight: 'bold' } }} />
            <Stack.Screen name="PrivacyPolicy" component={PrivacyPolicyScreen} options={{ title: 'Privacy Policy', headerTitleStyle: { fontWeight: 'bold' } }} />
            <Stack.Screen name="Language" component={LanguageScreen} options={{ title: 'Language', headerTitleStyle: { fontWeight: 'bold' } }} />
            <Stack.Screen name="Address" component={MyAddressScreen} options={{ title: 'My Address', headerTitleStyle: { fontWeight: 'bold' } }} />
            <Stack.Screen name="EditProfile" component={EditProfileScreen} options={{ title: 'Edit Profile', headerTitleStyle: { fontWeight: 'bold' } }} />
            <Stack.Screen name="MyCar" component={MyCarScreen} options={{ title: 'My car', headerTitleStyle: { fontWeight: 'bold' } }} />
            <Stack.Screen name="EditCar" component={EditCarScreen} options={{ title: 'Edit car details', headerTitleStyle: { fontWeight: 'bold' } }} />
            <Stack.Screen name="AddCar" component={AddCarScreen} options={{ title: 'Add new car', headerTitleStyle: { fontWeight: 'bold' } }} />
            <Stack.Screen name="Favorite" component={FavoriteScreen} options={{ title: 'Favorite', headerTitleStyle: { fontWeight: 'bold' } }} />
            <Stack.Screen name="GoDetailsScreen" component={GoDetailsScreen} />
        </Stack.Navigator>
    );
};

export default ProfileStack;


