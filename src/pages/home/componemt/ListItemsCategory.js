import React from "react";
import ProductItem from "./ProductItem";
import {
	View,
	Text,
	FlatList,
  StyleSheet,
  SafeAreaView
} from "react-native";
const ListItemsCategory = ({listItems}) => {
	return(
<SafeAreaView style={styles.feed}>
	{listItems.map((pro) =>
              <View style={styles.productSection} key={pro.name}>
                <ProductItem item={pro} isHot={false} isItemsCategory={true}/>
              </View>)}
 </SafeAreaView>

);};
const styles = StyleSheet.create({
	feed: {
		flex: 1,
		flexDirection: 'row',
		flexWrap: 'wrap',
		padding: 16,
		justifyContent: 'space-between'  },
	   
	   
	   card: {
		backgroundColor: 'blue',
		
		width: '48%',
		aspectRatio: 1,
		marginBottom: 16   }
  });
  export default ListItemsCategory;