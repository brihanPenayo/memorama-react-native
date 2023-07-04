import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Cards from './Cards';
import React, { useState } from 'react';
const emojis = [
  "🐶",
  "👀",
  "😻",
  "🤖",
  "👾",
  "👻",
  "🙉",
  "💩",
  "😄",
]

export default function App() {
  const [board, setBoard] = React.useState(()=>shuffleArray([...emojis, ...emojis]))
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Memorama</Text>
      {board.map((card, index)=>{
        return (
          <Cards key={index}>{card}</Cards>
        )
      })}
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#26402d',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 32,
    color: "white",
    fontWeight: 800
  }
});

  function shuffleArray(array) {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
  }