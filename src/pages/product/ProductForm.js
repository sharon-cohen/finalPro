
import React, { Component } from 'react';
import { View, Dimensions , StyleSheet, Button ,KeyboardAvoidingView,  ScrollView } from 'react-native';

import t from 'tcomb-form-native'; // 0.6.9
import { LogBox } from "react-native"
const windowHeight = Dimensions.get('window').height;
LogBox.ignoreAllLogs()
const Form = t.form.Form;

const User = t.struct({
  "שם המוצר":t.String,
 "תיאור המוצר":t.String,
  "מחיר לפני הנחה": t.Number,
  "מחיר אחרי הנחה": t.Number,
  "מינמום נרשמים": t.Number,
  
  terms: t.Boolean
});

const formStyles = {
  ...Form.stylesheet,
  formGroup: {
    normal: {
      marginBottom: 10
    },
  },
  controlLabel: {
    normal: {
      color: 'blue',
      fontSize: 18,
      marginBottom: 7,
      fontWeight: '600'
    },
    // the style applied when a validation error occours
    error: {
      color: 'red',
      fontSize: 18,
      marginBottom: 7,
      fontWeight: '600'
    }
  }
}

const options = {
  fields: {
    
    "שם המוצר":{
      error:"שדה זה הינו חובה"

    },
 "תיאור המוצר":{
   error:"שדה זה הינו חובה"
 },
  "מחיר לפני הנחה":{
    error:"שדה זה הינו חובה"

  },
  "מחיר אחרי הנחה":{
    error:"שדה זה הינו חובה"

  },
  "מינמום נרשמים":{
    error:"שדה זה הינו חובה"

  },
  },
  stylesheet: formStyles,
};

export  class ProductForm extends Component {
  constructor(props) {
    super(props);
   
  }
  handleSubmit = () => {
    const value = this._form.getValue();
   
    if(value){
      this.props.navigation.navigate("uplodImage")

    }
    this.props.navigation.navigate("uplodImage",value)
  }
  
  render() {
    return (
      
      <View style={styles.container}>
       <KeyboardAvoidingView  behavior="padding" enabled   keyboardVerticalOffset={100}>
       <ScrollView>
        <Form 
          ref={c => this._form = c}
          type={User} 
          options={options}
        />
        </ScrollView>
        </KeyboardAvoidingView>
        <Button
          title="הוספת תמונה"
          onPress={this.handleSubmit}
        />
      </View>
    );
  } 
}  

const styles = StyleSheet.create({
  container: {
   height:windowHeight,
    padding: 20,
    backgroundColor: '#ffffff',
  },
});
