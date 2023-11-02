import React from 'react';
import { View, Text, Button } from 'react-native';
import tw from '../libs/tailwind.js';

export default function Home({ navigation }) {
  return (
    <View style={tw.style('flex p-6')}>
      <Text style={tw.style("my-3")}>Homescreen</Text>
      <Button
        title="Go to Review Details"
        onPress={() => navigation.navigate('ReviewDetails')}
      />
    </View>
  )
}