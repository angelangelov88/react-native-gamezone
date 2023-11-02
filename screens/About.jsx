import React from 'react';
import { View, Text } from 'react-native';
import tw from 'twrnc';

export default function About() {
  return (
    <View style={tw.style('flex p-6')}>
      <Text style={tw.style("my-3")}>About</Text>
    </View>
  )
}