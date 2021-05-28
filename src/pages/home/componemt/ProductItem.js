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
const ProductItem = ({item,isHot}) => {
  return (
   
<Card containerStyle={{ backgroundColor: '#2089dc',
	  width: isHot?"100%":windowHeight*0.4,
	 margin:0,
	  height:"100%", 
	  padding:0,
	  marginLeft:isHot?0:10}}>
             
			 <View style={{ height:heightImage ,width:"100%",backgroundColor:"white"}}>
			  <Card.Image
           style={{ resizeMode: 'contain' ,height:"100%" ,width:"100%",}}
            
            source={{ uri: 'https://firebasestorage.googleapis.com/v0/b/finalpro-c979d.appspot.com/o/dyson.png?alt=media&token=2ff78fe4-4e4a-4dcf-ae3c-e5633e006a3c' }}
          >
              </Card.Image>
			  </View>
			  <Text>DFD</Text>
			 
            </Card>
  
  );
};

export default ProductItem;

const styles = StyleSheet.create({
	container: {
	  flex: 1,
	 
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