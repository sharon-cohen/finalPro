import React from "react";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Card, Divider } from 'react-native-elements';
import { connect } from 'react-redux';
import { NameAndPrice } from "../../../components/NameAndPrice";
import {
	TouchableOpacity,
	Dimensions ,
	Image,
	View,
	Text,	
  StyleSheet,
 
} from "react-native";
import { useState } from 'react';

const windowHeight = Dimensions.get('window').width;
const heightImage = (0.4)*windowHeight*(3/4);
const mapDispatchToProps = (dispatch) => {
	return { 
	 chooseProduct:(product)=>dispatch(selectedProduct(product))
  };
  }
const ProductItem = ({item,isHot,isItemsCategory,chooseProduct,navigation}) => {
	
	return (
   
<TouchableOpacity
onPress={() => {
	
	navigation.navigate('product', {item})
	
  }}
>
<View style={{ backgroundColor: '#2089dc',
	  width: isHot?'100%':windowHeight*0.4,
	 margin:0,
	  height:isItemsCategory?"100%":"100%", 
	  padding:0,
	  marginLeft:isHot?0:10}}>
             
			 <View style={{ height:'50%' ,width:"100%",backgroundColor:"white"}}>
			 <Image
		 style={{ resizeMode: 'contain' ,height:"100%" ,width:"100%",}}
            
		 source={{ uri: item.image }}	 
			 />
          
              
			  </View>
			  <View style={{ height:'50%' ,width:"100%"}}>
			  <NameAndPrice item={item}/>
			  </View>
			
			</View>
</TouchableOpacity>
  );
};

export default connect(
	null,mapDispatchToProps
  )(ProductItem)

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