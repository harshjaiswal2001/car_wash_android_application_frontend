import React from 'react';
import { View, Text, StyleSheet, ScrollView } from "react-native";

const PrivacyPolicyScreen = () => {
  return (
    <ScrollView>
    <View style={styles.container}>

      <Text style={styles.subtitle}>Introduction</Text>
      <Text style={styles.content}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tortor at auctor urna nunc id. Sagittis purus sit amet volutpat consequat mauris nunc congue nisi. Varius quam quisque id diam. Tristique et egestas quis ipsum suspendisse ultrices gravida. Nisi quis eleifend quam adipiscing. Pharetra pharetra massa massa ultricies mi quis. Nec ullamcorper sit amet risus. Est ullamcorper eget nulla facilisi etiam dignissim diam. Dignissim cras tincidunt lobortis feugiat vivamus at. Sem fringilla ut morbi tincidunt augue interdum velit euismod. Nunc sed augue lacus viverra vitae congue eu consequat. Eu ultrices vitae auctor eu augue ut lectus arcu bibendum. Nullam ac tortor vitae purus faucibus ornare.
        Nibh nisl condimentum id venenatis. Mi bibendum neque egestas congue quisque egestas. Feugiat nisl pretium fusce id. Rhoncus dolor purus non enim praesent elementum facilisis leo. Magna fringilla urna porttitor rhoncus dolor purus non enim praesent. Accumsan tortor posuere ac ut. Nulla facilisi etiam dignissim diam quis. Urna cursus eget nunc scelerisque viverra. Neque gravida in fermentum et sollicitudin ac orci phasellus egestas. Id consectetur purus ut faucibus pulvinar elementum. Elit ullamcorper dignissim cras tincidunt. Ultrices eros in cursus turpis massa tincidunt dui. Purus in massa tempor nec feugiat nisl pretium fusce.</Text>

      <Text style={styles.subtitle}>Managing Your Information</Text>
      <Text style={styles.content}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ac tortor dignissim convallis aenean et tortor at. Sit amet consectetur adipiscing elit pellentesque habitant morbi. Viverra maecenas accumsan lacus vel facilisis volutpat. Suspendisse in est ante in nibh mauris cursus mattis molestie. Sit amet purus gravida quis blandit. Sollicitudin nibh sit amet commodo. Pellentesque elit ullamcorper dignissim cras tincidunt lobortis. Sit amet risus nullam eget felis. Mattis ullamcorper velit sed ullamcorper morbi tincidunt. Eu volutpat odio facilisis mauris. Ut ornare lectus sit amet est placerat in egestas. Ultricies integer quis auctor elit sed vulputate mi sit. Egestas integer eget aliquet nibh. Adipiscing bibendum est ultricies integer quis auctor elit sed. Ut ornare lectus sit amet est placerat in egestas. Proin sed libero enim sed faucibus. Non tellus orci ac auctor augue.
        Egestas tellus rutrum tellus pellentesque eu tincidunt tortor aliquam. Elit ullamcorper dignissim cras tincidunt. Malesuada fames ac turpis egestas maecenas pharetra convallis posuere morbi. Libero id faucibus nisl tincidunt eget. Quam quisque id diam vel quam elementum pulvinar etiam. Mi tempus imperdiet nulla malesuada. Lectus vestibulum mattis ullamcorper velit sed. Bibendum ut tristique et egestas. Nibh nisl condimentum id venenatis a condimentum. Tellus at urna condimentum mattis pellentesque id. Eu non diam phasellus vestibulum lorem sed risus ultricies tristique. Tortor dignissim convallis aenean et tortor at risus viverra adipiscing. Tortor dignissim convallis aenean et tortor at risus. Morbi tempus iaculis urna id. Tellus at urna condimentum mattis pellentesque id nibh tortor id. Eu mi bibendum neque egestas congue quisque egestas diam. Id faucibus nisl tincidunt eget. Arcu felis bibendum ut tristique et egestas quis ipsum suspendisse. Mi tempus imperdiet nulla malesuada pellentesque elit eget.
        Eget duis at tellus at urna. Egestas fringilla phasellus faucibus scelerisque eleifend donec pretium vulputate. Volutpat est velit egestas dui id ornare arcu. Suspendisse interdum consectetur libero id faucibus nisl tincidunt eget. Nunc eget lorem dolor sed viverra. Dignissim enim sit amet venenatis urna cursus. Donec enim diam vulputate ut pharetra sit. Tellus mauris a diam maecenas sed enim ut sem. Egestas egestas fringilla phasellus faucibus scelerisque eleifend donec. Nunc scelerisque viverra mauris in aliquam sem fringilla.
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
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  subtitle: {
    fontSize: 18,
    color:'#000000',
    fontWeight: 'bold',
    marginTop: 16,
  },
  content: {
    fontSize: 16,
    marginTop: 8,
  },
});

export default PrivacyPolicyScreen;
