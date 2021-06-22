import * as React from 'react';
import { connect } from 'react-redux';
import { Image,Dimensions,Text, View ,StyleSheet,Button} from 'react-native';
import { NameAndPrice } from '../../components/NameAndPrice';
import { firebase } from '../../firebase/config';
import { getItemIdDocByName } from '../../firebase/CommonQueries';
import { setUser } from '../../redux/User/userActions';
const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;
const mapStateToProps = (state) => {
	
	return {
    currentUser: state.user,
	
  };
}

const mapDispatchToProps = (dispatch) => {
  return { 
  setCurrentUser: (user) => dispatch(setUser(user)),

};
}
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
const ProductPage= ({ route, navigation, currentUser}) => {
	const upateRegItem = async () => {
		let id=await getItemIdDocByName(route.params.item.name)
		await firebase.firestore().collection('data').doc(id)
		.update({
			reg: route.params.item.reg + 1,
		  });
		  var ref = await firebase.firestore().collection("users").doc(currentUser.user.uid);

		  
		  await ref.update({
			  myItems: firebase.firestore.FieldValue.arrayUnion(id)
		  });
		  
		  alert("finish")
		}
		
		return (
	  <View style={styles.MainContainer}>
		<View style={styles.imageSection}>
		<Image style= {styles.theImage}
     
        source={{
          uri: route.params.item.image,
        }}
      />
	  </View>
		<View style={styles.headerSection}>
			<NameAndPrice item={route.params.item}/>
			 
		</View>
		
          
	<View style={styles.bottomView}>
      <Button  title='רכשו עכשיו!' onPress={() => upateRegItem()}  />
    </View>
	  </View>
	);
  }
  export default connect(
	mapStateToProps,
	mapDispatchToProps
  )(ProductPage)