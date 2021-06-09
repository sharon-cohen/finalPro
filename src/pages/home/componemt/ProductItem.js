import React from "react";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Card, Divider } from 'react-native-elements';


import {
	Dimensions ,
	Image,
	View,
	Text,
  StyleSheet,
 
} from "react-native";

const windowHeight = Dimensions.get('window').width;
const heightImage = (0.4)*windowHeight*(3/4);
const ProductItem = ({item,isHot,isItemsCategory}) => {
  return (
   
<View >
<Card containerStyle={{ backgroundColor: '#2089dc',
	  width: isHot?"100%":windowHeight*0.4,
	 margin:0,
	  height:isItemsCategory?windowHeight*0.6:"100%", 
	  padding:0,
	  marginLeft:isHot?0:10}}>
             
			 <View style={{ height:heightImage ,width:"100%",backgroundColor:"white"}}>
			  <Card.Image
           style={{ resizeMode: 'contain' ,height:"100%" ,width:"100%",}}
            
            source={{ uri: item.image }}
          >
              </Card.Image>
			  </View>
			  <Text>{item.name}</Text>
			 
            </Card>
			</View>
  );
};

export default ProductItem;

const styles = StyleSheet.create({
	mainContainer: {
        flex: 1,
        flexWrap: 'wrap',
        flexDirection: 'row'
  },
	
	card: {
	  backgroundColor: '#2089dc',
	  width: windowHeight*0.4,
	 
	  height:"100%", 
	  padding:0,
	  marginLeft:10,
	  
	  
	  
	  
	},
	img:{
		height: "90%"
	}
  });