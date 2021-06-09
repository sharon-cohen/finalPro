import * as React from 'react';
import { connect } from 'react-redux';
import { Image,Dimensions,Text, View ,StyleSheet} from 'react-native';
const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;
const styles = StyleSheet.create({
	MainContainer: {
	 
		flex: 1,
		marginTop: 5,
		backgroundColor: '#F5FCFF',
	},
	imageSection:{
		height:windowWidth*(3/4),
	
	},
	theImage:{
		height:"100%",
		width:"100%",
		resizeMode: 'contain' 
	},
	headerSection:{
		height:windowHeight*0.3*0.6,
		backgroundColor:"blue",

	},
	
  
	
  
  });
export const ProductPage= (item) => {
	console.log(item.route.params.image)
	return (
	  <View style={styles.MainContainer}>
		<View style={styles.imageSection}>
		<Image style= {styles.theImage}
     
        source={{
          uri: item.route.params.image,
        }}
      />
	  </View>
		<View style={styles.headerSection}>
			<Text>{item.route.params.name}</Text>
		</View>
	  </View>
	);
  }
