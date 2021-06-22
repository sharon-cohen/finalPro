import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View,Button } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { firebase } from '../../firebase/config';
import { useState } from 'react';

export  function UplodImage(value) {
	
	const [imageUrl, setImageUrl] = useState('https://i.imgur.com/TkIrScD.png');
	let openImagePickerAsync = async () => {
	
	let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      alert('Permission to access camera roll is required!');
      return;
    }

    let pickerResult = await ImagePicker.launchImageLibraryAsync();
    if (!pickerResult.cancelled) {
    
     uploadImage(pickerResult.uri);
    }
  };
  const uploadImage = async(uri) => {
    
	const response = await fetch(uri);
    const blob = await response.blob();

	var ref = firebase.storage().ref().child(uri);
    await ref.put(blob)
	await ref.getDownloadURL().then((url) => setImageUrl(url))
	

  }
 const addFireBaseNewItem = async()=>{
	if (imageUrl !='https://i.imgur.com/TkIrScD.png')
	{
		
		await firebase.firestore().collection('data').add({
			name:value.route.params['שם המוצר'],
			goal:value.route.params['מינמום נרשמים'],
			image:imageUrl,
			newPrice:value.route.params['מחיר אחרי הנחה'],
			oldPrice:value.route.params['מחיר לפני הנחה'],
			reg:0,
			category:"לבית ולגן"
		  })
	alert('המוצר נשמר בהצלחה')
	value.navigation.navigate("HomeStack")
}	
 }
 
 
 const saveForm= ()=> {
    
  } 
  return (
    <View style={styles.container}>
      <Image source={{ uri: imageUrl }} style={styles.logo} />
      <Text style={styles.instructions}>
        To share a photo from your phone with a friend, just press the button below!
      </Text>

      <TouchableOpacity onPress={openImagePickerAsync} style={styles.button}>
        <Text style={styles.buttonText}>Pick a photo</Text>
      </TouchableOpacity>
	  <View style={styles.buttonSubmit}>
      <Button  title='פרסם את המוצר' onPress={addFireBaseNewItem}  />
    </View>
	
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 305,
    height: 159,
    marginBottom: 20,
  },
  instructions: {
    color: '#888',
    fontSize: 18,
    marginHorizontal: 15,
    marginBottom: 10,
  },
  button: {
    backgroundColor: 'blue',
    padding: 20,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 20,
    color: '#fff',
  },
  buttonSubmit: {
	backgroundColor:'green',
	width: '100%',
	height: 50,
	justifyContent: 'flex-end',
	position: 'absolute',
	bottom: 0,
  },
});