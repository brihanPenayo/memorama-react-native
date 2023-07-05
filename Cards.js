import React from 'react'
import { Pressable, Text, StyleSheet } from 'react-native'

const Cards = ({onPress, children, turnedOver}) => {
  return (
    <Pressable onPress={onPress} style={styles.card}>
      <Text style={styles.emoji}>{children}</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    width: 100,
    height: 100,
    borderRadius: 20
  },
  emoji: {
    fontSize: 40,
  }
});

export default Cards