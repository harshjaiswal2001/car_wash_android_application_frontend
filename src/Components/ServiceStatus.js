import React, {useState} from 'react';
import {Image, View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {pixelNormalize} from "../constants/Size";

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
    shadowOffset: {width: pixelNormalize(0), height:pixelNormalize( 2)},
    shadowOpacity: pixelNormalize(1),
    shadowRadius: pixelNormalize(5),
    elevation: pixelNormalize(3),
    borderColor: '#fff',
    backgroundColor: '#fff',
    borderWidth: pixelNormalize(1),
    borderRadius: pixelNormalize(10),
    margin:pixelNormalize(12),
    top:pixelNormalize(4),
  },
  innerContainer1: {
    flex: 1,
    flexDirection: 'row',
    marginRight: pixelNormalize(15),
    marginLeft: pixelNormalize(15),
    overflow: 'scroll',
    marginTop:pixelNormalize(10),
  },
  imageStyles: {
    width: '40%',
    height: '95%',
    borderRadius: pixelNormalize(10),
    resizeMode:'cover'
  },
  textContainer: {
    justifyContent: 'flex-start',
    paddingLeft: pixelNormalize(20),
  },
  textStyle: {
    fontSize:pixelNormalize( 18),
    fontWeight: 'bold',
    color:'black'
  },
  textStyle2: {
    fontSize: pixelNormalize(15),
  },
  border: {
    borderBottomWidth:pixelNormalize( 1.4),
    borderStyle:'dashed',
    marginTop:pixelNormalize(10),
    borderColor:'#808080',
  },
  container2: {
    flex: 1,
  },
  textStyle3: {
    padding: pixelNormalize(10),
    fontWeight: 'bold',
    fontSize: pixelNormalize(17),
    color:'black'
  },
  circle: {
    height: pixelNormalize(20),
    width: pixelNormalize(20),
    borderRadius: pixelNormalize(10),
    borderColor: 'black',
    borderWidth: pixelNormalize(2),
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: pixelNormalize(7),
    marginLeft: pixelNormalize(7),
  },
  circleSelected: {
    height: pixelNormalize(20),
    width: pixelNormalize(20),
    borderRadius: pixelNormalize(10),
    backgroundColor: '#1F5170',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight:pixelNormalize(1),
    marginLeft: pixelNormalize(7),
  },

  serviceItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  costContainer: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: pixelNormalize(-50),
    marginRight: pixelNormalize(-180),
    top:pixelNormalize(-40),
  },
  costText: {
    fontSize: pixelNormalize(17),
    color:'black',
    fontWeight:'bold',

  },
  costText2: {
    fontSize: pixelNormalize(15),
    marginBottom:pixelNormalize(10),

  },
});

export default ServiceStatus;
