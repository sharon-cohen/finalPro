import React, {useState, useEffect} from 'react';
import {  Dimensions ,View,ScrollView, Text, FlatList, StyleSheet,TouchableOpacity,SafeAreaView} from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { watchPersonData } from '../../redux/product/productActions';
import { initdata } from '../../redux/product/productActions';
import { createPortal } from 'react-dom';
import Header from '../../components/Header' 
import CategoryItem from './componemt/CategoryItem';
import ProductItem from './componemt/ProductItem';
import { listItemSection } from './static/ListSectionItem';
import ListSection from './componemt/ListSection';
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
  const windowHeight = Dimensions.get('window').height;

  const styles = StyleSheet.create({
	MainContainer: {
	 
		flex: 1,
		marginTop: 5,
		backgroundColor: '#F5FCFF',
	},
	headerSection:{
		height:windowHeight*0.08,
	},
	categorySection:{
		height:windowHeight*0.12,
		backgroundColor:"blue",

	},
	hotSection:{
		height:windowHeight*0.4,
		
		backgroundColor:"pink",
		
		margin: 10,
	},
	titleList:{
		height:"15%",
		backgroundColor:"red",
	},
	productSection:{
		height:windowHeight*0.4,
		backgroundColor:"gray",
		
		margin: 10,
	},
	listCategoryStyle:{
	
		flex: 1,
	}
  
	
  
  });
const mapStateToProps = (state) => {
  return {
    personData: state.listPro.list
  };
}

const mapDispatchToProps = (dispatch) => {
  return { 
    watchPersonData: () => dispatch(watchPersonData()),
	initdata:()=>dispatch(initdata()),
};
}

 const HomePage = ({watchPersonData,personData,initdata}) => {
	useEffect(() => {
		console.log('hey')
		console.log(watchPersonData())
	  }, []);
	 

	return(
	<ScrollView style={styles.MainContainer}>

	  <SafeAreaView style={styles.MainContainer}>
	  <View style={styles.headerSection} >
	  <Header/>
	  
	  </View>
	  <View style={styles.categorySection} >
	  <FlatList style={styles.listCategoryStyle}
            data={listCategory}
            keyExtractor={(item) => item.name}
            horizontal = { true }
			renderItem={({ item }) => (
             <CategoryItem item={item}/>
            )}
          />
	  </View>
	  <View style={styles.hotSection} >
	  <ProductItem item={listCategory[0]} isHot={true}/>
	  </View>
	  {listItemSection.map((sec) =>
              <View style={styles.productSection} key={sec.name}>
                <ListSection nameSection={sec.sectionName}/>
    
              </View>)}
	  
		
	  
	  {/* <Text>{JSON.stringify(personData)}</Text> */}
	  

  
	</SafeAreaView>
	</ScrollView>
	  )
		};
  
  
  
	
	
		HomePage.propTypes = {
		personData: PropTypes.array,
	  
	};	
	export default connect(
	  mapStateToProps,
	  mapDispatchToProps
	)(HomePage )