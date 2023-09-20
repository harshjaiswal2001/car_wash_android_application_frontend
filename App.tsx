import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AppNavigator from './src/navigation/TabNavigation';  // Adjust the path accordingly
import HelpAndSupportScreen from './src/screens/HelpAndSupport';
import ProfileScreen from './src/screens/Profile';
import PrivacyPolicyScreen from './src/screens/PrivacyPolicy';
import TermsAndConditionScreen from './src/screens/TermsAndCondition';
import LanguageScreen from './src/screens/Language';
import MyAddressScreen from './src/screens/Address';
import EditProfileScreen from './src/screens/EditProfile';
import MyCarScreen from './src/screens/MyCar';
import EditCarScreen from './src/screens/EditCar';
import AddCarScreen from './src/screens/Addcar';
import FavoriteScreen from './src/screens/Favorite';
import HomeScreen from "./src/screens/Home";
import GoHistoryDetailsScreen from "./src/screens/HistoryDetails";
import GoDetailsScreen from "./src/screens/Details";
import ReviewScreen from "./src/screens/Reviews";

const Stack = createStackNavigator();

const ProfileStack = () => {
  return (
      <Stack.Navigator initialRouteName= "Profile">
        <Stack.Screen name="Profile" component={ProfileScreen} options={{ title: 'Profile', headerTitleAlign: "center", headerTitleStyle: { color: '#1E90FF' } }} />
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

const MainStack = () => {
    return (
        <Stack.Navigator initialRouteName= "Tabs"
            screenOptions={{ headerShown: false }}
        >
            <Stack.Screen name="StartUp" component={HomeScreen} />
            <Stack.Screen name="Tabs" component={AppNavigator} />
            <Stack.Screen name="ProfileStack" component={ProfileStack} />
        </Stack.Navigator>
    );
};


const App = () => {
  return (
      // <NavigationContainer>
      //     <MainStack/>
      // </NavigationContainer>
      //<GoHistoryDetailsScreen/>
      <ReviewScreen/>

  );
};

export default App;
