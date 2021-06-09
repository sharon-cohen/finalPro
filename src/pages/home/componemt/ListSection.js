import React from "react";



import {
	Dimensions ,
	FlatList,
	View,
	Text,
  StyleSheet,
 
} from "react-native";
import ProductItem from "./ProductItem";

const ListSection = ({nameSection,listItems,navigation}) => {
	
	
	
	return (
   
	<View style={styles.productSection} >
	<View style={styles.titleList} >
	<Text>{nameSection}</Text>
	</View>
	<FlatList style={styles.listCategoryStyle}
		  data={listItems}
		  keyExtractor={(item) => item.name}
		  horizontal = { true }
		  renderItem={({ item }) => (
		   <ProductItem item={item} isHot={false} isItemsCategory={true} navigation={navigation}/>
		  )}
		/>
	</View>
  
  );
};

export default ListSection;
const windowHeight = Dimensions.get('window').width;
const styles = StyleSheet.create({
	productSection:{
		height:"100%",
		backgroundColor:"gray",
		paddingLeft:5,
		
	},
	listCategoryStyle:{
	
		flex: 1,
	},
	titleList:{
		height:"15%",
		backgroundColor:"red",
	},
  });