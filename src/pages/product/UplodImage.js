import React, { useState } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View, Button, Dimensions } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { firebase } from '../../firebase/config';
import { connect } from 'react-redux';
import { setPersonData } from '../../redux/product/productActions';
import Header from '../../components/Header';
import { getItemIdDocByName } from '../../firebase/CommonQueries';
const windowHeight = Dimensions.get('window').height;
const mapDispatchToProps = (dispatch) => ({
  setNewProduct: (product) => dispatch(setPersonData(product)),
});
const UplodImage = (value) => {
  console.log(value, 'PROPS');
  const [imageUrl, setImageUrl] = useState('https://i.imgur.com/TkIrScD.png');
  const openImagePickerAsync = async () => {
    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      alert('Permission to access camera roll is required!');
      return;
    }

    const pickerResult = await ImagePicker.launchImageLibraryAsync();
    if (!pickerResult.cancelled) {
      uploadImage(pickerResult.uri);
    }
  };
  const uploadImage = async (uri) => {
    const response = await fetch(uri);
    const blob = await response.blob();

    const ref = firebase.storage().ref().child(uri);
    await ref.put(blob);
    await ref.getDownloadURL().then((url) => setImageUrl(url));
  };
  const addFireBaseNewItem = async () => {
    if (imageUrl !== 'https://i.imgur.com/TkIrScD.png') {
      const productObj = {
        name: value.route.params.productName,
        goal: value.route.params.amountOfPeople,
        image: imageUrl,
        newPrice: value.route.params.priceAfterDiscount,
        oldPrice: value.route.params.priceBeforeDiscount,
        reg: 0,
        dis: value.route.params.description,
        category: value.route.params.category,
      };
      await firebase.firestore().collection('data').add(productObj);
      const idDoc = await getItemIdDocByName(productObj.name);
      await firebase.firestore().collection('data').doc(idDoc).update({
        id: idDoc,
      });
      value.setNewProduct(productObj);
      alert('המוצר נשמר בהצלחה');
      value.navigation.navigate('HomeStack');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerSection}>
        <Header navigation={value.navigation} withGoBack={true} />
      </View>
      <View style={styles.imageSection}>
      <Image source={{ uri: imageUrl }} style={styles.logo} />
      <TouchableOpacity onPress={openImagePickerAsync} style={styles.button}>
        <Text style={styles.buttonText}>בחר תמונה</Text>
      </TouchableOpacity>
      </View>
      <View style={styles.buttonSubmit}>
        <Button title="פרסם את המוצר" onPress={addFireBaseNewItem} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  imageSection:{
    alignItems: 'center',
    justifyContent: 'center',
    },
  logo: {
    marginTop:"10%",
    width: 305,
    height: 200,
    marginBottom: 20,
  },
  instructions: {
    color: '#888',
    fontSize: 18,
    marginHorizontal: 15,
    marginBottom: 10,
  },
  headerSection: {
    height: windowHeight * 0.07,
    marginTop:30,
  },
  button: {
    backgroundColor: '#43465e',
    padding: 20,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 20,
    color: '#fff',
  },
  buttonSubmit: {
    backgroundColor: '#c1071e',
    width: '100%',
    height: 50,
    justifyContent: 'flex-end',
    position: 'absolute',
    bottom: 0,
  },
});
export default connect(null, mapDispatchToProps)(UplodImage);
