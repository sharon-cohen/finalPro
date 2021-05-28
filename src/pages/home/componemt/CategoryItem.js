import React from "react";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Card, Divider } from 'react-native-elements';


import {
	View,
	Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
} from "react-native";


const CategoryItem = ({item}) => {
  return (
   
<Card containerStyle={styles.card}>
              <TouchableOpacity>
                <Text>fdf</Text>
              </TouchableOpacity>
            </Card>
  
  );
};

export default CategoryItem;

const styles = StyleSheet.create({
	container: {
	  flex: 1,
	  paddingTop: 22,
	},
	card: {
	  backgroundColor: '#2089dc',
	  padding: 30,
	  marginVertical: 5,
	   borderRadius: 10,
	  justifyContent: 'center',
	},
  });