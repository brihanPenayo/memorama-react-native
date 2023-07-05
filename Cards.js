import React from 'react'
import { Pressable, Text, StyleSheet } from 'react-native'

const Cards = ({ onPress, children, turnedOver }) => {
  return (
    <Pressable onPress={onPress} style={[styles.card, (turnedOver ? styles.cardShow : styles.cardHide)]}>
      {turnedOver ?
        (<Text style={styles.emoji}>{children}</Text>)
        :
        (<Text style={styles.emoji}>?</Text>)}
    </Pressable>
  )
}

const styles = StyleSheet.create({
  card: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 100,
    height: 100,
    borderRadius: 20,
    borderWidth: 10,
    backgroundColor: 'white'
  },
  cardShow: {
    backgroundColor: 'white',
    borderColor: 'purple'
  },
  emoji: {
    fontSize: 40,
    color: '#26402d'
  },
  cardHide: {
    borderColor: 'gray'
  }
});

export default Cards