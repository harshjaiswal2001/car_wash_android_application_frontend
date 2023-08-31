import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from "react-native";

const TermsAndConditionsScreen = () => {
  return (
    <ScrollView>
    <View style={styles.container}>
      <Image
        source={require('../assets/logo-no-background.png')} // Replace with your logo source
        style={styles.logo}
        alt={'carwash supershine logo'}
        resizeMode='stretch'
      />

      <Text style={styles.content}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ornare arcu odio ut sem nulla pharetra diam sit. Tincidunt id aliquet risus feugiat in ante metus. Massa id neque aliquam vestibulum morbi blandit cursus risus at. Bibendum enim facilisis gravida neque convallis. Arcu dui vivamus arcu felis bibendum ut tristique et. Duis at consectetur lorem donec. Lectus arcu bibendum at varius vel. Volutpat consequat mauris nunc congue nisi vitae suscipit tellus. Sapien pellentesque habitant morbi tristique senectus. Ipsum faucibus vitae aliquet nec ullamcorper sit amet risus.
      </Text>

      <Text style={styles.content}>
        Eros in cursus turpis massa tincidunt dui ut ornare. At quis risus sed vulputate odio ut enim. Arcu ac tortor dignissim convallis aenean et tortor at. Quisque non tellus orci ac auctor augue mauris augue. Ut etiam sit amet nisl purus. At quis risus sed vulputate odio ut enim blandit. Ultrices sagittis orci a scelerisque. Sit amet nulla facilisi morbi tempus iaculis urna. Eget mi proin sed libero. Et malesuada fames ac turpis egestas integer eget. Lectus mauris ultrices eros in cursus. Diam volutpat commodo sed egestas egestas fringilla. Sollicitudin nibh sit amet commodo nulla facilisi nullam. Feugiat in fermentum posuere urna nec tincidunt praesent semper. Vel risus commodo viverra maecenas accumsan lacus vel facilisis. Duis at tellus at urna condimentum mattis pellentesque. Cursus mattis molestie a iaculis at erat pellentesque adipiscing. Massa enim nec dui nunc.
      </Text>

      <Text style={styles.content}>
        Eros in cursus turpis massa tincidunt dui ut ornare. At quis risus sed vulputate odio ut enim. Arcu ac tortor dignissim convallis aenean et tortor at. Quisque non tellus orci ac auctor augue mauris augue. Ut etiam sit amet nisl purus. At quis risus sed vulputate odio ut enim blandit. Ultrices sagittis orci a scelerisque. Sit amet nulla facilisi morbi tempus iaculis urna. Eget mi proin sed libero. Et malesuada fames ac turpis egestas integer eget. Lectus mauris ultrices eros in cursus. Diam volutpat commodo sed egestas egestas fringilla. Sollicitudin nibh sit amet commodo nulla facilisi nullam. Feugiat in fermentum posuere urna nec tincidunt praesent semper. Vel risus commodo viverra maecenas accumsan lacus vel facilisis. Duis at tellus at urna condimentum mattis pellentesque. Cursus mattis molestie a iaculis at erat pellentesque adipiscing. Massa enim nec dui nunc.
      </Text>

      <Text style={styles.content}>
        Eros in cursus turpis massa tincidunt dui ut ornare. At quis risus sed vulputate odio ut enim. Arcu ac tortor dignissim convallis aenean et tortor at. Quisque non tellus orci ac auctor augue mauris augue. Ut etiam sit amet nisl purus. At quis risus sed vulputate odio ut enim blandit. Ultrices sagittis orci a scelerisque. Sit amet nulla facilisi morbi tempus iaculis urna. Eget mi proin sed libero. Et malesuada fames ac turpis egestas integer eget. Lectus mauris ultrices eros in cursus. Diam volutpat commodo sed egestas egestas fringilla. Sollicitudin nibh sit amet commodo nulla facilisi nullam. Feugiat in fermentum posuere urna nec tincidunt praesent semper. Vel risus commodo viverra maecenas accumsan lacus vel facilisis. Duis at tellus at urna condimentum mattis pellentesque. Cursus mattis molestie a iaculis at erat pellentesque adipiscing. Massa enim nec dui nunc.
      </Text>
    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent:'center',
  },
  logo: {
    width:280,
    height:80,
    alignSelf: 'center', // Center the logo horizontally
    marginBottom: 16,
    resizeMode: "cover",
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  content: {
    fontSize: 16,
    marginTop: 8,
  },
});

export default TermsAndConditionsScreen;
