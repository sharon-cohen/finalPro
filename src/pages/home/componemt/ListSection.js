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
	<View sstyle={styles.listCategoryStyle}>
	<FlatList style={styles.listCategoryStyle}
		  data={listItems}
		  keyExtractor={(item) => item.name}
		  horizontal = { true }
		  renderItem={({ item }) => (
			<View style={styles.wrapCard}>
		   <ProductItem item={item} isHot={false} isItemsCategory={true} navigation={navigation}/>
		   </View>
		  )}
		/>
		 </View>
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
	
		height:"80%",
		backgroundColor: 'black'
	},
	titleList:{
		height:"15%",
		backgroundColor:"red",
	},
	wrapCard:{
		
		
	},
  });