import * as React from 'react'
import { Button, View, StyleSheet } from 'react-native'
const styles = StyleSheet.create({
  bottomView: {
    width: '100%',
    height: 50,
    justifyContent: 'flex-end',
    position: 'absolute',
    bottom: 0,
  },
})
export const BottonButton = () => (
  <View style={styles.bottomView}>
    <Button title="רכשו עכשיו!" />
  </View>
)
