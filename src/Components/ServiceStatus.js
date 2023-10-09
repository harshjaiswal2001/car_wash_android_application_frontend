import React, {useState} from 'react';
import {Image, View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const ServiceStatus = () => {
  const [selectedServices, setSelectedServices] = useState([false, false, false]);

  const handleServiceSelection = (index) => {
    const updatedServices = [...selectedServices];
    updatedServices[index] = !updatedServices[index];
    setSelectedServices(updatedServices);
  };

  const RadioButton = ({ selected }) => {
    return (

        <View style={selected ? styles.circleSelected : styles.circle}>
          {selected && <Icon name="checkmark" size={14} color="white" />}
        </View>
    );
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
          <Text style={styles.textStyle2}>Services start at 10:00 AM</Text>
          <Text style={styles.textStyle2}></Text>
        </View>
      </View>

      <View style={styles.border} />

      <View style={styles.container2}>
        {['Tire replacement', 'Oil change', 'Interior cleaning'].map(
          (service, index) => (

              <TouchableOpacity
                  key={index}
                  onPress={() => handleServiceSelection(index)}
                  style={styles.serviceItem}>
                <RadioButton selected={selectedServices[index]} />
                <Text style={styles.textStyle3}>{service}</Text>
              </TouchableOpacity>
          ),
        )}

        <View style={styles.costContainer}>
          <Text style={styles.costText}>Total cost : $250</Text>
          <Text style={styles.costText2}>Including all tax</Text>
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
    backgroundColor: '#fff',
    borderWidth: 1,
    borderRadius: 10,
    margin:12,
    top:4,
  },
  innerContainer1: {
    flex: 1,
    flexDirection: 'row',
    marginRight: 15,
    marginLeft: 15,
    overflow: 'scroll',
    marginTop:10,
  },
  imageStyles: {
    width: '40%',
    height: '95%',
    borderRadius: 10,
    resizeMode:'cover'
  },
  textContainer: {
    justifyContent: 'flex-start',
    paddingLeft: 20,
  },
  textStyle: {
    fontSize: 18,
    fontWeight: 'bold',
    color:'black'
  },
  textStyle2: {
    fontSize: 15,
  },
  border: {
    borderBottomWidth: 1.4,
    borderStyle:'dashed',
    marginTop:10,
    borderColor:'#808080',
  },
  container2: {
    flex: 1,
  },
  textStyle3: {
    padding: 10,
    fontWeight: 'bold',
    fontSize: 17,
    color:'black'
  },
  circle: {
    height: 20,
    width: 20,
    borderRadius: 10,
    borderColor: 'black',
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 7,
    marginLeft: 7,
  },
  circleSelected: {
    height: 20,
    width: 20,
    borderRadius: 10,
    backgroundColor: '#1F5170',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight:1,
    marginLeft: 7,
  },

  serviceItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  costContainer: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: -50,
    marginRight: -180,
    top:-40,
  },
  costText: {
    fontSize: 17,
    color:'black',
    fontWeight:'bold',

  },
  costText2: {
    fontSize: 15,
    marginBottom:10,

  },
});

export default ServiceStatus;
