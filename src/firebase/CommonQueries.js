import { firebase } from "./config";

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