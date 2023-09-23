import React from 'react';
import {View, Text, StyleSheet, Pressable, ScrollView, Button,} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Carousel from '../components/Slider';
import ServiceStatus from '../components/ServiceStatus';
import Recommendation from '../components/Recommendation';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        {/* Bell Icon Button */}
        <Pressable
          style={styles.bellButton}
          onPress={() => {
            // Handle button press here
            console.log('Bell button pressed');
          }}>
          <Icon name="md-notifications-outline" size={24} color="black" />
        </Pressable>

        {/* SUPER SHINE Text */}
        <Text style={styles.superShineText}>SUPER SHINE</Text>

        {/* Add your content below */}
        <Text style={styles.text2}>Address will be here</Text>
      </View>
      <ScrollView>
        <Carousel />
        <Text style={styles.serviceStatusText}>Service status</Text>

        <ServiceStatus />
        <Recommendation />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 5,
  },
  innerContainer: {
    flex: 1,
  },
  bellButton: {
    position: 'absolute',
    top: 13,
    right: 20,
    zIndex: 1,
  },
  superShineText: {
    fontSize: 44,
    fontWeight: 'bold',
    color: 'red',
  },
  text2: {
    color: 'red',
  },
  serviceStatusText: {
    fontSize: 19,
    fontWeight: 'bold',
    margin: 10,
  },
  nearbyServiceCentresContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
  },
  nearbyServiceCentresText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default HomeScreen;
