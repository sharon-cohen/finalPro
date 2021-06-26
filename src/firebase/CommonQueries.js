import { firebase } from './config'
import { GenericMessage } from '../components/GenericMessage'
export const getUserItemByUID = async (uid) => {
  const docRef = await firebase.firestore().collection('users').doc(uid)
  const getData = await docRef.get()
  const theData = getData.data()

  if (theData.myItems) {
    return theData.myItems
  }
  return []
}
export const getUserByUID = (id) => {
  const docRef = firebase.firestore().collection('users').doc(id)
  return docRef.get()
}
export const getNameAlreadyExsist = async (name) => {
  let flag = false
  await firebase
    .firestore()
    .collection('data')
    .where('name', '==', name)
    .get()
    .then((docs) => {
      docs.forEach((doc) => {
        flag = true
      })
    })
    .catch((err) => GenericMessage('שגיאה', String(err)))
  return flag
}

export const getItemIdDocByName = async (name) => {
  let id = ''
  await firebase
    .firestore()
    .collection('data')
    .where('name', '==', name)
    .get()
    .then((docs) => {
      docs.forEach((doc) => {
        id = doc.id
      })
    })
    .catch((err) => GenericMessage('שגיאה', String(err)))
  return id
}
export const signOutUser = async (navigation) => {
  try {
    await firebase.auth().signOut()
  } catch (e) {
    console.log(e)
  }
  navigation.navigate('login')
}

export const toggleTypeUser = async (uid, isMamager, phoneNumber) => {
  const db = firebase.firestore()
  await db.collection('users').doc(uid).update({
    isManag: !isMamager,
    phoneNumber,
  })
}
