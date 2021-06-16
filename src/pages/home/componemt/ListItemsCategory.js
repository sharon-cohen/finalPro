import React from "react";
import ProductItem from "./ProductItem";
import {
	Dimensions ,
	View,
	Text,
	FlatList,
  StyleSheet,
  SafeAreaView
} from "react-native";
const windowHeight = Dimensions.get('window').height;
const ListItemsCategory = ({listItems,navigation}) => {
	console.log(listItems)
	return(
<View style={styles.main}>
<View style={styles.feed}>
	{listItems.map((pro) =>
             
			  <View style={styles.card} key={pro.name}>
                <ProductItem item={pro} isHot={false} isItemsCategory={true} navigation={navigation}/>
              </View>)}
 </View>
 </View>
);};
const styles = StyleSheet.create({
	main:{
	
		flex: 1 
		
	},
	feed: {
		
		flexDirection: 'row',
		flexWrap: 'wrap',
		
	
		justifyContent: 'space-between' ,
		
	},
	   
	   
	   card: {
	
		width: '48%',
		aspectRatio: 0.8,
		marginBottom: 16   }
  });
  export default ListItemsCategory;