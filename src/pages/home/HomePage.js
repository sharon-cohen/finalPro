import React, {useState, useEffect} from 'react';
import {  Dimensions ,View,ScrollView, Text, FlatList, StyleSheet,TouchableOpacity,SafeAreaView} from 'react-native';
import PropTypes from 'prop-types';
import ListItemsCategory from './componemt/ListItemsCategory';
import { connect } from 'react-redux';
import { watchPersonData } from '../../redux/product/productActions';
import { initdata } from '../../redux/product/productActions';
import { selectedCategory } from '../../redux/category/categoryActions';
import Header from '../../components/Header' 
import CategoryItem from './componemt/CategoryItem';
import ProductItem from './componemt/ProductItem';
import { listItemSection,listItemCategory } from './static/ListSectionItem';
import ListSection from './componemt/ListSection';

  const windowHeight = Dimensions.get('window').height;

  const styles = StyleSheet.create({
	MainContainer: {
	 
		flex: 1,
		
		backgroundColor: '#F5FCFF',
	},
	headerSection:{
		height:windowHeight*0.09,
		marginTop:15
	},
	categorySection:{
		height:windowHeight*0.12,
		backgroundColor:"blue",
		

	},
	itemsCategory:{
		
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
    personData: state.listPro.list,
	theCategory:state.currentCategory.category
  };
}

const mapDispatchToProps = (dispatch) => {
  return { 
    watchPersonData: () => dispatch(watchPersonData()),
	initdata:()=>dispatch(initdata()),
	setCategory:(setCategoryName)=>dispatch(selectedCategory(setCategoryName))
};
}

 const HomePage = ({watchPersonData,personData,initdata,setCategory,theCategory,navigation}) => {
	const [hotItem, setHotItem] = useState(null);
	const [filterCategory,setFilterCategory]=useState([])
	useEffect(() => {
		watchPersonData()
		personData.sort(function(a, b) {
			return parseFloat(b.reg) - parseFloat(a.reg);
		});
		
		getListItemByCtegory()
	  }, [theCategory]);
	  useEffect(() => {
		
	   personData.sort(function(a, b) {
		   return parseFloat(b.reg) - parseFloat(a.reg);
	   });
	   
	  
	 }, []);
	
	  
	  const getListItemByCtegory=()=>{
	
		let itemsCategory=[]
		
		
		for (let i = 0, l = personData.length; i < l; i++) {
			
			
			if(theCategory==personData[i].category){
				itemsCategory.push(personData[i])
			}
		
		}
		
	
		setFilterCategory(itemsCategory)
		let mostRecomment=itemsCategory[0]
		for (let i = 0, l = itemsCategory.length; i < l; i++) {
			if(itemsCategory[i].reg>= mostRecomment.reg){
			mostRecomment=itemsCategory[i]
			}
		}
		setHotItem(mostRecomment)
	}

	return(
	<ScrollView style={styles.MainContainer}>

	  <SafeAreaView style={styles.MainContainer}>
	  <View style={styles.headerSection} >
	  <Header navigation={navigation}/>
	  </View> 
	  <View style={styles.categorySection} >
	  <FlatList style={styles.listCategoryStyle}
            data={listItemCategory}
            keyExtractor={(item) => item.category}
            horizontal = { true }
			renderItem={({ item }) => (
			<TouchableOpacity
			onPress={() => {
				setCategory(item.category)
				
			  }}
			>
			 <CategoryItem item={item}/>
			 </TouchableOpacity>
            )}
          />
	  </View>
	  {hotItem==null ?
	 <Text>dfdfd</Text>:<View style={styles.hotSection} >
	 
	 <ProductItem item={hotItem} isHot={true} isItemsCategory={false}/>
	 </View> 
	}
	  
	  {theCategory=="מומלצים" ? 
	  listItemSection.map((sec) =>
              <View style={styles.productSection} key={sec.sectionName}>
                <ListSection nameSection={sec.sectionName} listItems={personData} navigation={navigation}/>
              </View>) : 
			 
			  <View style={styles.itemsCategory}>
			  <ListItemsCategory listItems={filterCategory} navigation={navigation}/>
			</View>}
			  
	  
		
	  
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