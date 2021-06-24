import React from "react";
import { SafeAreaView, StyleSheet, TextInput, ScrollView, StatusBar ,Button,View} from "react-native";
import { TitleForm } from "./TitleForm";
import RNPickerSelect from 'react-native-picker-select';
import { ConfirmDialog } from 'react-native-simple-dialogs';

export const ProductForm = ({navigation}) => {
  const [productName, setProductName] = React.useState(null);
  const [description,setDescription] = React.useState(null);
  const [priceBeforeDiscount,setPriceBeforeDiscount] = React.useState(null);
  const [priceAfterDiscount,setPriceAfterDiscount] = React.useState(null);
  const [amountOfPeople,setamountOfPeople] = React.useState(null);
  const [category,setCategory] = React.useState(null);
  const submit =()=>{
   if (productName!=null && description != null && priceBeforeDiscount != null && priceAfterDiscount!=null && amountOfPeople!=null && category!=null)
  {
    const formDetails = {productName:productName,description:description,priceBeforeDiscount:priceBeforeDiscount,priceAfterDiscount:priceAfterDiscount,amountOfPeople:amountOfPeople,category:category}
    navigation.navigate("uplodImage",formDetails)
  }   
  
    else
      alert("חובה למלא את כל השדות")
   console.log(description)
   console.log(priceBeforeDiscount)
   console.log(priceAfterDiscount)
   console.log(productName)
   console.log(category)
  }
  
  return (
    <SafeAreaView  style={styles.container}>
       <ScrollView style={styles.scrollView}>
      <TitleForm title={'שם המוצר'}/>
      <TextInput
        style={styles.input}
        onChangeText={setProductName}
        value={productName}
      />
      <TitleForm title={'תיאור המוצר'}/>
      <TextInput
        style={styles.input}
        onChangeText={setDescription}
        value={description}
       
      />
      <TitleForm title={'מחיר לפני הנחה'}/>
      <TextInput
        style={styles.input}
        onChangeText={setPriceBeforeDiscount }
        value={priceBeforeDiscount}
        keyboardType="number-pad"
        returnKeyType="done"
      />
      <TitleForm title={'מחיר אחרי הנחה'}/>
      <TextInput
        style={styles.input}
        onChangeText={setPriceAfterDiscount}
        value={priceAfterDiscount}
        keyboardType="number-pad"
        returnKeyType="done"
      />
      <TitleForm title={'מינימום נרשמים'}/>
      <TextInput
        style={styles.input}
        onChangeText={setamountOfPeople}
        value={amountOfPeople}
        keyboardType="number-pad"
        returnKeyType="done"
      />
     <TitleForm title={'בחירת קטגוריה'}/>
   <View style={styles.picker}>
    <RNPickerSelect  
            onValueChange={(value) => setCategory(value)}
            style={{ inputAndroid: { color: 'black' } }}
            useNativeAndroidPickerStyle={false}
                items={[
                { label: 'לבית ולגן', value: 'לבית ולגן' },
                { label: 'קניות', value: 'קניות' },
                { label: 'אלקטרוניקה', value: 'אלקטרוניקה' },
                { label: 'חופשות ', value: 'חופשות' },
               

            ]}
        />
    </View>
    <Button
        title="הוספת תמונה"
        color="#f194ff"
        onPress={submit}
      />
     </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    textAlign:'right',
    width:'100%'
  },
  scrollView: {
   
    marginHorizontal: 20,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,

  },
  picker:{ height: 40,
   
    margin: 12,},
});


// import React, { Component } from 'react';
// import { View, Dimensions , StyleSheet, Button ,KeyboardAvoidingView,  ScrollView } from 'react-native';

// import t from 'tcomb-form-native'; // 0.6.9
// import { LogBox } from "react-native"
// const windowHeight = Dimensions.get('window').height;

// const Form = t.form.Form;

// const User = t.struct({
//   "שם המוצר":t.String,
//  "תיאור המוצר":t.String,
//   "מחיר לפני הנחה": t.Number,
//   "מחיר אחרי הנחה": t.Number,
//   "מינמום נרשמים": t.Number,
  
//   terms: t.Boolean
// });

// const formStyles = {
//   ...Form.stylesheet,
//   formGroup: {
//     normal: {
//       marginBottom: 10
//     },
//   },
//   controlLabel: {
//     normal: {
//       color: 'blue',
//       fontSize: 18,
//       marginBottom: 7,
//       fontWeight: '600'
//     },
//     // the style applied when a validation error occours
//     error: {
//       color: 'red',
//       fontSize: 18,
//       marginBottom: 7,
//       fontWeight: '600'
//     }
//   }
// }

// const options = {
//   fields: {
    
//     "שם המוצר":{
//       error:"שדה זה הינו חובה"

//     },
//  "תיאור המוצר":{
//    error:"שדה זה הינו חובה"
//  },
//   "מחיר לפני הנחה":{
//     error:"שדה זה הינו חובה"

//   },
//   "מחיר אחרי הנחה":{
//     error:"שדה זה הינו חובה"

//   },
//   "מינמום נרשמים":{
//     error:"שדה זה הינו חובה"

//   },
//   },
//   stylesheet: formStyles,
// };

// export  class ProductForm extends Component {
//   constructor(props) {
//     super(props);
   
//   }
//   handleSubmit = () => {
//     const value = this._form.getValue();
   
//     if(value){
//       this.props.navigation.navigate("uplodImage")

//     }
//     this.props.navigation.navigate("uplodImage",value)
//   }
  
//   render() {
//     return (
      
//       <View style={styles.container}>
//        <KeyboardAvoidingView  behavior="padding" enabled   keyboardVerticalOffset={100}>
//        <ScrollView>
//         <Form 
//           ref={c => this._form = c}
//           type={User} 
//           options={options}
//         />
//         </ScrollView>
//         </KeyboardAvoidingView>
//         <Button
//           title="הוספת תמונה"
//           onPress={this.handleSubmit}
//         />
//       </View>
//     );
//   } 
// }  

// const styles = StyleSheet.create({
//   container: {
//    height:windowHeight,
//     padding: 20,
//     backgroundColor: '#ffffff',
//   },
// });
