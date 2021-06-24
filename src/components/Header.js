import React from "react";
import { View, Text,Button,StyleSheet } from "react-native";
import { Colors } from "../static/ColorComfig";
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
	
	return {
    currentUser: state.user,
	
  };
}
const Header = ({navigation,currentUser}) => {
  console.log(currentUser)
  return (
   currentUser.user.isManager?<View
    style={styles.containerManagerUser}
    >
      <Text >GroupBuy</Text>	
      <Button
          onPress={() => navigation.navigate('productForm')}
          title="פרסם מוצר חדש"
          color="black"
        />  
    </View>:<View
    style={styles.containerRegularUser}
    >
       <Text >GroupBuy</Text>	
    </View>
  );
};
const styles = StyleSheet.create({
  containerManagerUser: { 
    width: "100%",
    height:"100%",
    backgroundColor:'#4286f4', 
    flex: 1, 
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
	  },
    containerRegularUser: { 
      width: "100%",
      height:"100%",
      backgroundColor:'#4286f4', 
      flex: 1, 
      justifyContent: 'center',
      alignItems: 'center',
      },
	
});
export default connect(
  mapStateToProps,
  null
)( Header )
