import React from "react";
import { View, Text,Button,StyleSheet } from "react-native";
import { connect } from 'react-redux';
import { IconButton} from 'react-native-paper';


const mapStateToProps = (state) => {
	
	return {
    currentUser: state.user,
	
  };
}
const Header = ({navigation,currentUser,withGoBack}) => {
  return (
    currentUser.user? withGoBack?<View
   style={styles.containerManagerUser}
   >
     <IconButton
    icon="arrow-right"
    color='#ffffff'
    size={20}
    onPress={() => navigation.goBack()}
  />
     
   <Text style={styles.text} >GroupBuy</Text>	
   </View>:
    currentUser.user.isManager?<View
    style={styles.containerManagerUser}
    >
      <Button
          onPress={() => navigation.navigate('productForm')}
          title="פרסם מוצר חדש"
          color="black"
        />  
        <Text style={styles.text} >GroupBuy</Text>	
    </View>:<View
    style={styles.containerRegularUser}
    >
       <Text style={styles.text} >GroupBuy</Text>	
    </View>:null
  );
};
const styles = StyleSheet.create({
  containerManagerUser: { 
    width: "100%",
    height:"100%",
    backgroundColor:'#c1071e', 
    flex: 1, 
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
	 padding:10,  
  
  },
    containerRegularUser: { 
      width: "100%",
      height:"100%",
      backgroundColor:'#c1071e', 
      flex: 1, 
      justifyContent: 'center',
      alignItems: 'center',
     
      },

      text:{
        color: '#ffffff'
      }
	
});
export default connect(
  mapStateToProps,
  null
)( Header )
