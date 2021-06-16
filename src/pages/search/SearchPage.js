
  import React, { useState, useEffect } from 'react';

  import { connect } from 'react-redux';

  import { SafeAreaView, Text, StyleSheet, View, FlatList } from 'react-native';
  import { SearchBar } from 'react-native-elements';
  const mapStateToProps = (state) => {
	
	return {
    personData: state.listPro.list,
	
  };
}
 const SearchPage = ({personData,navigation}) => {
	const [search, setSearch] = useState('');
	const [filteredDataSource, setFilteredDataSource] = useState([]);
	const [masterDataSource, setMasterDataSource] = useState([]);
  
	useEffect(() => {
		
		console.log("sharona")
		console.log(personData)
		setMasterDataSource(personData)
	}, []);
  
	const searchFilterFunction = (text) => {
	  // Check if searched text is not blank
	  if (text) {
		// Inserted text is not blank
		// Filter the masterDataSource
		// Update FilteredDataSource
		const newData = masterDataSource.filter(function (item) {
		  const itemData = item.name

		  ? item.name.toUpperCase()
				: ''.toUpperCase();
		  const textData = text.toUpperCase();
		  return itemData.indexOf(textData) > -1;
		});
		setFilteredDataSource(newData);
		setSearch(text);
	  } else {
		// Inserted text is blank
		// Update FilteredDataSource with masterDataSource
		setFilteredDataSource(masterDataSource);
		setSearch(text);
	  }
	};
  
	const ItemView = ({ item }) => {
	  return (
		// Flat List Item
		
		
		<Text style={styles.itemStyle} onPress={() => getItem(item)}>
		  {item.name}
		  {'.'}
		 
		</Text>
	  );
	};
  
	const ItemSeparatorView = () => {
	  return (
		// Flat List Item Separator
		<View
		  style={{
			height: 0.5,
			width: '100%',
			backgroundColor: '#C8C8C8',
		  }}
		/>
	  );
	};
  
	const getItem = (item) => {
		navigation.navigate('product', item)
	};
  
	return (
	  <SafeAreaView style={{ flex: 1 }}>
		<View style={styles.container}>
		  <SearchBar
			round
			searchIcon={{ size: 24 }}
			onChangeText={(text) => searchFilterFunction(text)}
			onClear={(text) => searchFilterFunction('')}
			placeholder="Type Here..."
			value={search}
		  />
		  <FlatList
			data={filteredDataSource}
			keyExtractor={(item, index) => index.toString()}
			ItemSeparatorComponent={ItemSeparatorView}
			renderItem={ItemView}
		  />
		</View>
	  </SafeAreaView>
	);
  };
  
  const styles = StyleSheet.create({
	container: {
	  backgroundColor: 'white',
	},
	itemStyle: {
	  padding: 10,
	},
  });
  
  export default connect(
	mapStateToProps,
	null
  )(SearchPage )