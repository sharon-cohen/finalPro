import React from "react";



import {
	Dimensions ,
	FlatList,
	View,
	Text,
  StyleSheet,
 
} from "react-native";
import ProductItem from "./ProductItem";
const listCategory=[ {
	image:
	  'https://images.unsplash.com/photo-1567226475328-9d6baaf565cf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60',
	desc: 'Silent Waters in the mountains in midst of Himilayas',
  },
  {
	image:
	  'https://images.unsplash.com/photo-1455620611406-966ca6889d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1130&q=80',
	desc:
	  'Red fort in India New Delhi is a magnificient masterpeiece of humans',
  },
  {
	image:
	  'https://images.unsplash.com/photo-1477587458883-47145ed94245?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
	desc:
	  'Sample Description below the image for representation purpose only',
  },
  {
	image:
	  'https://images.unsplash.com/photo-1568700942090-19dc36fab0c4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
	desc:
	  'Sample Description below the image for representation purpose only',
  },
  {
	image:
	  'https://images.unsplash.com/photo-1584271854089-9bb3e5168e32?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80',
	desc:
	  'Sample Description below the image for representation purpose only',
  },]
const ListSection = ({nameSection}) => {
  return (
   
	<View style={styles.productSection} >
	<View style={styles.titleList} >
	<Text>{nameSection}</Text>
	</View>
	<FlatList style={styles.listCategoryStyle}
		  data={listCategory}
		  keyExtractor={(item) => item.name}
		  horizontal = { true }
		  renderItem={({ item }) => (
		   <ProductItem item={item} isHot={false}/>
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