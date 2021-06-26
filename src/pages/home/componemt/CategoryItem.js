import React from 'react'
import { Card } from 'react-native-elements'

import { Text, StyleSheet } from 'react-native'

const CategoryItem = ({ item }) => (
  <Card containerStyle={styles.card}>
    <Text style={styles.text}>{item.category}</Text>
  </Card>
)

export default CategoryItem

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#43465e',
    padding: 30,
    marginVertical: 5,
    borderRadius: 10,
    justifyContent: 'center',
  },
  text: {
    color: '#ffffff',
  },
})
