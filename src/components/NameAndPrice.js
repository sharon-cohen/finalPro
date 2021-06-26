import * as React from 'react';
import { Text, View } from 'react-native';
import { NumberPurchases } from '../pages/home/componemt/NumberPurchases';
export const NameAndPrice = ({ item }) => (
  <View style={{ height: '100%' }}>
    <View style={{ height: '70%' }}>
      <Text>{item.name}</Text>
      <Text>{item.newPrice}</Text>
      <Text style={{ textDecorationLine: 'line-through', textDecorationStyle: 'solid' }}>
        {item.oldPrice}
      </Text>
    </View>
    <View style={{ height: '30%', backgroundColor: '#c1071e' }}>
      <NumberPurchases item={item} />
    </View>
  </View>
);
