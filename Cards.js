import React from 'react'
import { Pressable, Text, StyleSheet } from 'react-native'

const Cards = ({onPress, children, turnedOver}) => {
  return (
    <Pressable>
<Text>{children}</Text>
    </Pressable>
  )
}

export default Cards