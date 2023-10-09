import React from 'react';
import { View, Text, StyleSheet, Pressable, ScrollView, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Carousel from '../components/Slider';
import ServiceStatus from '../components/ServiceStatus';
import Recommendation from '../components/Recommendation';
import LogoImage from '../../assets/super-shine-low-resolution-logo-color-on-transparent-background.png';
import ServiceCenter from "../components/ServiceCenter";
import RecommendationScreen from "../components/Recommendation";

const HomeScreen = ({navigation}) => {
  return (
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.logoContainer}>
            <Image source={LogoImage} style={styles.logo} />
            <View style={styles.addressContainer}>
              <Icon name="location-outline" size={20} color="grey" />
              <Text style={styles.addressText}>1234 Sample St, City,1234 Sample St, City, PIN</Text>
            </View>
          </View>

          <View style={styles.notificationContainer}>
            <Pressable
                style={styles.notificationButton}
                onPress={() => navigation.push('NotificationScreen')}>
              <Icon name="notifications-outline" size={28} color="#1F5170" />
            </Pressable>
          </View>
        </View>

        <ScrollView>
          <Carousel />
          <Text style={styles.serviceStatusText}>Service status</Text>
          <ServiceStatus />
          <View style={styles.recommendationHeader}>
            <Text style={styles.recommendationText}>Recommend for you</Text>
            <Pressable onPress={() => navigation.push('RecommendScreen')}>
              <Text style={styles.viewAllButton}>View All</Text>
            </Pressable>
          </View>
          <RecommendationScreen navigation={navigation}/>

          <View style={styles.serviceCenterHeader}>
            <Text style={styles.serviceCenterText}>Near by service centers</Text>
            <Pressable onPress={() => navigation.push('NearByServiceCenterScreen')}>
              <Text style={styles.viewAllButton}>View All</Text>
            </Pressable>
          </View>
            <ServiceCenter navigation={navigation}/>
            <View style={styles.innerContainer}/>


        </ScrollView>
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 5,
  },
  innerContainer:{
    flex:1,
    marginBottom:70
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 12,
    marginLeft:-10,
    top:-10
  },
  logo: {
    width: 230,
    height: 30,
    resizeMode: 'cover',
  },
  addressContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    top:35,
    right:230
  },
  addressText: {
    marginLeft: 5,
    fontSize: 15,
    padding:10
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
  notificationContainer: {
    padding:-1,
  },
  notificationButton: {
    padding: 10,
    left:-260,
    top:-10

  },
  serviceStatusText: {
    fontSize: 18,
    fontWeight: 'bold',
    padding: 10,
    marginBottom: -33,
    color: 'black',
    marginLeft: 4,
    top:-20
  },

  recommendationText: {
    fontSize: 18,
    fontWeight: 'bold',
    padding: 10,
    marginBottom: -33,
    color: 'black',
    marginLeft: 4,
    top:-17,
    margin:14,
    left:3

  },
  recommendationHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    marginTop: -30,
    marginBottom: -20,
    top:20,
    left:-7
  },
  viewAllButton: {
    color: '#1F5170',
  },
  serviceCenterHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    marginTop: -30,
    marginBottom: -30,
    top:40,
    left:-7,

  },
  serviceCenterText: {
    fontSize: 18,
    fontWeight: 'bold',
    padding: 10,
    marginBottom: -33,
    color: 'black',
    marginLeft: 4,
    top:-17,
    margin:12,
    left:3

  },

});

export default HomeScreen;
