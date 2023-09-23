import React, {useState} from 'react';
import {Image, View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const ServiceStatus = () => {
  const [isToggled, setToggled] = useState([false, false, false]);

  const handleToggle = index => {
    const updatedToggles = [...isToggled];
    updatedToggles[index] = !updatedToggles[index];
    setToggled(updatedToggles);
  };

  return (
    <View style={styles.container}>
      <View style={styles.innerContainer1}>
        <Image
          source={require('../../assets/MarutiSuzuki.png')}
          style={styles.imageStyles}
          resizeMode="cover"
        />
        <View style={styles.textContainer}>
          <Text style={styles.textStyle}>245WASH251</Text>
          <Text style={styles.textStyle2}>Services start at</Text>
          <Text style={styles.textStyle2}>10:00 AM</Text>
        </View>
      </View>
      <View style={styles.border} />
      <View style={styles.container2}>
        {['Tire replacement', 'Oil change', 'Interior cleaning'].map(
          (service, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => handleToggle(index)}
              style={styles.serviceItem}>
              <View style={styles.circle}>
                {isToggled[index] && (
                  <Icon name="checkmark-circle" size={24} color="green" />
                )}
              </View>
              <Text style={styles.textStyle3}>{service}</Text>
            </TouchableOpacity>
          ),
        )}
        <View style={styles.costContainer}>
          <Text style={styles.costText}>Total cost : $250</Text>
          <Text style={styles.costText2}>Including all taxes</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    shadowColor: 'rgba(0, 0, 0, 0.2)',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 1,
    shadowRadius: 5,
    elevation: 3,
    borderColor: '#fff',
    backgroundColor: '#f8f8ff',
    borderWidth: 1,
    borderRadius: 10,
  },
  innerContainer1: {
    flex: 1,
    flexDirection: 'row',
    marginRight: 15,
    marginLeft: 15,
    overflow: 'scroll',
  },
  imageStyles: {
    width: '40%',
    height: '95%',
    borderRadius: 10,
  },
  textContainer: {
    justifyContent: 'flex-start',
    paddingLeft: 20,
  },
  textStyle: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  textStyle2: {
    fontSize: 19,
  },
  border: {
    borderBottomWidth: 1,
    borderColor: 'black',
  },
  container2: {
    flex: 1,
  },
  textStyle3: {
    padding: 10,
    fontWeight: 'bold',
    fontSize: 18,
  },
  circle: {
    height: 24,
    width: 24,
    borderRadius: 12,
    borderColor: 'black',
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 7,
    marginLeft: 7,
  },
  serviceItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  costContainer: {
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    marginTop: -45,
    marginRight: 7,
  },
  costText: {
    fontSize: 20,
  },
  costText2: {
    fontSize: 15,
  },
});

export default ServiceStatus;
