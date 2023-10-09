import React from 'react';
import { View, Text, StyleSheet, Pressable, ScrollView, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Carousel from '../components/Slider';
import ServiceStatus from '../components/ServiceStatus';
import Recommendation from '../components/Recommendation';
import LogoImage from '../../assets/super-shine-low-resolution-logo-color-on-transparent-background.png';
import ServiceCenter from "../components/ServiceCenter";
import RecommendationScreen from "../components/Recommendation";
import {pixelNormalize} from "../constants/Size";

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
    paddingHorizontal:pixelNormalize(5),
  },
  innerContainer:{
    flex:1,
    marginBottom:pixelNormalize(70)
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: pixelNormalize(12),
    marginLeft:pixelNormalize(-10),
    top:pixelNormalize(-10)
  },
  logo: {
    width: pixelNormalize(230),
    height: pixelNormalize(30),
    resizeMode: 'cover',
  },
  addressContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    top:pixelNormalize(35),
    right:pixelNormalize(230)
  },
  addressText: {
    marginLeft:pixelNormalize( 5),
    fontSize: pixelNormalize(15),
    padding:pixelNormalize(10)
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: pixelNormalize(10),
  },
  notificationContainer: {
    padding:pixelNormalize(-1),
  },
  notificationButton: {
    padding:pixelNormalize(10),
    left:pixelNormalize(-260),
    top:pixelNormalize(-10)

  },
  serviceStatusText: {
    fontSize: pixelNormalize(18),
    fontWeight: 'bold',
    padding: pixelNormalize(10),
    marginBottom:pixelNormalize(-33),
    color: 'black',
    marginLeft:pixelNormalize(4),
    top:pixelNormalize(-20)
  },

  recommendationText: {
    fontSize: pixelNormalize(18),
    fontWeight: 'bold',
    padding: pixelNormalize(10),
    marginBottom:pixelNormalize(-33),
    color: 'black',
    marginLeft:pixelNormalize(4),
    top:pixelNormalize(-17),
    margin:pixelNormalize(14),
    left:pixelNormalize(3)

  },
  recommendationHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding:pixelNormalize(10),
    marginTop: pixelNormalize(-30),
    marginBottom:pixelNormalize(-20),
    top:pixelNormalize(20),
    left:pixelNormalize(-7)
  },
  viewAllButton: {
    color: '#1F5170',
  },
  serviceCenterHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding:pixelNormalize(10),
    marginTop:pixelNormalize(-30),
    marginBottom:pixelNormalize(-30),
    top:pixelNormalize(40),
    left:pixelNormalize(-7),

  },
  serviceCenterText: {
    fontSize:pixelNormalize(18),
    fontWeight: 'bold',
    padding:pixelNormalize(10),
    marginBottom:pixelNormalize(-33),
    color: 'black',
    marginLeft: pixelNormalize(4),
    top:pixelNormalize(-17),
    margin:pixelNormalize(12),
    left:pixelNormalize(3)

  },

});

export default HomeScreen;
