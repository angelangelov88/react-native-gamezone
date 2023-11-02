import React from 'react';
import { View, Text, Button } from 'react-native';
import tw from 'twrnc';

export default function ReviewDetails({ navigation }) {
  return (
    <View style={tw.style('flex p-6')}>
      <Text style={tw.style("my-3")}>Review Details</Text>
      <Button
        title="Go to Home"
        onPress={() => navigation.goBack()}
      />
    </View>
  )
}