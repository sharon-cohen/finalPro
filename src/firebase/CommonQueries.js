import { firebase } from "./config";

export const getUserItemByUID= async (uid)=>{
	const docRef =  await firebase.firestore().collection('users').doc(uid);
	const getData= await docRef.get()
	const theData=getData.data()
	
	if(theData['myItems']){
		return theData['myItems']
	}
else{
	
	return []
}
}
export const getUserByUID = (id)=> {
	const docRef =  firebase.firestore().collection('users').doc(id);
	return docRef.get();
	

}

export const getItemIdDocByName = async(name)=> {
	let id=""
	await firebase.firestore()
	.collection('data')
	.where('name','==', name)
	.get()
	.then(docs => {
	  docs.forEach(doc => {
		id =doc.id
	
	  })
	 
	})
	.catch(err => console.log(err))
	return id
}
export const signOutUser = async (navigation) => {
	try {
	  await firebase.auth().signOut();
	} catch (e) {
	  console.log(e);
	}
	navigation.navigate('login')
  
};

export const toggleTypeUser = async (uid,isMamager,phoneNumber)=> {
	
	
	const db = firebase.firestore();
	await db.collection('users').doc(uid).update({
		isManag:!isMamager,
		phoneNumber:phoneNumber
	})


}