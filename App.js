import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function App() {
  const [backgroundColor, setBackgroundColor] = useState('white'); // Trạng thái màu nền

  const Box = ({ backgroundColor, text }) => {
    return (
      <TouchableOpacity 
        style={[styles.box, { backgroundColor }]} 
        onPress={() => setBackgroundColor(backgroundColor)} // Thay đổi màu nền khi nhấn
      >
        <Text style={styles.text}>{text}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={[styles.container, { backgroundColor }]}>
      <Box backgroundColor='green' text="GREEN" />
      <Box backgroundColor='blue' text="BLUE" />
      <Box backgroundColor='brown' text="BROWN" />
      <Box backgroundColor='yellow' text="YELLOW" />
      <Box backgroundColor='red' text="RED" />
      <Box backgroundColor='black' text="BLACK" />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 200,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  text: {
    color: 'white',
  },
});