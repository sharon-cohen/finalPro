import React, { useCallback, useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { firebase } from './src/firebase/config';
import { HomeStackScreen } from './src/pages/home/componemt/HomeStackScreen';
import   Login  from './Login';
import { connect } from 'react-redux';
import { setUser } from './src/redux/User/userActions';
import { getUserByUID } from './src/firebase/CommonQueries';
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



const SplashApp = ({navigation,setCurrentUser}) => {
 
  const [data, setData] = useState(null);
  useEffect(() => {
    async function IsLoggedIn(){
      try {
        await new Promise((resolve, reject) =>
          firebase.auth().onAuthStateChanged(
            async user => {
              if (user) {
               
                resolve(user)
                const theUser= await getUserByUID(user.uid)
                const theUserData=theUser.data()
                const userInRedux = {email:user.email, uid:user.uid,name:theUserData['name'],isManager:theUserData['isManag']};
                setCurrentUser(userInRedux)
                setData(true)
              } else {
               
                reject('no user logged in')
                setData(false)
              }
            },
            error => reject(error)
          )
        )
        return true
      } catch (error) {
        return false
      }
    }
    IsLoggedIn()
    
    
  }, []);
  
  
  return (
    data==null?<View
            style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
            >
            <Text>SplashScreen Demo! 👋</Text>
            <Entypo name="rocket" size={30} />
          </View>:data==true?<HomeStackScreen navigation={navigation}/>:<Login navigation={navigation}/>
    );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
    marginHorizontal: 40,
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SplashApp )








