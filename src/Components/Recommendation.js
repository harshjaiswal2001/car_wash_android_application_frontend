import React from 'react';
import { FlatList, View, Image, Text, StyleSheet, Button } from 'react-native';

const data = [
  {
    key: '1',
    imageSource: require('../../assets/bmw-7-series-i7-cp-design-exterior-desktop.png'),
    text: ['Ace car wash', '★★★★☆  4.0', '🕓09:00 - 22:00  📍2.5km'],
  },
  {
    key: '2',
    imageSource: require('../../assets/e-tron-gt-exterior-right-front-three-quarter-2.png'),
    text: ['Cube car service', '★★★★☆  4.0', '🕓09:00 - 22:00  📍2.5km'],
  },
  {
    key: '3',
    imageSource: require('../../assets/maybach-s-class-exterior-right-front-three-quarter.png'),
    text: ['John car service', '★★★★☆  4.0', '🕓09:00 - 22:00  📍2.5km'],
  },
  // Add more items as needed
];

const HorizontalImageFlatList = () => {
  return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Recommended for you</Text>
          <Button
              title="View all"
              onPress={() => {
                /* Add your action here */
              }}
          />
        </View>
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
                            ]}
                        >
                          {line}
                        </Text>
                    ))}
                  </View>
                </View>
            )}
            keyExtractor={(item) => item.key}
        />
        {/* Nearby Service Centers Section */}
        <View style={styles.nearbyServiceCentersContainer}>
          <Text style={styles.nearbyServiceCentersText}>Nearby Service Centres</Text>
          <Button
              title="View all"
              onPress={() => {
                /* Add your action here */
              }}
          />
        </View>
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingTop: 8,
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
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
    width: 190, // Set your desired image width
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
  nearbyServiceCentersContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    marginTop: 20, // Adjust the marginTop as needed
  },
  nearbyServiceCentersText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default HorizontalImageFlatList;
