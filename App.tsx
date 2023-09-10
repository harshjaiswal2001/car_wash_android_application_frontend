import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HelpAndSupportScreen from './screens/HelpAndSupport';
import ProfileScreen from "./screens/Profile";
import PrivacyPolicyScreen from './screens/PrivacyPolicy';
import TermsAndConditionScreen from './screens/TermsAndCondition'
import LanguageScreen from "./screens/Language";
import MyAddressScreen from "./screens/Address";
import EditProfileScreen from "./screens/EditProfile";
import MyCarScreen from './screens/MyCar';
import EditCarScreen from "./screens/EditCar";
import AddCarScreen from "./screens/Addcar";

const Stack = createStackNavigator();

const App = () => {
  return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Profile">
          <Stack.Screen name="Profile" component={ProfileScreen} options={{ title: 'Profile' ,headerTitleAlign:"center",headerTitleStyle:{color:'#1E90FF'}}} />
          <Stack.Screen name="HelpAndSupport" component={HelpAndSupportScreen} options={{ title: 'Help and support', headerTitleStyle: { fontWeight: 'bold' } }} />
          <Stack.Screen name="TermsAndCondition" component={TermsAndConditionScreen} options={{ title: 'Terms and condition', headerTitleStyle: { fontWeight: 'bold' } }} />
          <Stack.Screen name="PrivacyPolicy" component={PrivacyPolicyScreen} options={{ title: 'Privacy Policy', headerTitleStyle:{fontWeight: 'bold'} }} />
          <Stack.Screen name="Language" component={LanguageScreen} options={{ title: 'Language', headerTitleStyle:{fontWeight: 'bold'} }} />
            <Stack.Screen name="Address" component={MyAddressScreen} options={{ title: 'My Address', headerTitleStyle:{fontWeight: 'bold'} }} />
            <Stack.Screen name="EditProfile" component={EditProfileScreen} options={{ title: 'Edit Profile', headerTitleStyle:{fontWeight: 'bold'} }} />
            <Stack.Screen name="MyCar" component={MyCarScreen} options={{ title: 'My car', headerTitleStyle:{fontWeight: 'bold'} }} />
            <Stack.Screen name="EditCar" component={EditCarScreen} options={{ title: 'Edit car details', headerTitleStyle:{fontWeight: 'bold'} }} />
            <Stack.Screen name="AddCar" component={AddCarScreen} options={{ title: 'Add new car', headerTitleStyle:{fontWeight: 'bold'} }} />
        </Stack.Navigator>
      </NavigationContainer>
  );
};

export default App;
