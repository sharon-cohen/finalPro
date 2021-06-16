import * as React from 'react';
import { connect } from 'react-redux';
import { Image,Dimensions,Text, View ,StyleSheet,Button} from 'react-native';
import { NameAndPrice } from '../../components/NameAndPrice';
import { firebase } from '../../firebase/config';
import { getItemIdDocByName } from '../../firebase/CommonQueries';
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
	
	bottomView: {
		width: '100%',
		height: 50,
		justifyContent: 'flex-end',
		position: 'absolute',
		bottom: 0,
	  },
	
  
  });
export const ProductPage= (item) => {
	const upateRegItem = async () => {
		let id=await getItemIdDocByName(item.route.params.name)
		await firebase.firestore().collection('data').doc(id)
		.update({
			reg: item.route.params.reg + 1,
		  });
	}
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
			<NameAndPrice item={item.route.params}/>
			 
		</View>
		
          
		<View style={styles.bottomView}>
      <Button  title='רכשו עכשיו!' onPress={() => upateRegItem()}  />
    </View>
	  </View>
	);
  }
