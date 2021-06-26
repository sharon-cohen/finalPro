import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',

    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  text: {
    color: '#ffffff',
  },
});
export const NumberPurchases = ({ item }) => (
  <View style={styles.container}>
    <MaterialCommunityIcons name="account-plus" size={20} color="#ffffff" />
    <Text style={styles.text}>{item.reg} </Text>
    <MaterialCommunityIcons name="target-account" size={20} color="#ffffff" />
    <Text style={styles.text}>{item.goal} </Text>
  </View>
);
