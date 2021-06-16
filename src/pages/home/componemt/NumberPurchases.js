import * as React from 'react';
import {  Text,View, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
const styles = StyleSheet.create({
	container: { 
		height:'100%',
		width:'100%',
		
		
		flexDirection: 'row',
		justifyContent: 'flex-end',
		alignItems:'flex-end'
	
	  },
	
});
export const NumberPurchases = ({item}) => {

  return (
    <View style={styles.container}>
   <MaterialCommunityIcons name="account-plus"  size={20} />
  <Text>{item.reg} </Text>
  <MaterialCommunityIcons name="target-account"  size={20} />
  <Text>{item.goal} </Text>
 
</View>
  );
};
