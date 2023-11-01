import React from 'react';
import { View, Text } from 'react-native';
import tw from '../libs/tailwind.js';

export default function Home() {
  return (
    <View style={tw.style('p-6')}>
      <Text style={tw.style("text-blue-50")}>Home</Text>
    </View>
  )
}