import React from 'react';
import { FlatList, View, Image, Text, StyleSheet, Pressable } from 'react-native';

const data = [
  {
    key: '1',
    imageSource: require('../../assets/bmw-7-series-i7-cp-design-exterior-desktop.png'),
    text: [
      'Ace car wash',
      '🕓09:00 - 22:00  📍2.5km                            ★★★★☆  4.0',
      'A-14, Ram Krishna nagar',
      'Nagpur, Maharashtra'
    ],
  },
  {
    key: '2',
    imageSource: require('../../assets/e-tron-gt-exterior-right-front-three-quarter-2.png'),
    text: [
      'Cube car service',
      '🕓09:00 - 22:00  📍2.5km                            ★★★★☆  4.0',
      'A-14, Ram Krishna nagar',
      'Nagpur, Maharashtra'
    ],
  },
  {
    key: '3',
    imageSource: require('../../assets/maybach-s-class-exterior-right-front-three-quarter.png'),
    text: [
      'John car service',
      '🕓09:00 - 22:00  📍2.5km                            ★★★★☆  4.0',
      'A-14, Ram Krishna nagar',
      'Nagpur, Maharashtra'
    ],
  },
];

const HorizontalImageFlatList = () => {
  return (
      <View style={styles.container}>
        <FlatList
            data={data}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => (
                <View style={styles.item}>
                  <Image source={item.imageSource} style={styles.image} />
                  <View style={styles.textContainer}>
                    {item.text.map((line, index) => (
                        <Text
                            key={index}
                            style={[
                              index === 0 ? styles.boldText : styles.text,
                              index === 0 &&
                              (line === 'Ace car wash' ||
                                  line === 'Cube car service' ||
                                  line === 'John car service')
                                  ? styles.biggerFont
                                  : null,
                            ]}>
                          {line}
                        </Text>
                    ))}
                    {/* Add Get Direction button here */}
                    <Pressable
                        style={styles.directionButton}
                        onPress={() => {
                          // Handle the button press action here
                          console.log('Get Direction pressed for ' + item.text[0]);
                        }}
                    >
                      <Text style={styles.directionButtonText}>Get Direction</Text>
                    </Pressable>
                  </View>
                </View>
            )}
            keyExtractor={(item) => item.key}
        />
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 20, // Adjust the margin as needed to move the FlatList up or down
    marginLeft:10
  },
  item: {
    flex: 1,
    margin: 5,
    borderRadius: 10,
    overflow: 'hidden', // Ensure images don't overflow their containers
    shadowColor: 'rgba(0, 0, 0, 0.5)',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 1,
    shadowRadius: 5,
    elevation: 3,
    borderColor: '#fff',
    backgroundColor: '#f8f8ff',
    borderWidth: 1,
  },
  image: {
    width: 400, // Set your desired image width
    height: 150, // Set your desired image height
  },
  textContainer: {
    padding: 5,
    alignItems: 'flex-start', // Align text to the left
  },
  text: {
    fontSize: 14,
    textAlign: 'left', // Align text to the left
  },
  boldText: {
    fontSize: 56,
    fontWeight: 'bold', // Apply bold styling
    textAlign: 'left', // Align text to the left
  },
  biggerFont: {
    fontSize: 18, // Apply a bigger font size
  },
  // Styles for the Get Direction button
  directionButton: {
    marginTop: -30,
    borderWidth: 1,
    borderColor: 'blue',
    borderRadius: 5,
    padding: 5,
    marginLeft:280,
  },
  directionButtonText: {
    color: 'blue',
  },
});

export default HorizontalImageFlatList;
