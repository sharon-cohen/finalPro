

import React ,{useState,useEffect}from 'react';
import {View, SafeAreaView, StyleSheet,Text,Button, Dimensions,ScrollView} from 'react-native';
import {
  Title,
  Caption,
} from 'react-native-paper';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { setUser } from '../../redux/User/userActions';
import { connect } from 'react-redux';
import { signOutUser } from '../../firebase/CommonQueries';
import { getUserItemByUID,toggleTypeUser } from '../../firebase/CommonQueries';
import ListSection from '../home/componemt/ListSection';
import Header from '../../components/Header' 
import DialogInput from 'react-native-dialog-input';
import { CustomProgressBar } from '../../components/CustomProgressBar';
import {  ProgressDialog  } from 'react-native-simple-dialogs';

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

const mapStateToProps = (state) => {
	
	return {
    currentUser: state.user,
	personData: state.listPro.list,

  };
}

const mapDispatchToProps = (dispatch) => {
  return { 
  setCurrentUser: () => dispatch(setUser()),

};
}
const ProfilePage= ({currentUser,navigation,personData}) => {
	const [dataUid, setDataUid] = useState(null);
	const [personDataList,setPersonDataList]= useState(null)
  const [poductJoin,setPoductJoin]= useState(0)
  const [poductReady,setPoductReady]= useState(0)
	const [isDialogVisible,setIsDialogVisible]=useState(false)
  const [isProgress,setIsProgress]=useState(false)

  useEffect(() => {
		let personListItems=[]
		let countRedy=0
    let countJoin=0
    if(dataUid){
     
			if (dataUid.lenght!=0){
			for(let i=0; i<personData.length;i++){
			 
			  if(dataUid.includes(personData[i].id)){
          if (Number(personData[i].reg)>=Number(personData[i].goal)){
            countRedy++
          }
          else{
            countJoin++
          }
          personListItems.push(personData[i])
        }
        
        
			}
		}
		setPersonDataList(personListItems)
    setPoductJoin(countJoin)
    setPoductReady(countRedy)
	}
	  }, [dataUid])
	useEffect(() => {
		async function fetchMyAPI() {
		 
		  const items=await getUserItemByUID(currentUser.user.uid)
		  setDataUid(items)
		 
			
		}
		
		fetchMyAPI()
	  }, [])
	
    
    const sendInput= async (inputText)=>{
      setIsDialogVisible(false)
      console.log("sendInput (DialogInput#1): "+inputText);
      setIsProgress(true)
      await toggleTypeUser(currentUser.user.uid,currentUser.user.isManager,inputText)
      setIsProgress(false)
    }
  return (

<SafeAreaView style={styles.container}>
<View style={styles.headerSection} >
<Header navigation={navigation}/>
	  </View> 
      
    <ScrollView style={styles.scrollView}>
   <ProgressDialog
    visible={isProgress}
    title="Progress Dialog"
    message="Please, wait..."
/>
      <View style={styles.userInfoSection}>
      <DialogInput isDialogVisible={isDialogVisible}
                    title={"GroupBuy Business"}
                    
                    message ={"הקלידו את מספר הטלפון שלכם ונחזור אליכם בהקדם "}
                    textInputProps={{keyboardType:'number-pad'}}
                    submitInput={ (inputText) => {sendInput(inputText)} }
                    submitText={"אישור"}
                    cancelText={"ביטול"}
                    closeDialog={ () => {setIsDialogVisible(false)}}>
        </DialogInput>
        <View style={{ marginTop: 20}}>
          
          <View style={{}}>
            <Text style={[styles.title, {
             
            }]}>שלום,{'\n'}{currentUser.user.name}</Text>
            
          </View>
        </View>
      </View>

      <View style={styles.userInfoSection}>
        <View style={styles.row}>
         
          <Text style={{color:"#777777", marginLeft: 20}}>{currentUser.user.email}</Text>
		  <Icon name="email" color="#777777" size={20}/>
        </View>
      </View>

      <View style={styles.infoBoxWrapper}>
          <View style={[styles.infoBox, {
            borderRightColor: '#dddddd',
            borderRightWidth: 1
          }]}>
            <Title>{poductJoin}</Title>
            <Caption>דילים שהצטרפתי</Caption>
          </View>
          <View style={styles.infoBox}>
            <Title>{poductReady}</Title>
            <Caption>דילים שרכשתי</Caption>
          </View>
      </View>
      {personDataList!=null && personDataList.length!=0?<View style={styles.productSection} >
                <ListSection nameSection={"מוצרים שלי"} listItems={personDataList} navigation={navigation}/>
              </View>:null}
              <View style={styles.buttonJoinBusiness}>
         {!currentUser.user.isManager?<Button
          onPress={() => setIsDialogVisible(true)}
          title="הצטרף ל GroupBuy Business"
          color="black"
        /> :null} 
     </View>
    <View style={styles.bottomView}>
      <Button  title='התנתק' onPress={() => signOutUser(navigation)} />
    </View>
    </ScrollView>
    </SafeAreaView>
  );
};

  export default connect(
	mapStateToProps,
	mapDispatchToProps
  )(ProfilePage)

const styles = StyleSheet.create({
  container: {
    flex: 1,
	
  },
  productSection:{
		height:windowHeight*0.4,
		backgroundColor:"gray",
		margin: 10,
		
	},
  buttonJoinBusiness:{
    width:windowWidth*0.5,
    alignSelf: 'flex-end',
    margin: 10,
  },
  scrollView: {
   
  
  },
  userInfoSection: {
    paddingHorizontal: 30,
    marginBottom: 25,
	alignSelf: 'flex-end'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  caption: {
    fontSize: 30,
    lineHeight: 14,
    fontWeight: '500',
  },
  row: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  infoBoxWrapper: {
    borderBottomColor: '#dddddd',
    borderBottomWidth: 1,
    borderTopColor: '#dddddd',
    borderTopWidth: 1,
    flexDirection: 'row',
    height: 100,
  },
  headerSection:{
		height:windowHeight*0.09,
		marginTop:15
	},
  infoBox: {
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  menuWrapper: {
    marginTop: 10,
  },
  menuItem: {
    flexDirection: 'row',
    paddingVertical: 15,
    paddingHorizontal: 30,
  },
  menuItemText: {
    color: '#777777',
    marginLeft: 20,
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 26,
  },
  
	bottomView: {
		width: '100%',
		height: 50,
		justifyContent: 'flex-end',
	
	  },
});