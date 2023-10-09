import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import AppNavigator from './src/navigation/tabs/TabNavigation';  // Adjust the path accordingly
// import HelpAndSupportScreen from './src/screens/HelpAndSupport';
// import ProfileScreen from './src/screens/Profile';
// import PrivacyPolicyScreen from './src/screens/PrivacyPolicy';
// import TermsAndConditionScreen from './src/screens/TermsAndCondition';
// import LanguageScreen from './src/screens/Language';
// import MyAddressScreen from './src/screens/Address';
// import EditProfileScreen from './src/screens/EditProfile';
// import MyCarScreen from './src/screens/MyCar';
// import EditCarScreen from './src/screens/EditCar';
// import AddCarScreen from './src/screens/AddCar';
// import FavoriteScreen from './src/screens/Favorite';
// import HomeScreen from "./src/screens/Home";
import GoHistoryDetailsScreen from "./src/screens/booking/HistoryDetails";
import GoDetailsScreen from "./src/screens/booking/Details";
import ReviewScreen from "./src/screens/Reviews";
import NotificationScreen from "./src/screens/Notification";
import ConfirmationScreen from "./src/screens/Confirmation";
import BookNow from "./src/screens/BookNow";
import BookNowScreen from "./src/screens/BookNow";
import CarouselScreen from "./src/components/Carousel";
import {ta} from "date-fns/locale";
import TabNavigation from "./src/navigation/tabs/TabNavigation";
import BookingScreen from "./src/screens/booking/booking";
import Details from "./src/screens/booking/Details";
import DiscoverScreen from "./src/screens/Discover";
import GetDirectionScreen from "./src/screens/DirectionScreen";
import MapScreen from "./src/screens/DirectionScreen";






const App = () => {
  return (
        // <NavigationContainer>
              <AppNavigator/>
    //  <BookNowScreen/>
      //<MapScreen/>
      //  <GoHistoryDetailsScreen/>
     // <GoDetailsScreen/>
    //<MainStack/>
     // <ReviewScreen/>
    //  <GoHistoryDetailsScreen/>
    //<NotificationScreen/>
     // <ConfirmationScreen/>
     //<BookNowScreen/>
    //<BookingScreen/>
      //<ConfirmationScreen/>
      //<DiscoverScreen/>
  );
};

export default App;
